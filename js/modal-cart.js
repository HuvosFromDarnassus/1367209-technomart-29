var cartOpen = document.querySelectorAll(".product-card-button-buy");
var cartClose = document.querySelector(".cart-close");
var cartContinue = document.querySelector(".cart-continue-button");

var cartPopup = document.querySelector(".modal-cart");

for (var i = 0; i < cartOpen.length; i++) {
  cartOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    cartPopup.classList.add("modal-show");
  })
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  cartPopup.classList.remove("modal-show");
})

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();

  cartPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
})

