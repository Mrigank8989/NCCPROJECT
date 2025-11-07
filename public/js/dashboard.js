document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem("ncc_quiz_auth"));
  const currentPage = window.location.pathname;

  const isProtectedPage = currentPage.includes("dashboard") || currentPage.includes("admin");

  if (isProtectedPage && (!user || !user.accessToken)) {
    alert("Please login first.");
    window.location.href = "index.html";
  }
  displayRecentScores();
  setupDifficultyButtons();
});


// Dashboard Module for NCC Quiz Portal
document.addEventListener('DOMContentLoaded', () => {
  // Display user's recent scores
  displayRecentScores();
  
  // Setup difficulty buttons
  setupDifficultyButtons();
});



// Display user's recent scores
async function displayRecentScores() {
  try {
    let scores = await auth.getUserScores();

    // ✅ Ensure it's always an array
    if (!Array.isArray(scores)) {
      console.warn("⚠️ Expected scores to be an array, got:", scores);
      scores = [];
    }

    // ✅ Only sort if we have data
    const sortedScores = scores.length > 0
      ? scores.sort((a, b) => new Date(b.attempt_date || b.date) - new Date(a.attempt_date || a.date))
      : [];

    const scoresContainer = document.getElementById("recentScores");
    scoresContainer.innerHTML = "";

    if (sortedScores.length === 0) {
      scoresContainer.innerHTML = "<p>No quiz attempts yet.</p>";
      return;
    }

    sortedScores.forEach((score) => {
      const item = document.createElement("div");
      item.className = "score-item";
      item.innerHTML = `
        <p><strong>Quiz ID:</strong> ${score.quiz_id}</p>
        <p><strong>Score:</strong> ${score.score}/${score.total_questions}</p>
        <p><strong>Percentage:</strong> ${score.percentage}%</p>
        <p><strong>Date:</strong> ${new Date(score.attempt_date).toLocaleString()}</p>
      `;
      scoresContainer.appendChild(item);
    });
  } catch (err) {
    console.error("❌ Error displaying scores:", err);
  }
}

document.addEventListener("DOMContentLoaded", displayRecentScores);


// Setup difficulty buttons
function setupDifficultyButtons() {
  const difficultyButtons = document.querySelectorAll('.btn-difficulty');
  const quizSets = document.getElementById('quizSets');
  const selectedDifficulty = document.getElementById('selectedDifficulty');
  const quizGrid = document.getElementById('quizGrid');
  
  difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      difficultyButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get selected difficulty
      const difficulty = button.dataset.difficulty;
      
      // Update selected difficulty text
      selectedDifficulty.textContent = capitalizeFirstLetter(difficulty);
      
      // Show quiz sets
      quizSets.classList.remove('hidden');
      
      // Generate quiz set cards
      generateQuizSetCards(difficulty, quizGrid);
    });
  });
}

// Generate quiz set cards
function generateQuizSetCards(difficulty, container) {
  container.innerHTML = '';
  
  const currentUser = auth.getCurrentUser();
  const userScores = auth.getUserScores(currentUser.username);
  
  // Create 10 quiz set cards
  for (let i = 1; i <= 10; i++) {
    const card = document.createElement('div');
    card.className = 'quiz-set-card';
    
    // Check if user has completed this quiz
    const completedQuiz = userScores.find(score => 
      score.difficulty === difficulty && score.setNumber === i
    );
    
    if (completedQuiz) {
      card.classList.add('completed');
    }
    
    card.innerHTML = `
      <h4>Quiz Set ${i}</h4>
      <p>50 Questions</p>
      ${completedQuiz ? `<p class="score">Score: ${completedQuiz.percentage}%</p>` : ''}
    `;
    
    // Add click event to start quiz
    card.addEventListener('click', () => {
      // Store selected quiz information in sessionStorage
      sessionStorage.setItem('selectedQuiz', JSON.stringify({
        difficulty,
        setNumber: i
      }));
      
      // Navigate to quiz page
      window.location.href = 'quiz.html';
    });
    
    container.appendChild(card);
  }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
