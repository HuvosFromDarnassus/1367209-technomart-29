var mapOpen = document.querySelector(".contacts-map-link");
var mapClose = document.querySelector(".map-close");

var mapPopup = document.querySelector(".modal-map");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();

  mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  // Почему keyCode перечеркивает ???
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})
