// ==========================================
// LEARNIVERSE BOOK DATA
// Shared by store.html and checkout.html
// Edit book titles, categories, and prices here.
// ==========================================

// 10 LEARNING SUBJECTS
const AREAS = {
  "Language & Reading": [
    "#ff7eb6",
    "#ffe3f0",
    "📚"
  ],

  "Mathematics & Logic": [
    "#ffb703",
    "#fff0c9",
    "🔢"
  ],

  "Science & Discovery": [
    "#4cb5f5",
    "#d9efff",
    "🔬"
  ],

  "Arts & Creativity": [
    "#9b5de5",
    "#eadcfb",
    "🎨"
  ],

  "Life Skills & Values": [
    "#3ddc97",
    "#d6f7e8",
    "💛"
  ],

  "Filipino": [
    "#ff6b6b",
    "#ffe0e0",
    "✍️"
  ],

  "Araling Panlipunan": [
    "#00bbf9",
    "#d9f5ff",
    "🌏"
  ],

  "Technology & Computer Skills": [
    "#6a45d6",
    "#e7ddff",
    "💻"
  ],

  "Physical Education & Health": [
    "#f15bb5",
    "#ffe0f1",
    "🏃"
  ],

  "TLE / EPP & Entrepreneurship": [
    "#ff9f1c",
    "#ffecd5",
    "🛠️"
  ]
};

// ==========================================
// DIGITAL BOOK COLLECTION
// Format:
// [Book Title, Learning Area, Price, Age Range]
// ==========================================
const BOOKS = [
  // 1. LANGUAGE & READING
  [
    "My First Alphabet Book",
    "Language & Reading",
    149,
    "Ages 3–10"
  ],

  [
    "Word Builders: Vocabulary Fun",
    "Language & Reading",
    179,
    "Ages 5–15"
  ],

  [
    "Reading Adventures",
    "Language & Reading",
    169,
    "Ages 5–12"
  ],


  // 2. MATHEMATICS & LOGIC

  [
    "Counting Adventures",
    "Mathematics & Logic",
    149,
    "Ages 3–10"
  ],

  [
    "Shapes, Puzzles & Patterns",
    "Mathematics & Logic",
    179,
    "Ages 5–10"
  ],

  [
    "Money Smarts for Kids",
    "Mathematics & Logic",
    189,
    "Ages 7–15"
  ],


  // 3. SCIENCE & DISCOVERY

  [
    "Amazing Animals",
    "Science & Discovery",
    169,
    "Ages 4–10"
  ],

  [
    "Journey to Space",
    "Science & Discovery",
    189,
    "Ages 6–10"
  ],

  [
    "Dinosaur Discoveries",
    "Science & Discovery",
    179,
    "Ages 5–10"
  ],


  // 4. ARTS & CREATIVITY

  [
    "Draw Along with Me",
    "Arts & Creativity",
    159,
    "Ages 4–10"
  ],

  [
    "Little Musicians",
    "Arts & Creativity",
    159,
    "Ages 5–10"
  ],

  [
    "Creative Crafts for Kids",
    "Arts & Creativity",
    179,
    "Ages 6–12"
  ],


  // 5. LIFE SKILLS & VALUES

  [
    "Good Manners Every Day",
    "Life Skills & Values",
    139,
    "Ages 3–10"
  ],

  [
    "Understanding My Feelings",
    "Life Skills & Values",
    169,
    "Ages 5–10"
  ],

  [
    "Community Helpers",
    "Life Skills & Values",
    149,
    "Ages 4–10"
  ],


  // 6. FILIPINO

  [
    "Matuto ng Filipino",
    "Filipino",
    169,
    "Ages 6–15"
  ],

  [
    "Masayang Pagbasa at Pagsulat",
    "Filipino",
    179,
    "Ages 5–12"
  ],

  [
    "Mga Kuwentong Pilipino",
    "Filipino",
    189,
    "Ages 7–15"
  ],


  // 7. ARALING PANLIPUNAN

  [
    "Discover the Philippines",
    "Araling Panlipunan",
    179,
    "Ages 6–12"
  ],

  [
    "Our History and Heroes",
    "Araling Panlipunan",
    189,
    "Ages 8–15"
  ],

  [
    "World Cultures and Traditions",
    "Araling Panlipunan",
    199,
    "Ages 9–15"
  ],


  // 8. TECHNOLOGY & COMPUTER SKILLS

  [
    "My First Computer Book",
    "Technology & Computer Skills",
    179,
    "Ages 5–10"
  ],

  [
    "Internet Safety for Kids",
    "Technology & Computer Skills",
    189,
    "Ages 7–12"
  ],

  [
    "Introduction to Coding",
    "Technology & Computer Skills",
    199,
    "Ages 9–15"
  ],


  // 9. PHYSICAL EDUCATION & HEALTH

  [
    "Let's Get Moving!",
    "Physical Education & Health",
    149,
    "Ages 4–10"
  ],

  [
    "Healthy Habits for Kids",
    "Physical Education & Health",
    169,
    "Ages 5–12"
  ],

  [
    "Fun Sports and Fitness",
    "Physical Education & Health",
    179,
    "Ages 7–15"
  ],


  // 10. TLE / EPP & ENTREPRENEURSHIP

  [
    "Kids in the Kitchen",
    "TLE / EPP & Entrepreneurship",
    179,
    "Ages 6–12"
  ],

  [
    "Gardening Adventures",
    "TLE / EPP & Entrepreneurship",
    169,
    "Ages 6–12"
  ],

  [
    "Young Entrepreneurs",
    "TLE / EPP & Entrepreneurship",
    199,
    "Ages 9–15"
  ]

].map((b, i) => ({

  id: i,
  title: b[0],
  area: b[1],
  price: b[2],
  age: b[3]

}));


