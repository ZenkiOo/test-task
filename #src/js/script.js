"use strict";

const popupLink = document.querySelector(".person-app__button"),
  popup = document.querySelector(".popup-block"),
  popupClose = document.querySelector(".close-popup"),
  media640 = window.matchMedia("(max-width: 640px)").matches;

popupLink.onclick = function (e) {
  popup.classList.add("active", "close-popup");
  popup.querySelector(".popup").classList.add("popup-anim");
  e.preventDefault();
};
console.log(popup.querySelector(".popup"));
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("close-popup")) {
    popup.classList.remove("active");
    popup.classList.remove("close-popup");
    popup.querySelector(".popup").classList.remove("popup-anim");
  }
});

// Закрытие модольного окна по клавише "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.classList.remove("active");
    popup.classList.remove("close-popup");
  }
});
