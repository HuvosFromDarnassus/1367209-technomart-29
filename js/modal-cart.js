const cartOpen = document.querySelectorAll(".product-card-button-buy");
const cartClose = document.querySelector(".cart-close");
const cartContinue = document.querySelector(".cart-continue-button");

const cartPopup = document.querySelector(".modal-cart");

for (let i = 0; i < cartOpen.length; i++) {
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

