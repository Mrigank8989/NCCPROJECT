// ================== ADMIN PANEL JS ==================

// Global state
let allAttempts = [];
let allUsers = [];

// On load: verify admin, then init
document.addEventListener("DOMContentLoaded", async () => {
  if (!window.auth) {
    console.error("auth module not found. Make sure authorisation.js is loaded before admin.js");
    alert("Authentication module not loaded.");
    return;
  }

  const currentUser = auth.getLoggedInUser();
  if (!currentUser || !currentUser.is_admin) {
    alert("Access denied. Admins only.");
    window.location.href = "index.html";
    return;
  }

  setupTabs();
  setupLogout();
  setupSnapshotModal();

  await loadInitialData();
});

// ============ INITIAL DATA LOADING ============

async function loadInitialData() {
  await Promise.all([fetchAllAttempts(), fetchAllUsers()]);
  populateUserFilter();
  renderScoresTable(allAttempts);
  renderUserManagement();
  renderQuizStatistics();
  setupFilterControls();
}

// Fetch all quiz attempts (ADMIN VIEW)
// Requires backend route: GET /api/admin/attempts
async function fetchAllAttempts() {
  const scoresTableBody = document.getElementById("scoresTableBody");
  scoresTableBody.innerHTML = `
    <tr><td colspan="10" class="text-center">Loading results...</td></tr>
  `;

  try {
    const res = await fetch("https://nccserver.onrender.com/api/admin/attempts");
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.warn("Expected array for attempts, got:", data);
      allAttempts = [];
    } else {
      allAttempts = data;
    }

    if (!allAttempts.length) {
      scoresTableBody.innerHTML = `
        <tr><td colspan="10" class="text-center">No quiz attempts found.</td></tr>
      `;
      return;
    }
  } catch (err) {
    console.error("Error fetching attempts:", err);
    scoresTableBody.innerHTML = `
      <tr><td colspan="10" class="text-center">Failed to load attempts.</td></tr>
    `;
  }
}

// Fetch all users
// Uses: GET /api/getAllUsers
async function fetchAllUsers() {
  try {
    const res = await fetch("https://nccserver.onrender.com/api/getAllUsers");
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.warn("Expected array for users, got:", data);
      allUsers = [];
    } else {
      allUsers = data;
    }
  } catch (err) {
    console.error("Error fetching users:", err);
    allUsers = [];
  }
}

// =============== TABS & BASIC UI ===============

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const tabId = button.dataset.tab;
      document.getElementById(tabId).classList.add("active");
    });
  });
}

function setupLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", () => {
    auth.logoutUser();
  });
}

// Snapshot modal (for viewing quiz snapshots)
function setupSnapshotModal() {
  const modal = document.getElementById("snapshotModal");
  const img = document.getElementById("snapshotImage");
  const closeBtn = document.getElementById("closeSnapshotModal");

  if (!modal || !img || !closeBtn) return;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-snapshot-btn")) {
      const src = e.target.dataset.img;
      img.src = src;
      modal.classList.remove("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    img.src = "";
    modal.classList.add("hidden");
  });
}

// =============== SCORES TAB ===============

function setupFilterControls() {
  const applyFilterBtn = document.getElementById("applyFilterBtn");
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", applyScoresFilter);
  }
}

// Populate user dropdown from attempts
function populateUserFilter() {
  const userFilter = document.getElementById("userFilter");
  if (!userFilter) return;

  const uniqueUsers = new Map(); // user_id -> username

  allAttempts.forEach((attempt) => {
    if (attempt.user_id && attempt.username) {
      uniqueUsers.set(attempt.user_id, attempt.username);
    }
  });

  userFilter.innerHTML = `<option value="all">All Users</option>`;
  uniqueUsers.forEach((username, userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = username;
    userFilter.appendChild(option);
  });
}

function applyScoresFilter() {
  const userFilter = document.getElementById("userFilter");
  const difficultyFilter = document.getElementById("difficultyFilter");

  let filtered = [...allAttempts];

  if (userFilter && userFilter.value !== "all") {
    const userId = parseInt(userFilter.value, 10);
    filtered = filtered.filter((a) => a.user_id === userId);
  }

  if (difficultyFilter && difficultyFilter.value !== "all") {
    filtered = filtered.filter(
      (a) => (a.difficulty || "").toLowerCase() === difficultyFilter.value
    );
  }

  renderScoresTable(filtered);
}

// Render scores table
function renderScoresTable(attempts) {
  const tbody = document.getElementById("scoresTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (!attempts.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="10" class="text-center">No matching results.</td>`;
    tbody.appendChild(row);
    return;
  }

  attempts.forEach((attempt) => {
    const dateStr = attempt.attempt_date
      ? formatDateTime(attempt.attempt_date)
      : "N/A";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${attempt.username || "Unknown"}</td>
      <td>Set ${attempt.quiz_id}</td>
      <td>${capitalizeFirstLetter(attempt.difficulty || "N/A")}</td>
      <td>${attempt.score ?? 0}</td>
      <td>${attempt.correct ?? 0}</td>
      <td>${attempt.wrong ?? 0}</td>
      <td>${attempt.unanswered ?? 0}</td>
      <td>${attempt.percentage ?? 0}%</td>
      <td>${dateStr}</td>
      <td>
        ${
          attempt.snapshot
            ? `<button class="btn btn-secondary view-snapshot-btn" data-img="${attempt.snapshot}">View</button>`
            : "No Image"
        }
      </td>
      <td>
        <button class="action-btn delete-btn" data-id="${attempt.attempt_id}">
          Delete
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });

  attachScoreRowListeners();
}

