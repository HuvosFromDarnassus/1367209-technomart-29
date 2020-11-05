const mapOpen = document.querySelector(".contacts-map-link");
const mapClose = document.querySelector(".map-close");

const mapPopup = document.querySelector(".modal-map");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();

  mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})
