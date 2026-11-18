// Learniverse payment settings. Fill these in.
const CONFIG={
  // A) AUTOMATIC PAYMENT (recommended): your deployed worker.js URL.
  // Leave "" to use the manual option below.
  PAYMENT_API:"",

  // B) MANUAL PAYMENT: customers send money to your own accounts.
  OWNER_EMAIL:"your.email@example.com",
  GCASH:{number:"09XX XXX XXXX",name:"Your Name",qr:"gcash-qr.png"},
  MAYA:{number:"09XX XXX XXXX",name:"Your Name",qr:"maya-qr.png"},
  // Optional: a Formspree URL (https://formspree.io) to receive orders by email.
  FORM_ENDPOINT:""
};
