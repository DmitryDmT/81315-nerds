var link = document.querySelector(".link-us");
      
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
        
var login = popup.querySelector("[name=name]");
        
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  login.focus();
});
        
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
        
window.addEventListener("keydown", function(event) { 
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
  popup.classList.remove("modal-content-show");
      }
    }
});