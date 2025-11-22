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
    question: "When did the present-day NCC come into existence?",
    options: ["1945", "1948", "1950", "1952"],
    answer: 1
  },
  {
    question: "What is the motto of NCC?",
    options: ["Unity and Service", "Serve with Honour", "Unity and Discipline", "Discipline and Duty"],
    answer: 2
  },
  {
    question: "NCC Headquarters is located at:",
    options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
    answer: 2
  },
  {
    question: "How many NCC Directorates are there in India?",
    options: ["15", "16", "17", "18"],
    answer: 2
  },
  {
    question: "Air Wing of NCC was raised in:",
    options: ["1947", "1948", "1950", "1952"],
    answer: 2
  },
  {
    question: "What is the meaning of the term 'Cadet'?",
    options: ["Officer", "Trainee", "Instructor", "Leader"],
    answer: 1
  },
  {
    question: "Which certificate gives direct SSB entry (no written exam)?",
    options: ["A Certificate", "B Certificate", "C Certificate", "All certificates"],
    answer: 2
  },
  {
    question: "How many Army Wing units exist in NCC?",
    options: ["600", "700", "750", "800"],
    answer: 1
  },
  {
    question: "Which camp is considered the most prestigious NCC camp?",
    options: ["CATC", "NIC", "RDC", "ATC"],
    answer: 2
  },
  {
    question: "Which is NOT an NCC training activity?",
    options: ["Yoga", "Firing", "Parade", "Laboratory Experiments"],
    answer: 3
  },
  {
    question: "National Integration means:",
    options: ["Unity among political leaders", "Feeling of togetherness among citizens", "Joining political groups", "Uniting only people of one religion"],
    answer: 1
  },
  {
    question: "India is known for its:",
    options: ["Unity in Diversity", "Single culture", "One language", "One religion"],
    answer: 0
  },
  {
    question: "Which of the following affects national integration?",
    options: ["Patriotism", "Communalism", "National festivals", "Sports events"],
    answer: 1
  },
  {
    question: "Linguistic fanaticism refers to:",
    options: ["Love for national language", "Hatred or discrimination based on language", "Learning multiple languages", "Speaking politely"],
    answer: 1
  },
  {
    question: "Cultural integration means:",
    options: ["Rejecting other cultures", "Adopting one’s own culture only", "Respecting and adopting aspects of multiple cultures", "Destroying cultural practices"],
    answer: 2
  },
  {
    question: "Self-awareness means:",
    options: ["Knowing others", "Knowing oneself", "Speaking confidently", "Judging others"],
    answer: 1
  },
  {
    question: "Empathy is the ability to:",
    options: ["Read books", "Understand others’ feelings", "Speak loudly", "Control emotions"],
    answer: 1
  },
  {
    question: "Time management helps in:",
    options: ["Wasting time", "Increasing stress", "Completing tasks efficiently", "Avoiding work"],
    answer: 2
  },
  {
    question: "Communication is effective when it is:",
    options: ["Loud", "One-way", "Clear and understandable", "Fast"],
    answer: 2
  },
  {
    question: "A major cause of stress among youth is:",
    options: ["Good health", "Exams and expectations", "Sports", "Travelling"],
    answer: 1
  },
  {
    question: "Leadership is the process of:",
    options: ["Dominating people", "Influencing and guiding others", "Punishing people", "Ignoring team"],
    answer: 1
  },
  {
    question: "A good leader must have:",
    options: ["Laziness", "Dishonesty", "Confidence", "Fear"],
    answer: 2
  },
  {
    question: "Motivation is:",
    options: ["A negative feeling", "Force that drives people to act", "A punishment", "Instructions from teachers"],
    answer: 1
  },
  {
    question: "Moral values include:",
    options: ["Cheating", "Stealing", "Honesty", "Irresponsibility"],
    answer: 2
  },
  {
    question: "Honour Code in NCC teaches:",
    options: ["Disrespect", "Courage & integrity", "Carelessness", "Corruption"],
    answer: 1
  },
  {
    question: "Disaster means:",
    options: ["Celebration", "Sudden event causing major damage", "Sports event", "Festival"],
    answer: 1
  },
  {
    question: "Earthquake is an example of:",
    options: ["Man-made disaster", "Natural disaster", "Chemical disaster", "Industrial disaster"],
    answer: 1
  },
  {
    question: "Civil Defence Organisation helps in:",
    options: ["Sports", "Firefighting & rescue", "Exams", "Voting"],
    answer: 1
  },
  {
    question: "During a fire, you should:",
    options: ["Use lift", "Run blindly", "Use fire extinguisher", "Stay inside closed room"],
    answer: 2
  },
  {
    question: "Floods are mainly caused by:",
    options: ["Excess rainfall", "Mobile phones", "Pollution", "Lack of exercise"],
    answer: 0
  },
  {
    question: "Swachh Bharat Abhiyan was launched to:",
    options: ["Promote tourism", "Promote cleanliness", "Increase pollution", "Build malls"],
    answer: 1
  },
  {
    question: "Which is a major social evil in India?",
    options: ["Education", "Drug abuse", "Sports", "NCC training"],
    answer: 1
  },
  {
    question: "Tree plantation helps in reducing:",
    options: ["Oxygen", "Pollution", "Rain", "Soil"],
    answer: 1
  },
  {
    question: "NGO stands for:",
    options: ["National Group Organisation", "Non-Government Organisation", "New Government Office", "National Growth Operation"],
    answer: 1
  },
  {
    question: "Cyber safety education helps prevent:",
    options: ["Games", "Social media usage", "Online frauds", "Exercise"],
    answer: 2
  },
  {
    question: "Personal hygiene includes:",
    options: ["Wearing dirty clothes", "Bathing regularly", "Avoiding water", "Sleeping late"],
    answer: 1
  },
  {
    question: "First aid is given:",
    options: ["After treatment", "Before treatment", "Immediately after injury", "Only by doctors"],
    answer: 2
  },
  {
    question: "A common symptom of dehydration is:",
    options: ["High energy", "Dizziness", "Happiness", "Weight gain"],
    answer: 1
  },
  {
    question: "Yoga helps improve:",
    options: ["Stress levels", "Flexibility & mental health", "Anger", "Laziness"],
    answer: 1
  },
  {
    question: "Sanitation helps prevent:",
    options: ["Diseases", "Education", "Sports", "Music"],
    answer: 0
  },
  {
    question: "Adventure training in NCC develops:",
    options: ["Fear", "Laziness", "Courage", "Weakness"],
    answer: 2
  },
  {
    question: "A major environmental problem is:",
    options: ["Clean rivers", "Low pollution", "Deforestation", "Fresh air"],
    answer: 2
  },
  {
    question: "Global warming is caused mainly by:",
    options: ["Sunlight", "Greenhouse gases", "Rain", "Oxygen"],
    answer: 1
  },
  {
    question: "Conservation means:",
    options: ["Destroying resources", "Polluting rivers", "Protecting natural resources", "Cutting forests"],
    answer: 2
  },
  {
    question: "Waste management involves:",
    options: ["Burning waste openly", "Reusing and recycling", "Throwing waste anywhere", "Increasing garbage"],
    answer: 1
  },
  {
    question: "Obstacle training develops:",
    options: ["Physical fitness", "Laziness", "Fear", "Boredom"],
    answer: 0
  },
  {
    question: "NCC was originally derived from:",
    options: ["Police Act", "University Corps Act", "Indian Defence Act", "Youth Act"],
    answer: 1
  },
  {
    question: "The Girl’s Division was started in:",
    options: ["1947", "1948", "1949", "1952"],
    answer: 2
  },
  {
    question: "YEP stands for:",
    options: ["Youth Education Programme", "Youth Exchange Programme", "Young Exercise Patrol", "Youth Empowerment Panel"],
    answer: 1
  },
  {
    question: "NCC’s guiding theme in camps is:",
    options: ["Entertainment", "National unity & discipline", "Only sports", "Fashion & style"],
    answer: 1
  }


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
    ],
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
],
    5: [
  {
    question: "Health is a state of complete ________, mental and social well-being.",
    options: ["Physical", "Spiritual", "Emotional", "Economic"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin A causes ________.",
    options: ["Night blindness", "Scurvy", "Rickets", "Beri-Beri"],
    answer: 0
  },
  {
    question: "Malaria is caused by ________.",
    options: ["Plasmodium", "Bacteria", "Virus", "Fungus"],
    answer: 0
  },
  {
    question: "The disease Tuberculosis affects the ________.",
    options: ["Lungs", "Liver", "Kidney", "Heart"],
    answer: 0
  },
  {
    question: "The normal body temperature of a healthy person is ________.",
    options: ["37°C", "36°C", "38°C", "39°C"],
    answer: 0
  },
  {
    question: "The unit of heredity is ________.",
    options: ["Gene", "Chromosome", "DNA", "RNA"],
    answer: 0
  },
  {
    question: "Deficiency of Iodine causes ________.",
    options: ["Goitre", "Anaemia", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "The deficiency disease caused by the lack of Vitamin C is ________.",
    options: ["Scurvy", "Rickets", "Night blindness", "Pellagra"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin D is ________.",
    options: ["Rickets", "Scurvy", "Beri-Beri", "Goitre"],
    answer: 0
  },
  {
    question: "The causative organism of Cholera is ________.",
    options: ["Vibrio cholerae", "Plasmodium", "Salmonella typhi", "Mycobacterium"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin B1 leads to ________.",
    options: ["Beri-Beri", "Rickets", "Scurvy", "Night blindness"],
    answer: 0
  },
  {
    question: "Deficiency of Iron in the body causes ________.",
    options: ["Anaemia", "Obesity", "Diabetes", "Goitre"],
    answer: 0
  },
  {
    question: "The causative organism of Typhoid is ________.",
    options: ["Salmonella typhi", "Vibrio cholerae", "Plasmodium", "Virus"],
    answer: 0
  },
  {
    question: "The human heart is made up of ________ muscle.",
    options: ["Cardiac", "Smooth", "Skeletal", "Voluntary"],
    answer: 0
  },
  {
    question: "The largest organ in the human body is ________.",
    options: ["Skin", "Liver", "Lungs", "Kidney"],
    answer: 0
  },
  {
    question: "The smallest structural and functional unit of the human body is ________.",
    options: ["Cell", "Tissue", "Organ", "System"],
    answer: 0
  },
  {
    question: "The number of chromosomes in human body cells is ________.",
    options: ["46", "44", "48", "23"],
    answer: 0
  },
  {
    question: "The universal donor blood group is ________.",
    options: ["O Negative", "A Positive", "B Negative", "AB Positive"],
    answer: 0
  },
  {
    question: "The universal recipient blood group is ________.",
    options: ["AB Positive", "O Negative", "A Negative", "B Positive"],
    answer: 0
  },
  {
    question: "The total number of bones in an adult human body is ________.",
    options: ["206", "208", "210", "212"],
    answer: 0
  },
  {
    question: "The main organ of the circulatory system is ________.",
    options: ["Heart", "Lungs", "Kidneys", "Liver"],
    answer: 0
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin C"],
    answer: 0
  },
  {
    question: "The deficiency of which mineral causes Anaemia?",
    options: ["Iron", "Calcium", "Iodine", "Zinc"],
    answer: 0
  },
  {
    question: "The deficiency of Calcium causes ________.",
    options: ["Weak bones", "Goitre", "Scurvy", "Anaemia"],
    answer: 0
  },
  {
    question: "The largest gland in the human body is ________.",
    options: ["Liver", "Pancreas", "Pituitary", "Adrenal"],
    answer: 0
  },
  {
    question: "The deficiency of protein in children causes ________.",
    options: ["Kwashiorkor", "Marasmus", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Niacin is ________.",
    options: ["Pellagra", "Scurvy", "Rickets", "Beri-Beri"],
    answer: 0
  },
  {
    question: "The main excretory organ in human body is ________.",
    options: ["Kidneys", "Lungs", "Skin", "Liver"],
    answer: 0
  },
  {
    question: "The functional unit of the kidney is ________.",
    options: ["Nephron", "Neuron", "Alveoli", "Axon"],
    answer: 0
  },
  {
    question: "The average weight of human brain is about ________.",
    options: ["1.5 kg", "1.2 kg", "2 kg", "800 g"],
    answer: 0
  },
  {
    question: "The powerhouse of the cell is ________.",
    options: ["Mitochondria", "Ribosome", "Chloroplast", "Golgi body"],
    answer: 0
  },
  {
    question: "The master gland in the human body is ________.",
    options: ["Pituitary gland", "Adrenal gland", "Thyroid gland", "Pancreas"],
    answer: 0
  },
  {
    question: "The disease caused by the deficiency of Vitamin B12 is ________.",
    options: ["Pernicious Anaemia", "Rickets", "Scurvy", "Night blindness"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin K causes ________.",
    options: ["Poor blood clotting", "Scurvy", "Rickets", "Night blindness"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Protein and energy is ________.",
    options: ["Marasmus", "Rickets", "Goitre", "Scurvy"],
    answer: 0
  },
  {
    question: "The process by which plants prepare their food is ________.",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
    answer: 0
  },
  {
    question: "The pigment responsible for green colour of leaves is ________.",
    options: ["Chlorophyll", "Haemoglobin", "Melanin", "Carotene"],
    answer: 0
  },
  {
    question: "The number of chambers in human heart is ________.",
    options: ["4", "2", "3", "5"],
    answer: 0
  },
  {
    question: "Which of the following diseases is caused by Virus?",
    options: ["Polio", "Cholera", "Tuberculosis", "Malaria"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin E is ________.",
    options: ["Sterility", "Scurvy", "Night blindness", "Rickets"],
    answer: 0
  },
  {
    question: "Which organ produces insulin?",
    options: ["Pancreas", "Liver", "Kidney", "Stomach"],
    answer: 0
  },
  {
    question: "The exchange of gases in human beings takes place in ________.",
    options: ["Alveoli", "Trachea", "Bronchi", "Larynx"],
    answer: 0
  },
  {
    question: "The organ which supplies oxygenated blood to the body is ________.",
    options: ["Heart", "Lungs", "Kidney", "Brain"],
    answer: 0
  },
  {
    question: "Which vitamin is called Ascorbic Acid?",
    options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes Rickets?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
    answer: 0
  },
  {
    question: "The main function of Red blood cells is ________.",
    options: ["Carry oxygen", "Fight infection", "Clot blood", "Provide immunity"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin B2 is ________.",
    options: ["Cheilitis", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Folic Acid causes ________.",
    options: ["Anaemia", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "The enzyme present in saliva is ________.",
    options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    answer: 0
  },
  {
    question: "The disease caused by the bite of female Anopheles mosquito is ________.",
    options: ["Malaria", "Dengue", "Chikungunya", "Filaria"],
    answer: 0
  },
    {
    question: "The disease caused by the bite of Aedes aegypti mosquito is ________.",
    options: ["Dengue", "Malaria", "Filaria", "Plague"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B6 causes ________.",
    options: ["Anaemia", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin B5 is ________.",
    options: ["Pellagra", "Rickets", "Scurvy", "Beri-Beri"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin H is ________.",
    options: ["Dermatitis", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "Which disease is spread by housefly?",
    options: ["Cholera", "Diabetes", "Asthma", "Arthritis"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin K is ________.",
    options: ["Haemorrhage", "Rickets", "Scurvy", "Night blindness"],
    answer: 0
  },
  {
    question: "Which organ purifies the blood in the human body?",
    options: ["Kidneys", "Liver", "Heart", "Lungs"],
    answer: 0
  },
  {
    question: "The average blood volume in an adult is about ________.",
    options: ["5 litres", "3 litres", "7 litres", "4 litres"],
    answer: 0
  },
  {
    question: "The normal heartbeat rate per minute is ________.",
    options: ["72", "70", "74", "80"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes Pellagra?",
    options: ["Vitamin B3", "Vitamin A", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "Which part of the human skeleton protects the brain?",
    options: ["Skull", "Ribs", "Vertebral column", "Pelvis"],
    answer: 0
  },
  {
    question: "The total number of ribs in human body is ________.",
    options: ["24", "22", "26", "28"],
    answer: 0
  },
  {
    question: "Which part of the human body produces bile?",
    options: ["Liver", "Pancreas", "Gall bladder", "Kidney"],
    answer: 0
  },
  {
    question: "The deficiency of which mineral causes Goitre?",
    options: ["Iodine", "Iron", "Calcium", "Zinc"],
    answer: 0
  },
  {
    question: "Which organ is affected by Pneumonia?",
    options: ["Lungs", "Heart", "Liver", "Kidneys"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Protein is ________.",
    options: ["Kwashiorkor", "Rickets", "Goitre", "Scurvy"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Carbohydrate is ________.",
    options: ["Ketosis", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Retinol?",
    options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes Sterility?",
    options: ["Vitamin E", "Vitamin A", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "The part of the brain which controls balance is ________.",
    options: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Pons"],
    answer: 0
  },
  {
    question: "The longest bone in human body is ________.",
    options: ["Femur", "Tibia", "Fibula", "Humerus"],
    answer: 0
  },
  {
    question: "The disease caused by Plasmodium is ________.",
    options: ["Malaria", "Dengue", "Cholera", "Tuberculosis"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes Cheilitis?",
    options: ["Vitamin B2", "Vitamin B1", "Vitamin B6", "Vitamin C"],
    answer: 0
  },
  {
    question: "Which blood cells help in blood clotting?",
    options: ["Platelets", "RBC", "WBC", "Plasma"],
    answer: 0
  },
  {
    question: "Which gas is exhaled during respiration?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Carbon monoxide"],
    answer: 0
  },
  {
    question: "The pigment responsible for skin colour is ________.",
    options: ["Melanin", "Haemoglobin", "Keratin", "Carotene"],
    answer: 0
  },
  {
    question: "Which blood cells fight against infection?",
    options: ["WBC", "RBC", "Platelets", "Plasma"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Rickets?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which organ controls the entire body?",
    options: ["Brain", "Heart", "Liver", "Kidney"],
    answer: 0
  },
  {
    question: "The main organ of the respiratory system is ________.",
    options: ["Lungs", "Heart", "Kidneys", "Liver"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Protein and Carbohydrate both is ________.",
    options: ["Marasmus", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The red pigment in blood is ________.",
    options: ["Haemoglobin", "Chlorophyll", "Melanin", "Keratin"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Calciferol?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin B9 is ________.",
    options: ["Megaloblastic Anaemia", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "Which part of the blood carries oxygen?",
    options: ["RBC", "WBC", "Platelets", "Plasma"],
    answer: 0
  },
  {
    question: "Which vitamin is known as Riboflavin?",
    options: ["Vitamin B2", "Vitamin B1", "Vitamin B6", "Vitamin C"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Vitamin B7 is ________.",
    options: ["Dermatitis", "Rickets", "Scurvy", "Beri-Beri"],
    answer: 0
  },
  {
    question: "Which part of the digestive system absorbs nutrients?",
    options: ["Small intestine", "Large intestine", "Stomach", "Oesophagus"],
    answer: 0
  },
  {
    question: "Which vitamin is essential for good eyesight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answer: 0
  },
  {
    question: "The disease caused by deficiency of Protein alone is ________.",
    options: ["Kwashiorkor", "Marasmus", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B complex causes ________.",
    options: ["Glossitis", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "The process of breaking down food into simpler substances is ________.",
    options: ["Digestion", "Respiration", "Assimilation", "Excretion"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin A causes ________.",
    options: ["Night blindness", "Rickets", "Scurvy", "Beri-Beri"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin C causes ________.",
    options: ["Scurvy", "Rickets", "Beri-Beri", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin D causes ________.",
    options: ["Rickets", "Scurvy", "Beri-Beri", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B1 causes ________.",
    options: ["Beri-Beri", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B2 causes ________.",
    options: ["Cheilitis", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B12 causes ________.",
    options: ["Pernicious Anaemia", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B3 causes ________.",
    options: ["Pellagra", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B6 causes ________.",
    options: ["Anaemia", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B9 causes ________.",
    options: ["Megaloblastic Anaemia", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin E causes ________.",
    options: ["Sterility", "Rickets", "Scurvy", "Goitre"],
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
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin D"],
    answer: 1
  },
  {
    question: "Which of the following diseases is caused by a deficiency of Vitamin C?",
    options: ["Scurvy", "Rickets", "Night Blindness", "Goitre"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes rickets?",
    options: ["Vitamin D", "Vitamin A", "Vitamin B1", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which mineral is essential for the formation of haemoglobin?",
    options: ["Calcium", "Iron", "Iodine", "Zinc"],
    answer: 1
  },
  {
    question: "The disease caused by deficiency of iodine is?",
    options: ["Goitre", "Anaemia", "Scurvy", "Rickets"],
    answer: 0
  },
  {
    question: "Which vitamin is known as Retinol?",
    options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which disease is caused by deficiency of Vitamin A?",
    options: ["Night Blindness", "Beri-Beri", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Ascorbic Acid?",
    options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    answer: 2
  },
  {
    question: "The deficiency of Vitamin B1 causes which disease?",
    options: ["Beri-Beri", "Rickets", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Calciferol?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    question: "The deficiency of which vitamin causes Pellagra?",
    options: ["Vitamin B3", "Vitamin B1", "Vitamin B2", "Vitamin B6"],
    answer: 0
  },
  {
    question: "Which disease is caused by deficiency of Vitamin D?",
    options: ["Rickets", "Scurvy", "Beri-Beri", "Goitre"],
    answer: 0
  },
  {
    question: "Which of the following diseases is caused by deficiency of Vitamin B12?",
    options: ["Pernicious Anaemia", "Night Blindness", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "The deficiency of Niacin causes which disease?",
    options: ["Pellagra", "Rickets", "Goitre", "Scurvy"],
    answer: 0
  },
  {
    question: "Deficiency of which vitamin causes Sterility?",
    options: ["Vitamin E", "Vitamin A", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "Which vitamin is necessary for normal vision?",
    options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
    answer: 0
  },
  {
    question: "Which vitamin helps in absorption of calcium?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which vitamin prevents rickets?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin K leads to?",
    options: ["Delayed Blood Clotting", "Night Blindness", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "Which vitamin is essential for healthy skin?",
    options: ["Vitamin E", "Vitamin A", "Vitamin D", "Vitamin C"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin B2 causes?",
    options: ["Cheilitis", "Goitre", "Rickets", "Scurvy"],
    answer: 0
  },
  {
    question: "Which vitamin is also called Riboflavin?",
    options: ["Vitamin B2", "Vitamin B1", "Vitamin B3", "Vitamin B5"],
    answer: 0
  },
  {
    question: "The deficiency of Vitamin B6 causes?",
    options: ["Anaemia", "Night Blindness", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Pyridoxine?",
    options: ["Vitamin B6", "Vitamin B2", "Vitamin B12", "Vitamin C"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin B9 causes?",
    options: ["Megaloblastic Anaemia", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also called Folic Acid?",
    options: ["Vitamin B9", "Vitamin B12", "Vitamin B1", "Vitamin C"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes megaloblastic anaemia?",
    options: ["Vitamin B9", "Vitamin B2", "Vitamin B3", "Vitamin B5"],
    answer: 0
  },
  {
    question: "Which vitamin is necessary for the formation of red blood cells?",
    options: ["Vitamin B12", "Vitamin A", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin H causes?",
    options: ["Dermatitis", "Scurvy", "Rickets", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Biotin?",
    options: ["Vitamin H", "Vitamin B1", "Vitamin B2", "Vitamin B3"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes dermatitis?",
    options: ["Vitamin H", "Vitamin B9", "Vitamin C", "Vitamin B6"],
    answer: 0
  },
  {
    question: "Which vitamin prevents night blindness?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Tocopherol?",
    options: ["Vitamin E", "Vitamin A", "Vitamin C", "Vitamin K"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin B5 causes?",
    options: ["Fatigue and Insomnia", "Night Blindness", "Scurvy", "Goitre"],
    answer: 0
  },
  {
    question: "Which vitamin is also known as Pantothenic Acid?",
    options: ["Vitamin B5", "Vitamin B6", "Vitamin B9", "Vitamin B12"],
    answer: 0
  },
  {
    question: "Which vitamin is called the Anti-Stress Vitamin?",
    options: ["Vitamin B5", "Vitamin B6", "Vitamin C", "Vitamin D"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin leads to fatigue and insomnia?",
    options: ["Vitamin B5", "Vitamin B1", "Vitamin B3", "Vitamin B6"],
    answer: 0
  },
  {
    question: "Which vitamin is required for proper functioning of nervous system?",
    options: ["Vitamin B1", "Vitamin A", "Vitamin D", "Vitamin C"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Beri-Beri?",
    options: ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Scurvy?",
    options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Pernicious Anaemia?",
    options: ["Vitamin B12", "Vitamin B9", "Vitamin B6", "Vitamin B2"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Pellagra?",
    options: ["Vitamin B3", "Vitamin B1", "Vitamin B6", "Vitamin B9"],
    answer: 0
  },
  {
    question: "Deficiency of Vitamin B complex causes?",
    options: ["Glossitis", "Rickets", "Goitre", "Scurvy"],
    answer: 0
  },
  {
    question: "Which vitamin deficiency causes Glossitis?",
    options: ["Vitamin B complex", "Vitamin A", "Vitamin D", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which vitamin is known as the sunshine vitamin?",
    options: ["Vitamin D", "Vitamin A", "Vitamin B12", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which vitamin prevents rickets in children?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    answer: 0
  },
  {
    question: "Which vitamin prevents Osteomalacia in adults?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    answer: 0
  },
  {
    question: "The deficiency of which vitamin causes Osteomalacia?",
    options: ["Vitamin D", "Vitamin A", "Vitamin B2", "Vitamin C"],
    answer: 0
  },
  {
    question: "Which vitamin prevents bone deformities?",
    options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
    answer: 0
  },
  {
    question: "Which vitamin deficiency causes poor bone growth?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    answer: 0
  },
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
