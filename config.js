// Learniverse payment settings.
const CONFIG={
  // A) AUTOMATIC PAYMENT (optional): your deployed worker.js URL. Leave "" to use the QR payment below.
  PAYMENT_API:"",

  // B) QR PAYMENT: customers scan your QR and send the money to you.
  OWNER_EMAIL:"your.email@example.com", // <-- change to the email where you want to receive orders
  GCASH:{number:"0954 370 4361",name:"Leonilyn M. Lutero",qr:"gcash-qr.png"},
  MAYA:{number:"0954 370 4361",name:"Leonilyn M. Lutero",qr:"maya-qr.png"},
  // Optional: a Formspree URL (https://formspree.io) to receive orders by email without opening the customer's mail app.
  FORM_ENDPOINT:""
};
