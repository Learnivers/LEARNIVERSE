/* Learniverse: Learning Topics for the Shop Books page
   Shows every topic from Kindergarten to Grade 10 for the 10 subjects, organized by subject and grade.
   Put <div id="store-topics"></div> where you want it. If it is missing, the section is added at the end of the page. */
(function () {
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


  SUBJECTS.forEach(function (s) {
    s.topics = s.rows.map(function (line) {
      return line.split(", ").map(function (t) { return t.charAt(0).toUpperCase() + t.slice(1); });
    });
    s.count = s.topics.reduce(function (n, g) { return n + g.length; }, 0);
  });

  const REFS = [
    ["Revised K to 10 Curriculum", "Official curriculum guides and MATATAG curriculum resources."],
    ["MATATAG Curriculum Guides", "Kindergarten, English, Mathematics, Science, Filipino, Arts, GMRC, and other subjects."],
    ["Kindergarten Curriculum Guide", "Early childhood learning standards and competencies."],
    ["K to 12 Curriculum Guides", "English, Filipino, Mathematics, Science, Arts, Music, Health, PE, and Araling Panlipunan."],
    ["K to 12 Database of Curriculum Competencies", "Searchable learning competencies for different grade levels."],
    ["MATATAG Curriculum FAQs", "Grade-level coverage and implementation of the revised curriculum."]
  ];

  const KEY = "learniverse_selected_topics";
  let picked = {};
  try { picked = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { picked = {}; }
  function savePicked() { try { localStorage.setItem(KEY, JSON.stringify(picked)); } catch (e) {} }
  function pickedCount() { return Object.keys(picked).length; }
  function keyOf(s, g, t) { return s + "|" + g + "|" + t; }

  let subject = 0, grade = -1, showSelected = false;
  const initial = parseInt(new URLSearchParams(location.search).get("subject"), 10);
  if (!isNaN(initial) && initial >= 0 && initial < SUBJECTS.length) subject = initial;

  // ----- container -----
  let host = document.getElementById("store-topics");
  if (!host) {
    host = document.createElement("section");
    host.id = "store-topics";
    (document.querySelector("main") || document.body).appendChild(host);
  }
  host.classList.add("lt-section");
  host.innerHTML =
    '<div class="lt-head"><h2>📘 Learning Topics: Kindergarten to Grade 10</h2>' +
    '<p>Browse every lesson topic by subject and grade level. Tap a topic to select the lessons you want to learn.</p></div>' +
    '<input type="search" class="lt-search" placeholder="Search any topic (e.g. fractions, alamat, web design)..." aria-label="Search topics">' +
    '<div class="lt-pills" data-role="subjects"></div>' +
    '<div class="lt-pills lt-small" data-role="grades"></div>' +
    '<div class="lt-bar"><span class="lt-info"></span><span class="lt-actions"></span></div>' +
    '<div class="lt-list"></div>' +
    '<details class="lt-refs"><summary>DepEd curriculum references</summary><ul></ul></details>';

  const q = function (sel) { return host.querySelector(sel); };
  const searchBox = q(".lt-search"), subjectsBox = q('[data-role="subjects"]'), gradesBox = q('[data-role="grades"]');
  const info = q(".lt-info"), actions = q(".lt-actions"), list = q(".lt-list");
  REFS.forEach(function (r) {
    const li = document.createElement("li");
    const b = document.createElement("strong"); b.textContent = r[0];
    li.appendChild(b); li.appendChild(document.createTextNode(": " + r[1]));
    q(".lt-refs ul").appendChild(li);
  });

  // ----- helpers -----
  function pill(text, active, onClick) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "lt-pill" + (active ? " active" : ""); b.textContent = text;
    b.addEventListener("click", onClick);
    return b;
  }
  function topicBtn(s, g, t) {
    const b = document.createElement("button");
    const k = keyOf(s, g, t);
    b.type = "button"; b.className = "lt-topic" + (picked[k] ? " on" : ""); b.textContent = t;
    b.setAttribute("aria-pressed", picked[k] ? "true" : "false");
    b.addEventListener("click", function () {
      if (picked[k]) delete picked[k]; else picked[k] = true;
      savePicked();
      b.classList.toggle("on", !!picked[k]);
      b.setAttribute("aria-pressed", picked[k] ? "true" : "false");
      updateBar();
      if (showSelected) render();
    });
    return b;
  }
  function gradeBlock(s, g, label) {
    const d = document.createElement("details");
    d.className = "lt-grade"; d.open = true;
    const sum = document.createElement("summary");
    sum.textContent = label || GRADES[g];
    const n = document.createElement("small");
    n.textContent = SUBJECTS[s].topics[g].length + " topics";
    sum.appendChild(n);
    const chips = document.createElement("div"); chips.className = "lt-chips";
    SUBJECTS[s].topics[g].forEach(function (t) { chips.appendChild(topicBtn(s, g, t)); });
    d.appendChild(sum); d.appendChild(chips);
    return d;
  }
  function note(text) {
    const p = document.createElement("p"); p.className = "lt-none"; p.textContent = text; return p;
  }

  function updateBar() {
    const n = pickedCount();
    const term = searchBox.value.trim();
    if (showSelected) info.textContent = "Showing your " + n + " selected topic" + (n === 1 ? "" : "s");
    else if (term) info.textContent = "Search results for “" + term + "”";
    else if (grade === -1) info.textContent = SUBJECTS[subject].icon + " " + SUBJECTS[subject].name + ": " +
                            SUBJECTS[subject].count + " topics across 11 grade levels";
    else info.textContent = SUBJECTS[subject].icon + " " + SUBJECTS[subject].name + " · " + GRADES[grade] + ": " +
                            SUBJECTS[subject].topics[grade].length + " topics";
    actions.innerHTML = "";
    const sel = document.createElement("button");
    sel.type = "button"; sel.className = "lt-link";
    sel.textContent = showSelected ? "← Back to all topics" : "✓ My selected topics (" + n + ")";
    sel.addEventListener("click", function () { showSelected = !showSelected; render(); });
    actions.appendChild(sel);
    if (n) {
      const clr = document.createElement("button");
      clr.type = "button"; clr.className = "lt-link lt-clear"; clr.textContent = "Clear selection";
      clr.addEventListener("click", function () { picked = {}; savePicked(); render(); });
      actions.appendChild(clr);
    }
  }

  function render() {
    subjectsBox.innerHTML = ""; gradesBox.innerHTML = "";
    SUBJECTS.forEach(function (s, i) {
      subjectsBox.appendChild(pill(s.icon + " " + s.name, i === subject && !showSelected, function () {
        subject = i; showSelected = false; searchBox.value = ""; render();
      }));
    });
    gradesBox.appendChild(pill("All grades", grade === -1, function () { grade = -1; showSelected = false; searchBox.value = ""; render(); }));
    GRADES.forEach(function (g, i) {
      gradesBox.appendChild(pill(i === 0 ? "Kinder" : g, grade === i, function () { grade = i; showSelected = false; searchBox.value = ""; render(); }));
    });

    list.innerHTML = "";
    const term = searchBox.value.trim().toLowerCase();

    if (showSelected) {
      let any = false;
      SUBJECTS.forEach(function (s, si) {
        GRADES.forEach(function (g, gi) {
          const hits = s.topics[gi].filter(function (t) { return picked[keyOf(si, gi, t)]; });
          if (!hits.length) return;
          any = true;
          const d = document.createElement("details"); d.className = "lt-grade"; d.open = true;
          const sum = document.createElement("summary"); sum.textContent = s.icon + " " + s.name + " · " + g;
          const chips = document.createElement("div"); chips.className = "lt-chips";
          hits.forEach(function (t) { chips.appendChild(topicBtn(si, gi, t)); });
          d.appendChild(sum); d.appendChild(chips); list.appendChild(d);
        });
      });
      if (!any) list.appendChild(note("You have not selected any topics yet. Tap a topic to select it."));
    } else if (term) {
      let found = 0;
      SUBJECTS.forEach(function (s, si) {
        GRADES.forEach(function (g, gi) {
          const hits = s.topics[gi].filter(function (t) { return t.toLowerCase().includes(term); });
          if (!hits.length) return;
          found += hits.length;
          const d = document.createElement("details"); d.className = "lt-grade"; d.open = true;
          const sum = document.createElement("summary"); sum.textContent = s.icon + " " + s.name + " · " + g;
          const chips = document.createElement("div"); chips.className = "lt-chips";
          hits.forEach(function (t) { chips.appendChild(topicBtn(si, gi, t)); });
          d.appendChild(sum); d.appendChild(chips); list.appendChild(d);
        });
      });
      if (!found) list.appendChild(note("No topics found. Try another word."));
    } else if (grade === -1) {
      GRADES.forEach(function (g, gi) { list.appendChild(gradeBlock(subject, gi)); });
    } else {
      list.appendChild(gradeBlock(subject, grade));
    }
    updateBar();
  }

  searchBox.addEventListener("input", function () { showSelected = false; render(); });

  // Keep in step with the subject filter buttons of the shop (matches by name)
  function plain(s) { return s.replace(/\s+/g, " ").trim().toLowerCase(); }
  document.addEventListener("click", function (e) {
    if (host.contains(e.target)) return;
    const el = e.target.closest("button, a, [role=button]");
    if (!el) return;
    const text = plain(el.textContent);
    SUBJECTS.forEach(function (s, i) {
      if (text === plain(s.name) || text === plain(s.icon + " " + s.name)) {
        subject = i; showSelected = false; searchBox.value = ""; render();
      }
    });
  });

  render();
})();
