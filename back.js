// Adds a Back button to the page. Add <script src="back.js"></script> before </body> on every page.
(function(){
  var css=document.createElement("style");
  css.textContent=".lv-back{position:fixed;left:16px;bottom:16px;z-index:60;display:inline-flex;align-items:center;gap:6px;background:#6a45d6;color:#fff;border:0;border-radius:999px;padding:11px 22px;font:800 1rem Nunito,system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 20px rgba(106,69,214,.4)}.lv-back:hover{background:#2e2a7a}.lv-back:focus-visible{outline:3px solid #ffc233;outline-offset:2px}";
  document.head.appendChild(css);
  var b=document.createElement("button");
  b.className="lv-back";b.type="button";b.setAttribute("aria-label","Go back");b.textContent="← Back";
  b.onclick=function(){
    if(history.length>1&&document.referrer){history.back();return}
    location.href=/store\.html/.test(location.pathname)?"profile.html":"store.html";
  };
  document.body.appendChild(b);
})();
