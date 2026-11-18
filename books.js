// Shared by store.html and checkout.html. Edit books and prices (₱) here.
const AREAS={
  "Language & Reading":["#ff7eb6","#ffe3f0","📚"],
  "Mathematics & Logic":["#ffb703","#fff0c9","🔢"],
  "Science & Discovery":["#4cb5f5","#d9efff","🔬"],
  "Arts & Creativity":["#9b5de5","#eadcfb","🎨"],
  "Life Skills & Values":["#3ddc97","#d6f7e8","💛"]
};
const BOOKS=[
  ["My First Alphabet Book","Language & Reading",149,"Ages 3–5"],
  ["Word Builders: Vocabulary Fun","Language & Reading",179,"Ages 5–7"],
  ["Matuto ng Filipino","Language & Reading",169,"Ages 6–9"],
  ["Counting Adventures","Mathematics & Logic",149,"Ages 3–5"],
  ["Shapes, Puzzles & Patterns","Mathematics & Logic",179,"Ages 5–8"],
  ["Money Smarts for Kids","Mathematics & Logic",189,"Ages 7–10"],
  ["Amazing Animals","Science & Discovery",169,"Ages 4–7"],
  ["Journey to Space","Science & Discovery",189,"Ages 6–10"],
  ["Dinosaur Discoveries","Science & Discovery",179,"Ages 5–9"],
  ["Draw Along with Me","Arts & Creativity",159,"Ages 4–8"],
  ["Little Musicians","Arts & Creativity",159,"Ages 5–9"],
  ["Kids in the Kitchen","Arts & Creativity",179,"Ages 6–10"],
  ["Good Manners Every Day","Life Skills & Values",139,"Ages 3–6"],
  ["Understanding My Feelings","Life Skills & Values",169,"Ages 5–8"],
  ["Community Helpers","Life Skills & Values",149,"Ages 4–7"]
].map((b,i)=>({id:i,title:b[0],area:b[1],price:b[2],age:b[3]}));

const $=s=>document.querySelector(s);
const peso=n=>"₱"+n.toLocaleString("en-PH");
function loadCart(){try{return JSON.parse(localStorage.getItem("lv-cart")||"[]").filter(i=>BOOKS[i])}catch(e){return[]}}
function saveCart(c){try{localStorage.setItem("lv-cart",JSON.stringify(c))}catch(e){}}