function attachScoreRowListeners() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      deleteAttempt(id);
    });
  });
}

// Delete attempt via backend
async function deleteAttempt(attemptId) {
  if (!confirm("Are you sure you want to delete this attempt?")) return;

  try {
    const res = await fetch(
      `https://nccserver.onrender.com/api/admin/attempts/${attemptId}`,
      { method: "DELETE" }
    );

    if (!res.ok) throw new Error("Delete failed");

    alert("Attempt deleted successfully.");
    // Refresh data
    await fetchAllAttempts();
    populateUserFilter();
    renderScoresTable(allAttempts);
    renderQuizStatistics();
  } catch (err) {
    console.error("Failed to delete attempt:", err);
    alert("Failed to delete attempt.");
  }
}

// =============== USER MANAGEMENT TAB ===============

function renderUserManagement() {
  const tbody = document.getElementById("userTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  // Filter out admins
  const nonAdminUsers = allUsers.filter((u) => !u.is_admin);

  if (!nonAdminUsers.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="6" class="text-center">No users found.</td>`;
    tbody.appendChild(row);
    return;
  }

  nonAdminUsers.forEach((user) => {
    const attemptsForUser = allAttempts.filter(
      (a) => a.user_id === user.user_id
    );
    const totalQuizzes = attemptsForUser.length;
    const avgPercentage = totalQuizzes
      ? Math.round(
          attemptsForUser.reduce((sum, a) => sum + (a.percentage || 0), 0) /
            totalQuizzes
        )
      : 0;

    // Latest snapshot if any
    const latestWithSnapshot = attemptsForUser.find((a) => !!a.snapshot);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.full_name || ""}</td>
      <td>${totalQuizzes}</td>
      <td>${avgPercentage}%</td>
      <td>
        ${
          latestWithSnapshot
            ? `<button class="btn btn-secondary view-snapshot-btn" data-img="${latestWithSnapshot.snapshot}">View</button>`
            : "No Image"
        }
      </td>
      <td>
        <div class="action-btns">
          <button class="action-btn view-btn" data-userid="${user.user_id}">
            View Scores
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });

  attachUserManagementListeners();
}

function attachUserManagementListeners() {
  document
    .querySelectorAll('#userManagement .view-btn')
    .forEach((button) => {
      button.addEventListener("click", () => {
        const userId = parseInt(button.dataset.userid, 10);
        const user = allUsers.find((u) => u.user_id === userId);
        const username = user ? user.username : "";

        // Switch to User Scores tab and filter by this user
        document.querySelector('.tab-btn[data-tab="userScores"]').click();
        const userFilter = document.getElementById("userFilter");
        if (userFilter && userId) {
          userFilter.value = String(userId);
        }
        applyScoresFilter();
      });
    });
}

// =============== STATISTICS TAB ===============

function renderQuizStatistics() {
  const totalAttempts = allAttempts.length;
  const avgScore = totalAttempts
    ? Math.round(
        allAttempts.reduce((sum, a) => sum + (a.percentage || 0), 0) /
          totalAttempts
      )
    : 0;
  const highestScore = totalAttempts
    ? Math.max(...allAttempts.map((a) => a.percentage || 0))
    : 0;

  const registeredUsers = allUsers.filter((u) => !u.is_admin).length;

  const totalAttemptsEl = document.getElementById("totalAttempts");
  const averageScoreEl = document.getElementById("averageScore");
  const highestScoreEl = document.getElementById("highestScore");
  const registeredUsersEl = document.getElementById("registeredUsers");

  if (totalAttemptsEl) totalAttemptsEl.textContent = totalAttempts;
  if (averageScoreEl) averageScoreEl.textContent = `${avgScore}%`;
  if (highestScoreEl) highestScoreEl.textContent = `${highestScore}%`;
  if (registeredUsersEl) registeredUsersEl.textContent = registeredUsers;

  // Difficulty-wise stats – requires difficulty stored per attempt
  const easy = getAvgForDifficulty("easy");
  const intermediate = getAvgForDifficulty("intermediate");
  const hard = getAvgForDifficulty("hard");

  updateDifficultyBar("easyBar", "easyAvg", easy);
  updateDifficultyBar("intermediateBar", "intermediateAvg", intermediate);
  updateDifficultyBar("hardBar", "hardAvg", hard);
}

function getAvgForDifficulty(difficulty) {
  const filtered = allAttempts.filter(
    (a) => (a.difficulty || "").toLowerCase() === difficulty
  );
  if (!filtered.length) return 0;

  return Math.round(
    filtered.reduce((sum, a) => sum + (a.percentage || 0), 0) /
      filtered.length
  );
}

function updateDifficultyBar(barId, labelId, value) {
  const bar = document.getElementById(barId);
  const label = document.getElementById(labelId);
  if (bar) bar.style.width = `${value}%`;
  if (label) label.textContent = `${value}%`;
}

// =============== HELPERS ===============

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Invalid date";
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
