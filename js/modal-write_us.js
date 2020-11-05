// ЖабаСкрипт
const writeusOpen = document.querySelector(".contacts-button");
const writeUsClose = document.querySelector(".write-us-close");

const writeUsPopup = document.querySelector(".modal-write-us");

const writeUsForm = document.querySelector(".write-us-form");
const writeUsName = document.querySelector(".write-us-name");
const writeUsMail = document.querySelector(".write-us-mail");
const writeUsText = document.querySelector(".write-us-user-text");

let isStrorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("mail");
} catch (err) {
  isStrorageSupport = false;
}

writeusOpen.addEventListener("click", function (evt) {
  evt.preventDefault();

  writeUsPopup.classList.add("modal-show");

  if (storage) {
    writeUsName.value = storage;
    writeUsMail.focus();
  } else {
    writeUsName.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
})

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsMail.value || !writeUsText.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStrorageSupport) {
      localStorage.setItem("name", writeUsName);
      localStorage.setItem("email", writeUsMail);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();

      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.add("modal-error");
    }
  }
})

