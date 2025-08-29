// Quiz Data Module for NCC Quiz Portal
// This file contains all the quiz questions organized by difficulty

// Utility function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Quiz questions organized by difficulty and set number
const allQuizQuestions = {
  easy: {
    1: [
      {
        question: "What does NCC stand for?",
        options: ["National Cadet Corps", "National Civic Corps", "National Cadet Council", "National Civil Corps"],
        answer: 0
      },
      {
        question: "When was the NCC established in India?",
        options: ["1947", "1948", "1950", "1952"],
        answer: 1
      },
      {
        question: "What is the motto of NCC?",
        options: ["Service Before Self", "Unity and Discipline", "Duty, Honor, Country", "Unity, Discipline and Leadership"],
        answer: 1
      },
      {
        question: "Who was the first Director General of NCC?",
        options: ["Major General Enaith Habibullah", "Major General Himmat Singh", "Major General K.S. Thimayya", "Major General S.P.P Thorat"],
        answer: 0
      },
      {
        question: "Which of the following is the emblem of NCC?",
        options: ["Ashoka Chakra", "Ashoka Lion", "Lotus with Tricolor", "Three colors representing Army, Navy and Air Force"],
        answer: 3
      },
      // Add 45 more questions for easy set 1
    ],
    2: [
      {
        question: "What does NCC stand for?",
        options: ["National Cadet Corps", "National Civic Corps", "National Cadet Council", "National Civil Corps"],
        answer: 0
      },
      {
        question: "The All India Vayu Sainik Camp (AIVSC) is an annual camp for which wing of NCC?",
        options: ["Army", "Navy", "Air Force", "Combined Wings"],
        answer: 2
  },
  {
    question: "Main load carrying member of ML on ground is ________",
    options: ["Wing Spar", "Wing Rib", "Wing Skin", "Stringer"],
    answer: 0
  },
  {
    question: "Aircraft moving forward by its own power refers to ________",
    options: ["Taxiing", "Towing", "Sledding", "Gliding"],
    answer: 0
  },
  {
    question: "Final approach terminology comes after ________",
    options: ["Base Leg", "Initial Approach", "Downwind Leg", "Final Turn"],
    answer: 0
  },
  {
    question: "Main body of aircraft is called ________",
    options: ["Fuselage", "Empennage", "Wing Box", "Cockpit"],
    answer: 0
  },
  {
    question: "Thrust produced in a jet engine can be mathematically shown as ________",
    options: ["F = m × (Ve − Vo)", "R = m × a", "P = F × v", "T = 2 × v × m"],
    answer: 0
  },
  {
    question: "A component that converts turbine RPM to an appropriate level for the propeller is called ________",
    options: ["Reduction Gearbox", "Propeller Hub", "Gearless Drive", "Turbine Shaft"],
    answer: 0
  },
  {
    question: "Propulsion is achieved by imparting acceleration to a certain mass of gas as per ________",
    options: ["Newton’s Second Law", "Archimedes’ Principle", "Bernoulli’s Principle", "Pascal’s Law"],
    answer: 0
  },
  {
    question: "Imaginary line running wingtip to wingtip from CG at 90° to longitudinal axis is called ________",
    options: ["Lateral Axis", "Spanwise Axis", "Chordwise Axis", "Roll Axis"],
    answer: 0
  },
  {
    question: "Names of primary controls are ________",
    options: ["Elevator, Aileron, Rudder", "Throttle, Flaps, Trim", "Joystick, Rudder, Yoke", "Gear, Spoiler, Rudder"],
    answer: 0
  },
  {
    question: "The structure that supports the aircraft on ground is ________",
    options: ["Landing Gear", "Airframe", "Undercarriage Door", "Nose Wheel"],
    answer: 0
  },
  {
    question: "In turbojets, gas KE is partially used for ________ and rest is transformed into ________",
    options: ["Turbine work, Thrust", "Heat, Lift", "RPM, Drag", "Pressure, Noise"],
    answer: 0
  },
  {
    question: "A wing’s aerodynamic quality is expressed as its ________ to ________ ratio",
    options: ["Lift to Drag", "Speed to Altitude", "Lift to Weight", "Drag to Thrust"],
    answer: 0
  },
  {
    question: "Arrange in increasing order of size: Command, Air HQ, Wing/Station, Squadron/Unit",
    options: ["Squadron < Wing < Command < Air HQ", "Air HQ < Command < Squadron < Wing", "Wing < Squadron < Command < Air HQ", "Command < Air HQ < Squadron < Wing"],
    answer: 0
  },
  {
    question: "AOA stands for ________",
    options: ["Angle of Attack", "Area of Airframe", "Amount of Altitude", "Air Observation Altitude"],
    answer: 0
  },
  {
    question: "AOP stands for ________",
    options: ["Air Observation Post", "Aircraft Operational Procedure", "Airfield Operations Plan", "Air Officer Pilot"],
    answer: 0
  },
  {
    question: "Equivalent rank of Major General in Air Force is ________",
    options: ["Air Vice Marshal", "Air Commodore", "Group Captain", "Air Marshal"],
    answer: 0
  },
  {
    question: "Equivalent rank of Rear Admiral in Army is ________",
    options: ["Major General", "Brigadier", "Lieutenant General", "Colonel"],
    answer: 0
  },
  {
    question: "Equivalent rank of Group Captain in Navy is ________",
    options: ["Captain", "Commander", "Lieutenant Commander", "Commodore"],
    answer: 0
  },
  {
    question: "Write the name of any 2 aircraft owned by Pakistan",
    options: ["JF-17 Thunder, Mirage III", "Su-30 MKI, Tejas", "F-22 Raptor, Rafale", "MiG-29, Mirage 2000"],
    answer: 0
  },
  {
    question: "Airfield circuit extends to 3000 ft above airfield elevation within a radius of ________ ft",
    options: ["5,000", "3,000", "10,000", "1,500"],
    answer: 0
  },
  {
    question: "Touchdown zone markings are located over the first ________ of instrument runways",
    options: ["900 meters", "300 meters", "500 meters", "1000 meters"],
    answer: 0
  },
  {
    question: "Aircraft overtaking another must alter heading to the ________",
    options: ["Right", "Left", "Down", "Up"],
    answer: 0
  },
  {
    question: "Aircraft must be equipped with suitable ________ and ________ aids appropriate to route",
    options: ["Navigation, Communication", "Fuel, Map", "Food, Radar", "Jetpacks, Lights"],
    answer: 0
  },
  {
    question: "IFR stands for ________",
    options: ["Instrument Flight Rules", "International Flying Regulation", "Integrated Flight Recorder", "In-flight Radar"],
    answer: 0
  },
  {
    question: "Visibility under Visual Meteorological Conditions is ________",
    options: ["5 km", "2 km", "10 m", "25 km"],
    answer: 0
  },
  {
    question: "Distance from cloud: ________ horizontally and ________ vertically",
    options: ["1500 m, 1000 ft", "1000 m, 500 ft", "500 m, 500 ft", "2000 m, 2000 ft"],
    answer: 0
  },
  {
    question: "Downwind leg is the leg of a rectangular traffic pattern that runs ________",
    options: ["Parallel to runway in opposite direction of landing", "Along the approach path", "Across the runway", "Toward the taxiway"],
    answer: 0
  },
  {
    question: "Right of way: Aircraft on the right has ________",
    options: ["Right of way", "To give way", "Higher priority", "No clearance"],
    answer: 0
  },
  {
    question: "________ authorizes you to join the circuit on the downwind leg at circuit height",
    options: ["ATC", "Ground crew", "Radar", "Pilot"],
    answer: 0
  },
  {
    question: "In ________ radar, active cooperation from the object is required",
    options: ["Secondary", "Primary", "Pulse", "Tracking"],
    answer: 0
  },
  {
    question: "In radar: ________ creates waves, ________ directs them, ________ measures bounce back",
    options: ["Transmitter, Antenna, Receiver", "Receiver, Signal, Radar", "Pilot, Radar, Ground", "Antenna, Radar, Gauge"],
    answer: 0
  },
  {
    question: "On artificial horizon, first 3 marks from center are ________ degrees apart",
    options: ["10", "5", "15", "30"],
    answer: 0
  },
  {
    question: "Dynamic pressure = ________",
    options: ["½ × ρ × V²", "m × g", "P × V", "ρ × g × h"],
    answer: 0
  },
  {
    question: "Navigable airspace between two points for flight rules is called ________",
    options: ["Airway", "Corridor", "Path", "Airline Route"],
    answer: 0
  },
  {
    question: "Lowest flight level above transition altitude is ________",
    options: ["Transition Level", "Transition Altitude", "Flight Ceiling", "Cruising Level"],
    answer: 0
  },
  {
    question: "Subsonic airfoils have ________ leading edge and ________ trailing edge",
    options: ["Rounded, Tapered", "Sharp, Straight", "Blunt, Flat", "Thin, Curved"],
    answer: 0
  },
  {
    question: "Aircraft in steady, unaccelerated flight is in ________",
    options: ["Equilibrium", "Turbulence", "Stall", "Spin"],
    answer: 0
  },
  {
    question: "Mi-26 is a heavy lift helicopter with payload of ________",
    options: ["20,000 kg", "5,000 kg", "10,000 kg", "30,000 kg"],
    answer: 0
  },
  {
    question: "Temperature falls at ________ per km up to 11 km",
    options: ["6.5°C", "1°C", "5.5°C", "3°C"],
    answer: 0
  },
  {
    question: "Most clouds are formed in the ________",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: 0
  },
  {
    question: "Flight hours begin when pilot starts flight and increase with ________",
    options: ["Every hour in air", "Every mile flown", "Altitude", "Each takeoff"],
    answer: 0
  },
  {
    question: "Solid pellets of ice falling on ground is called ________",
    options: ["Hail", "Rain", "Sleet", "Drizzle"],
    answer: 0
  },
  {
    question: "BRD stands for ________",
    options: ["Base Repair Depot", "Battle Ready Division", "Base Rescue Division", "Brigade Reserve Detail"],
    answer: 0
  }


      // Add 49 more questions for easy set 2
    ]
    3: [
  // ---------- MCQ SECTION ----------
  {
    question: "______________ is necessary for many reasons; personal, social, health, psychological or simply as a way of life.",
    options: ["Maintaining hygiene and sanitation", "Infection", "Every person", "Both a and b"],
    answer: 0
  },
  {
    question: "What are necessary to preserve and improve the health of the individual and of the community as a whole?",
    options: ["Food and Personal hygiene", "Food only", "Personal only", "None"],
    answer: 0
  },
  {
    question: "Which hygiene involves all aspects of the health of an individual?",
    options: ["Personal", "Mental", "Social", "Hand"],
    answer: 0
  },
  {
    question: "Every person must remain in perfect ___________, only then he can serve the community and the country well.",
    options: ["Physical, mental and social health", "Mental health", "Physical health", "Medical health"],
    answer: 0
  },
  {
    question: "Which practices help in the maintenance and promotion of a person’s health?",
    options: ["Maintenance of personal hygiene", "Maintenance of mental hygiene", "Maintenance of social hygiene", "None"],
    answer: 0
  },
  {
    question: "What can lead to foodborne diseases and death of consumer?",
    options: ["Food hygiene", "Personal hygiene", "Physical hygiene", "Both a and b"],
    answer: 0
  },
  {
    question: "What are the keys to safer food?",
    options: ["All", "Keep clean", "Cook thoroughly", "Keep food at safe temperature"],
    answer: 0
  },
  {
    question: "Which is the potential source of infection and is liable to contamination during its journey from producer to consumer?",
    options: ["Food", "Germs", "Virus", "Earthworm"],
    answer: 0
  },
  {
    question: "The heating of milk to destroy pathogens without loss of nutritive value is called?",
    options: ["Pasteurization", "Boiling", "Tonding", "None"],
    answer: 0
  },
  {
    question: "How many hours sample of food provided to cadets is preserved after the meal?",
    options: ["48", "24", "36", "50"],
    answer: 0
  },
  {
    question: "What is the dimension of soakage pit of cook house?",
    options: ["6 feet deep and 4.5 feet wide", "6 feet deep and 4.5 inches", "6 feet deep and 4.5 meters", "None"],
    answer: 0
  },
  {
    question: "How many types of camp latrines are there?",
    options: ["4", "2", "3", "6"],
    answer: 0
  },
  {
    question: "Anything which interferes with respiration producing irregularities in breathing is called?",
    options: ["Asphyxia", "Hypoxia", "Insomnia", "Respiration"],
    answer: 0
  },
  {
    question: "Which stage of unconsciousness has restlessness of body and mind?",
    options: ["2nd stage", "3rd stage", "9th stage", "None"],
    answer: 0
  },
  {
    question: "Casualty should be supine, airway cleared, neck extended. This method is?",
    options: ["Mouth-to-mouth respiration", "Breathing", "Save life", "None"],
    answer: 0
  },
  {
    question: "A break in continuity of the skin or muscles membrane is called?",
    options: ["Wound", "Cut", "Brake", "Pain"],
    answer: 0
  },
  {
    question: "What is the cause of a lacerated wound?",
    options: ["Blunt instrument", "Torn uneven edge", "Sharp knife", "Both b and c"],
    answer: 3
  },
  {
    question: "An injury where tissues are irregularly torn or ruptured but skin may not break is?",
    options: ["Contusion wound", "Crested wound", "Inside wound", "None"],
    answer: 0
  },
  {
    question: "Incisions, Grazes, Avulsions, Puncture wounds are classified as?",
    options: ["Open wounds", "Closed wounds", "Burn wounds", "None"],
    answer: 0
  },
  {
    question: "The Yogic system of health involves exercise of skeletal and smooth muscles. This is a?",
    options: ["Characteristic of Yoga", "Motto of Yoga", "Goal of Yoga", "None"],
    answer: 0
  },

  // ---------- FILL IN THE BLANKS (as MCQs) ----------
  {
    question: "______________ asana provides good exercise to abdominal muscles, back and thighs.",
    options: ["Bhujangasana", "Paschimottanasana", "Dhanurasana", "Padmasana"],
    answer: 2
  },
  {
    question: "______________ asana improves circulatory, respiratory, alimentary systems. Timings: 0.5–1 min.",
    options: ["Sarvangasana", "Tadasana", "Shavasana", "Vrikshasana"],
    answer: 0
  },
  {
    question: "______________ is a combined sequence of 12 positions.",
    options: ["Surya Namaskar", "Pranayama", "Shavasana", "Padmasana"],
    answer: 0
  },
  {
    question: "UNO declared 21 June as ______________.",
    options: ["International Yoga Day", "Health Day", "Peace Day", "Meditation Day"],
    answer: 0
  },
  {
    question: "______________ asana is to awaken the power of Kundalini.",
    options: ["Kundalini Asana", "Padmasana", "Siddhasana", "Bhujangasana"],
    answer: 2
  },
  {
    question: "First aid treatment: make casualty breathe through mouth is ______________.",
    options: ["Mouth-to-mouth respiration", "Artificial nose breathing", "Cardiac massage", "Heimlich maneuver"],
    answer: 0
  },
  {
    question: "In Dog Bite, dog and patient should be kept ______________ for 10 days.",
    options: ["Under observation", "Chained", "Separated", "Caged"],
    answer: 0
  },
  {
    question: "Cadets by routine are prone to injuries and must possess knowledge of ______________.",
    options: ["First Aid", "Yoga", "Navigation", "Drill"],
    answer: 0
  },
  {
    question: "Patient responds to painful stimuli only. This stage is ______________.",
    options: ["Stupor", "Coma", "Fainting", "Shock"],
    answer: 0
  },
  {
    question: "Stage where patient makes no response to any stimulus is ______________.",
    options: ["Coma", "Stupor", "Death", "Shock"],
    answer: 0
  },
  {
    question: "______________ contains mainly animal droppings and leftover feeds.",
    options: ["Dung pit", "Manure pit", "Sewage pit", "Garbage bin"],
    answer: 0
  },
  {
    question: "DTLs of proper specifications will be constructed and covered by ______________.",
    options: ["Soil", "Concrete", "Wood", "Plastic"],
    answer: 0
  },
  {
    question: "Removal of waste products and refuse is called ______________.",
    options: ["Sanitation", "Filtration", "Sewage", "Refuse disposal"],
    answer: 0
  },
  {
    question: "Food hygiene ensures food safety from ______________ to ______________.",
    options: ["Farm to Plate", "Market to Kitchen", "Cook to Serve", "Seed to Meal"],
    answer: 0
  },
  {
    question: "Camp urinals should be treated daily with ______________.",
    options: ["Lime", "Bleach", "Phenyl", "Soap water"],
    answer: 0
  },
  {
    question: "Dimension of shallow trench latrine is ______________.",
    options: ["4m x 1m x 1m", "1m x 1m x 1m", "3m x 2m x 1m", "None"],
    answer: 0
  },
  {
    question: "Personal and food hygiene preserve health of ______________ and ______________.",
    options: ["Individual and Community", "Army and Cadets", "Men and Women", "Both a and b"],
    answer: 0
  },
  {
    question: "Responsibility for personal health lies with ______________.",
    options: ["Individual", "Community", "NCC", "Doctor"],
    answer: 0
  },
  {
    question: "Brushing teeth prevents ______________ in mouth.",
    options: ["Accumulation of bacteria", "Bleeding gums", "Cavities", "Pain"],
    answer: 0
  },
  {
    question: "Ratio is 5 trenches for first 100 users and ______________ for each 100 more.",
    options: ["3", "2", "4", "5"],
    answer: 0
  },

  // ---------- TRUE / FALSE (as MCQs) ----------
  {
    question: "Waste food will be buried in refuse pits located away from cook houses.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The least common urinal used in camps is Funnel Urinals over soakage pit.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Personal hygiene involves practices to care for bodily health through cleanliness.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Wooden frames will not be washed twice daily and treated with lime.",
    options: ["False", "True"],
    answer: 0
  },
  {
    question: "It is not important for cadets to know basic First Aid in emergencies.",
    options: ["False", "True"],
    answer: 0
  },
  {
    question: "Do not remove embedded objects is treatment of open chest wounds.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Most bites occur on exposed parts of limbs like hands, feet, legs.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Bite by scorpions should be treated like bee sting.",
    options: ["False", "True"],
    answer: 0
  },
  {
    question: "Pain on deep breathing/coughing is sign of internal organ injury.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Heat strokes, electric shocks, epilepsy can cause coma.",
    options: ["True", "False"],
    answer: 0
  }
]

    // Add sets 3-10 with 50 questions each
  },
  intermediate: {
    1: [
      {
        question: "What is the primary aircraft used for basic flying training in NCC Air Wing?",
        options: ["Super Dimona", "Piper Cub", "Zen Air", "Cessna 152"],
        answer: 0
      },
      {
        question: "How many directorates of NCC have the Air Wing component?",
        options: ["5", "10", "17", "25"],
        answer: 2
      },
      {
        question: "Which of the following is NOT a part of AIVSC competitions?",
        options: ["Skeet Shooting", "Drill", "Aero Modeling", "Flying"],
        answer: 3
      },
      {
        question: "What is the minimum attendance percentage required for NCC cadets to appear for B certificate?",
        options: ["60%", "70%", "75%", "80%"],
        answer: 2
      },
      {
        question: "During AIVSC, what is the distance for the firing competition?",
        options: ["25 meters", "50 meters", "100 meters", "200 meters"],
        answer: 0
      },
      // Add 45 more questions for intermediate set 1
    ],
    2: [
      {
        question: "The Directorate responsible for Air Wing cadets in the Eastern region is located at?",
        options: ["Kolkata", "Patna", "Ranchi", "Guwahati"],
        answer: 0
      },
      // Add 49 more questions for intermediate set 2
    ]
    // Add sets 3-10 with 50 questions each
  },
  hard: {
    1: [
      {
        question: "What is the frequency range allocated for RC aircraft models used in AIVSC competitions?",
        options: ["27 MHz", "35 MHz", "72 MHz", "All of the above"],
        answer: 3
      },
      {
        question: "Which type of engine is commonly used in Control Line Speed models during AIVSC?",
        options: ["Glow Plug", "Diesel", "Electric", "Both A and B"],
        answer: 0
      },
      {
        question: "What is the minimum time that the Free Flight model should remain airborne during AIVSC competition?",
        options: ["30 seconds", "45 seconds", "60 seconds", "90 seconds"],
        answer: 2
      },
      {
        question: "The Control Line Speed competition involves flying the model for how many laps?",
        options: ["5 laps", "7 laps", "9 laps", "10 laps"],
        answer: 2
      },
      {
        question: "What is the standard engine capacity used in RC Powered models in AIVSC?",
        options: ["0.5-1.0 cc", "1.5-2.5 cc", "3.0-5.0 cc", "6.5-8.5 cc"],
        answer: 2
      },
      // Add 45 more questions for hard set 1
    ],
    2: [
      {
        question: "What is the fuel mixture commonly used in glow plug engines for aero modeling?",
        options: ["Methanol + Nitromethane + Oil", "Gasoline + Oil", "Kerosene + Oil", "Diesel + Ether"],
        answer: 0
      },
      // Add 49 more questions for hard set 2
    ]
    // Add sets 3-10 with 50 questions each
  }
};

// Function to get quiz questions
function getQuizQuestions(difficulty, setNumber) {
  // Validate parameters
  if (!allQuizQuestions[difficulty] || !allQuizQuestions[difficulty][setNumber]) {
    console.error(`Quiz not found: ${difficulty} - Set ${setNumber}`);
    return null;
  }
  
  // Get questions and shuffle options
  const questions = [...allQuizQuestions[difficulty][setNumber]];
  
  // Shuffle the questions
  const shuffledQuestions = shuffleArray(questions);
  
  // For each question, shuffle the options while preserving the correct answer
  shuffledQuestions.forEach(question => {
    const correctAnswer = question.options[question.answer];
    question.options = shuffleArray([...question.options]);
    question.answer = question.options.indexOf(correctAnswer);
  });
  
  return shuffledQuestions;
}

// Export the quiz functionality
window.quizData = {
  getQuizQuestions: getQuizQuestions
};
