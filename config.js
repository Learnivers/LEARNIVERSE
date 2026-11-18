// Learniverse payment settings.
const CONFIG={
  // A) AUTOMATIC PAYMENT (optional): your deployed worker.js URL. Leave "" to use the QR payment below.
  PAYMENT_API:"",

  // B) QR PAYMENT: customers scan your QR and send the money to you.
  OWNER_EMAIL:"leonilyn.lutero@olivarezcollege.edu.ph", // <-- the email that receives orders. Change it if you use another one.
  GCASH:{number:"0954 370 4361",name:"Leonilyn M. Lutero",qr:"gcash-qr.png"},
  MAYA:{number:"0954 370 4361",name:"Leonilyn M. Lutero",qr:"maya-qr.png"},
  // Optional: a Formspree URL (https://formspree.io) to receive orders by email without opening the customer's mail app.
  FORM_ENDPOINT:""
};
