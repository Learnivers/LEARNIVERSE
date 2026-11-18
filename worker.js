// Cloudflare Worker: creates a PayMongo checkout for GCash and Maya only.
// Setup: create a Worker, paste this, add secret PAYMONGO_SECRET (your sk_ key),
// set SITE to your site URL, deploy, then paste the Worker URL into config.js PAYMENT_API.
const SITE="https://learnivers.github.io/Learnivers";
const CORS={"Access-Control-Allow-Origin":"https://learnivers.github.io","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST,OPTIONS"};
const BOOKS={ /* id: [title, priceInPesos] — keep identical to books.js */
  0:["My First Alphabet Book",149],1:["Word Builders: Vocabulary Fun",179],2:["Matuto ng Filipino",169],
  3:["Counting Adventures",149],4:["Shapes, Puzzles & Patterns",179],5:["Money Smarts for Kids",189],
  6:["Amazing Animals",169],7:["Journey to Space",189],8:["Dinosaur Discoveries",179],
  9:["Draw Along with Me",159],10:["Little Musicians",159],11:["Kids in the Kitchen",179],
  12:["Good Manners Every Day",139],13:["Understanding My Feelings",169],14:["Community Helpers",149]
};
export default{
  async fetch(req,env){
    if(req.method==="OPTIONS")return new Response(null,{headers:CORS});
    if(req.method!=="POST")return new Response("Method not allowed",{status:405,headers:CORS});
    const {items,name,email,mobile,method,ref}=await req.json();
    const ids=[...new Set(items||[])].filter(i=>BOOKS[i]); // prices come from the server, never the browser
    if(!ids.length||!["gcash","paymaya"].includes(method))return new Response("Bad request",{status:400,headers:CORS});
    const r=await fetch("https://api.paymongo.com/v2/checkout_sessions",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Basic "+btoa(env.PAYMONGO_SECRET+":")},
      body:JSON.stringify({data:{attributes:{
        line_items:ids.map(i=>({name:BOOKS[i][0],amount:BOOKS[i][1]*100,currency:"PHP",quantity:1})),
        payment_method_types:[method],
        billing:{name,email,phone:mobile},
        reference_number:ref,
        send_email_receipt:true,
        success_url:SITE+"/checkout.html?paid=1&ref="+encodeURIComponent(ref),
        cancel_url:SITE+"/checkout.html"
      }}})
    });
    const j=await r.json();
    const url=j?.data?.attributes?.checkout_url||j?.checkout_url;
    return new Response(JSON.stringify(url?{url}:{error:"Could not start payment"}),{status:url?200:502,headers:{...CORS,"Content-Type":"application/json"}});
  }
};
