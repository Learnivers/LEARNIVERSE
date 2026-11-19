/* Learniverse: every learning topic (Kindergarten to Grade 10) as its own digital book.
   Load this file RIGHT AFTER books.js on every page that uses BOOKS (store.html, cart.html, ...),
   or paste its whole content at the end of books.js. */
(function () {
  if (window.__TOPIC_BOOKS__) return;          // safe if it is loaded twice
  window.__TOPIC_BOOKS__ = true;

  // ===== SETTINGS YOU CAN CHANGE =====
  const KEEP_EXISTING_BOOKS = true;            // false = show only the topic books
  // Price in pesos for each grade: Kindergarten, Grade 1, 2, 3 ... 10  (sample prices, change them)
  const PRICES = [49, 49, 49, 59, 59, 69, 69, 79, 79, 89, 89];
  // Sentence added to every description. Only keep what your books really include.
  const INCLUDES = "Includes a lesson explanation, examples, activities, and a quiz with answer key.";
  // ===================================

// Grade levels (same order as the lists below)
const GRADES = ["Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
                "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];

// Subjects: topics are written as comma-separated text, one line per grade
const SUBJECTS = [
  { icon: "📚", name: "Language & Reading", rows: [
    "Alphabet recognition, uppercase and lowercase letters, phonics, vowels, consonants, beginning sounds, rhyming words, listening skills, picture reading, basic vocabulary",
    "Alphabetical order, sight words, syllables, CVC words, simple sentences, nouns, verbs, punctuation, short stories, reading aloud",
    "Common and proper nouns, pronouns, action verbs, adjectives, sentence construction, synonyms, antonyms, sequencing events, story comprehension, Filipino vocabulary",
    "Parts of speech, subject and predicate, verb tenses, sentence types, paragraph writing, context clues, main idea, supporting details, story elements, reading comprehension",
    "Compound sentences, subject-verb agreement, prefixes and suffixes, synonyms and antonyms, figurative language, paragraph organization, summarizing, identifying themes, Filipino grammar",
    "Complex sentences, direct and indirect speech, essay writing, outlining, context clues, idioms, literary genres, summarizing and paraphrasing, persuasive writing, poetry",
    "Advanced grammar, creative writing, narrative essays, research basics, critical reading, literary elements, identifying author's purpose, comparing texts, oral communication, Filipino literature",
    "Parts of speech, sentence structures, narrative texts, poetry, myths and legends, reading strategies, literary devices, oral presentations, Filipino short stories",
    "Argumentative writing, persuasive techniques, analytical reading, literary analysis, drama, short stories, research skills, formal and informal language, Filipino literature",
    "Research writing, technical writing, critical analysis, speech writing, poetry interpretation, world literature, evaluating sources, persuasive communication, Filipino literary works",
    "Academic writing, literary criticism, advanced comprehension, research papers, debate, argumentative essays, rhetorical devices, communication skills, Philippine and world literature"
  ]},
  { icon: "🔢", name: "Mathematics & Logic", rows: [
    "Number recognition, counting, one-to-one correspondence, comparing quantities, shapes, patterns, sorting, ordering, basic measurement",
    "Whole numbers, place value, addition, subtraction, comparing numbers, ordinal numbers, basic fractions, money, time, geometric shapes",
    "Place value, addition and subtraction with regrouping, multiplication concepts, division concepts, fractions, Philippine money, time, length and weight",
    "Multiplication tables, division, fractions, decimals introduction, measurement, perimeter, area introduction, time, money, word problems",
    "Large numbers, factors, multiples, fractions, decimals, basic geometry, angles, measurement conversion, perimeter, area, data interpretation",
    "Operations on fractions, decimals, percentages, ratio introduction, factors and multiples, volume, area, perimeter, geometry, graphs and statistics",
    "Integers, ratios, proportions, percentages, algebraic expressions, equations, order of operations, geometry, volume, probability, problem-solving",
    "Sets, integers, rational numbers, fractions, decimals, algebraic expressions, linear equations, inequalities, geometry, statistics",
    "Laws of exponents, polynomials, factoring, linear equations, systems of linear equations, functions, triangle properties, geometric proofs, probability",
    "Quadratic equations, quadratic functions, polynomials, rational algebraic expressions, variation, sequences, circles, coordinate geometry, statistics",
    "Functions, sequences, polynomial functions, rational expressions, trigonometric ratios, right triangle trigonometry, circles, probability, statistics, mathematical applications"
  ]},
  { icon: "🔬", name: "Science & Discovery", rows: [
    "My body, family, animals, plants, weather, surroundings, senses, natural resources, health and safety",
    "Five senses, body parts, living and nonliving things, plants, animals, water, weather, materials, environment",
    "Human body, animal groups, plant parts, habitats, matter, materials, changes in materials, weather conditions, natural resources",
    "Human body systems introduction, life cycles, animal classification, plant growth, ecosystems, soil, water, air, environmental care",
    "Force and motion, energy, heat, light, sound, matter, mixtures, animal and plant structures, ecosystems, Earth and space",
    "Cells introduction, human body systems, food chains, food webs, ecosystems, adaptations, solar system, weather patterns, environmental conservation",
    "Electricity, magnetism, simple machines, matter, mixtures and solutions, energy transformation, Earth's systems, weather disturbances, space exploration",
    "Scientific investigation, laboratory safety, cells, biodiversity, ecosystems, matter, mixtures, forces, motion, Earth and space science",
    "Cell structures, reproduction, heredity, ecosystems, chemical reactions, waves, sound, light, heat, weather and climate",
    "Genetics, biological systems, periodic table, atomic structure, chemical bonding, motion, force, energy, electricity, Earth processes",
    "Evolution, biodiversity, genetics, chemical reactions, acids and bases, electricity and magnetism, climate change, natural hazards, astronomy"
  ]},
  { icon: "🎨", name: "Arts & Creativity", rows: [
    "Primary colors, coloring, drawing, shapes, music, singing, movement, dancing, creative play, paper crafts",
    "Lines, shapes, colors, patterns, drawing, painting, rhythm, simple songs, folk dances, recycled crafts",
    "Color mixing, paper folding, collage, basic instruments, rhythm patterns, singing, movement, creative storytelling",
    "Painting techniques, origami, visual patterns, local crafts, musical notes, folk songs, dance movements, creative drawing",
    "Philippine traditional arts, indigenous crafts, folk songs, folk dances, painting, sculpture, basic music notation, creative performance",
    "Poster making, printmaking, digital art introduction, musical instruments, rhythm, Filipino cultural dances, stage performance, crafts",
    "Visual storytelling, creative design, art appreciation, music composition basics, choreography, theater, multimedia projects",
    "Elements and principles of art, Philippine arts, music fundamentals, folk dance, drawing techniques, theater arts, creative projects",
    "Asian arts and culture, Asian music, traditional dances, theater, visual art techniques, musical composition, cultural performances",
    "Western art history, classical music, modern dance, digital illustration, drama, creative writing, multimedia performance",
    "Contemporary Philippine arts, modern art movements, multimedia design, digital production, creative performance, music composition, art criticism"
  ]},
  { icon: "❤️", name: "Life Skills & Values", rows: [
    "Self-awareness, family, good manners, sharing, kindness, personal hygiene, healthy habits, safety, recognizing emotions",
    "Respect, honesty, cleanliness, discipline, following rules, friendship, helping others, personal safety",
    "Responsibility, cooperation, empathy, respect for elders, good behavior, family relationships, healthy eating, environmental care",
    "Teamwork, problem-solving, decision-making, safety awareness, community helpers, respect, caring for others, disaster preparedness",
    "Leadership, discipline, Filipino values, community participation, environmental responsibility, health, first aid basics",
    "Financial awareness, saving money, responsible choices, digital citizenship, environmental protection, conflict resolution, teamwork",
    "Decision-making, online safety, cyberbullying awareness, citizenship, leadership, personal development, disaster preparedness",
    "Self-awareness, emotional development, peer pressure, personal responsibility, healthy relationships, respect for diversity",
    "Emotional intelligence, mental well-being, online responsibility, health education, conflict management, communication, environmental awareness",
    "Financial literacy, budgeting, entrepreneurship, leadership, career exploration, responsible relationships, community involvement",
    "Career planning, critical decision-making, financial management, responsible citizenship, human rights, digital ethics, leadership, personal development"
  ]},
  { icon: "✍️", name: "Filipino", rows: [
    "Alpabetong Filipino, patinig, katinig, pangalan ng bagay, simpleng salita",
    "Pantig, pagbasa ng salita, pangungusap, pangngalan, pandiwa",
    "Pang-uri, panghalip, pang-abay, pangungusap, maikling kuwento",
    "Pangatnig, pang-ukol, kasarian ng pangngalan, salawikain, bugtong",
    "Sawikain, idyoma, pang-abay, pangatnig, pagsulat ng talata",
    "Pabula, alamat, epiko, tula, pagsulat ng liham",
    "Maikling kuwento, sanaysay, talumpati, pananaliksik, tayutay",
    "Panitikang Filipino, epiko, mito, alamat, elemento ng tula",
    "Maikling kuwento, dula, nobela, pagsusuri ng akda, tekstong impormatibo",
    "Florante at Laura, sanaysay, talumpati, pananaliksik, pagsusuring pampanitikan",
    "Noli Me Tangere, El Filibusterismo, panitikang pandaigdig, kritikal na pagsusuri, akademikong pagsulat"
  ]},
  { icon: "🌏", name: "Araling Panlipunan", rows: [
    "Pamilya, paaralan, tahanan, pamayanan",
    "Sarili, pamilya, tungkulin, komunidad, mga simbolo ng bansa",
    "Paaralan, pamayanan, mga manggagawa, kultura, tradisyon",
    "Heograpiya ng Pilipinas, lalawigan, rehiyon, likas na yaman",
    "Kasaysayan ng Pilipinas, mga sinaunang Pilipino, kultura, kabuhayan",
    "Pananakop ng Espanya, mga bayani, rebolusyong Pilipino, kalayaan",
    "Pamahalaan ng Pilipinas, Konstitusyon, karapatan at tungkulin, pambansang ekonomiya",
    "Heograpiya ng Asya, kultura, kabihasnan, relihiyon, mga rehiyon",
    "Kasaysayan ng daigdig, sinaunang kabihasnan, Renaissance, Rebolusyong Industriyal",
    "Ekonomiks, supply and demand, produksyon, pagkonsumo, pamilihan",
    "Mga kontemporaryong isyu, globalisasyon, karapatang pantao, politika, ekonomiya, kapayapaan"
  ]},
  { icon: "💻", name: "Technology & Computer Skills", rows: [
    "Identifying computers, basic gadgets, mouse and keyboard awareness",
    "Computer parts, typing letters, basic computer operations",
    "Keyboard functions, drawing applications, saving files",
    "Word processing, typing practice, internet basics",
    "Microsoft Word, PowerPoint basics, computer safety",
    "Spreadsheets, presentations, digital research, online etiquette",
    "File management, computer hardware, basic coding, internet security",
    "Computer systems, operating systems, HTML basics, digital citizenship",
    "Programming fundamentals, web design, algorithms, cybersecurity",
    "HTML, CSS, JavaScript basics, database concepts, networking",
    "Python programming, web development, database management, software development, digital innovation"
  ]},
  { icon: "🏃", name: "Physical Education & Health", rows: [
    "Basic movements, balance, body coordination, healthy habits",
    "Running, jumping, hopping, stretching, personal hygiene",
    "Locomotor movements, non-locomotor movements, simple games",
    "Team games, dance movements, physical fitness, nutrition",
    "Basketball basics, volleyball basics, folk dance, safety",
    "Sportsmanship, fitness exercises, rhythmic activities, healthy eating",
    "Team sports, exercise routines, injury prevention, first aid",
    "Physical fitness components, individual sports, team sports, dance",
    "Basketball, volleyball, badminton, fitness testing, nutrition",
    "Sports strategies, recreational activities, stress management, health awareness",
    "Advanced fitness, sports officiating, injury management, lifelong wellness"
  ]},
  { icon: "🛠️", name: "TLE / EPP & Entrepreneurship", rows: [
    "Identifying tools, helping at home, simple household tasks",
    "Household responsibilities, caring for plants, basic safety",
    "Gardening, cleaning, organizing, recycling",
    "Simple food preparation, household tools, basic sewing",
    "Plant propagation, food preservation, simple crafts",
    "Handicrafts, basic cooking, simple business ideas",
    "Basic entrepreneurship, product creation, budgeting, selling",
    "ICT introduction, agriculture, home economics, industrial arts",
    "Food processing, basic computer applications, entrepreneurship",
    "Computer hardware, basic networking, technical drawing, business planning",
    "Web development basics, business management, financial planning, product development, career preparation"
  ]}
];



  const AGES = ["Age 5", "Ages 6–7", "Ages 7–8", "Ages 8–9", "Ages 9–10", "Ages 10–11",
                "Ages 11–12", "Ages 12–13", "Ages 13–14", "Ages 14–15", "Ages 15–16"];

  // One short sentence per subject for the book description
  const BLURB = [
    "Build strong reading and writing skills with clear lessons and examples.",
    "Learn step by step with clear examples and fun practice problems.",
    "Discover how the world works with simple explanations and illustrations.",
    "Explore your creativity with easy ideas and hands-on projects.",
    "Grow good habits and values with relatable lessons and activities.",
    "Learn the Filipino language and literature with simple lessons and examples.",
    "Learn about community, history, and society with easy-to-follow lessons.",
    "Learn technology skills with clear steps and hands-on practice.",
    "Stay active and healthy with simple guides and activities.",
    "Learn practical skills and business ideas with easy steps and projects."
  ];

  // Colors used only if the shop does not already know the subject: [color, tint, emoji]
  const LOOKS = [["#ff7eb6", "#ffe0ef"], ["#ffb703", "#fff0c8"], ["#4cb5f5", "#dff1ff"], ["#9b5de5", "#eee0ff"],
                 ["#3ddc97", "#d8f8e9"], ["#ff6b6b", "#ffe0e0"], ["#00bbf9", "#d6f3ff"], ["#6a45d6", "#e5ddfa"],
                 ["#f15bb5", "#ffe0f2"], ["#ff9f1c", "#ffe9cc"]];

  function cap(t) { return t.charAt(0).toUpperCase() + t.slice(1); }

  if (!KEEP_EXISTING_BOOKS) BOOKS.length = 0;

  SUBJECTS.forEach(function (s, si) {
    if (!AREAS[s.name]) AREAS[s.name] = [LOOKS[si][0], LOOKS[si][1], s.icon];
    s.rows.forEach(function (line, gi) {
      line.split(", ").forEach(function (raw) {
        const topic = cap(raw);
        BOOKS.push({
          id: BOOKS.length,                        // the cart uses the position in BOOKS as the id
          title: topic + " (" + GRADES[gi] + ")",
          area: s.name,
          grade: GRADES[gi],
          age: GRADES[gi] + " · " + AGES[gi],
          price: PRICES[gi],
          desc: topic + " for " + GRADES[gi] + " learners. " + BLURB[si] + " " + INCLUDES,
          topic: topic
        });
      });
    });
  });

  window.TOPIC_GRADES = GRADES;                    // used by the grade filter on store.html
})();