// ==========================================
// SHARED HELPER FUNCTIONS
// ==========================================

const $ = s => document.querySelector(s);


// Philippine Peso Format
const peso = n =>
  "₱" + n.toLocaleString("en-PH");


// ==========================================
// SHOPPING CART
// ==========================================

// Cart format:
// { bookId: quantity }

function loadCart() {

  try {

    const c = JSON.parse(
      localStorage.getItem("lv-cart2") || "{}"
    );

    const o = {};

    for (const k in c) {

      if (
        Number.isInteger(Number(k)) &&
        BOOKS[Number(k)] &&
        Number.isFinite(Number(c[k])) &&
        Number(c[k]) > 0
      ) {

        o[k] = Math.min(10, Math.floor(Number(c[k])));

      }

    }

    return o;

  } catch (e) {

    return {};

  }

}


function saveCart(c) {

  try {

    localStorage.setItem(
      "lv-cart2",
      JSON.stringify(c)
    );

  } catch (e) {}

}


// Total quantity of books in cart
const cartCount = c =>
  Object.values(c).reduce(
    (a, n) => a + n,
    0
  );


// Total cart price
const cartTotal = c =>
  Object.entries(c).reduce(
    (s, [id, n]) =>
      s + BOOKS[id].price * n,
    0
  );


// ==========================================
// CHECKOUT SELECTION
// ==========================================

// Unticked cart items are stored here.

function loadOff() {

  try {

    return JSON.parse(
      localStorage.getItem("lv-off") || "[]"
    );

  } catch (e) {

    return [];

  }

}


function saveOff(a) {

  try {

    localStorage.setItem(
      "lv-off",
      JSON.stringify(a)
    );

  } catch (e) {}

}


// Selected book IDs
const selIds = c => {

  const off = loadOff();

  return Object.keys(c).filter(
    i => !off.includes(Number(i))
  );

};


// Selected cart total
const selTotal = c =>
  selIds(c).reduce(
    (s, i) => s + BOOKS[i].price * c[i],
    0
  );


// Selected book quantity
const selCount = c =>
  selIds(c).reduce(
    (s, i) => s + c[i],
    0
  );
