const setContent = document.querySelector(".set__content");
const setDates = document.querySelector(".set__content-dates");
const textInput = document.querySelector(".text-input");
const addButton = document.querySelector(".add-button");
const restButton = document.querySelector(".rest-button");
const lightButton = document.querySelector(".light-button");
const darkButton = document.querySelector(".dark-button");
const sendButton = document.querySelector(".send-button");
const inputElements = document.querySelectorAll("input");
const alertText = document.querySelector(".alert-text");
const modalWindow = document.querySelector(".modal");
const closeCross = document.querySelector(".cross");

const dates = [];

addButton.addEventListener("click", function () {
  let filed = false;

  inputElements.forEach((input) => {
    if (input.value === "") {
      filed = true;
      return;
    }
  });

  if (filed) {
    alertText.textContent = "WRITE YOUR FRUITS!!!";
    return;
  }

  const newFruit = textInput.value + "🟡";
  if (dates.includes(newFruit)) {
    alertText.textContent = "THIS FRUIT IS ALREADY ADDED!!!";
    textInput.value = "";
    return;
  }

  dates.push(textInput.value + "🟡");

  setDates.style.opacity = "70%";
  setDates.textContent = dates.join(", ");
  textInput.value = "";
  alertText.textContent = "";
});

restButton.addEventListener("click", function () {
  location.reload();
});

darkButton.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("h1").style.color = "#fff";
  document.querySelector(".lorem-text").style.color = "#fff";
  document.querySelector(".lorem-text-2").style.color = "#fff";
  document.querySelector(".lorem-text-3").style.color = "#fff";
  document.querySelector(".set__content-title").style.color = "#fff";
  addButton.style.backgroundColor = "#fff";
  addButton.style.color = "#000";
  addButton.style.fontWeight = "600";
  restButton.style.backgroundColor = "#fff";
  restButton.style.color = "#000";
  restButton.style.fontWeight = "600";
  lightButton.style.backgroundColor = "#fff";
  lightButton.style.color = "#000";
  lightButton.style.fontWeight = "600";
  darkButton.style.backgroundColor = "#fff";
  darkButton.style.color = "#000";
  darkButton.style.fontWeight = "600";
  setContent.style.borderColor = "#fff";
  setDates.style.color = "#fff";
  sendButton.style.backgroundColor = "#fff";
  sendButton.style.color = "#000";
  sendButton.style.fontWeight = "600";
  modalWindow.style.border = "1px solid #fff";
});

lightButton.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector("h1").style.color = "#000";
  document.querySelector(".lorem-text").style.color = "#000";
  document.querySelector(".lorem-text-2").style.color = "#000";
  document.querySelector(".lorem-text-3").style.color = "#000";
  document.querySelector(".set__content-title").style.color = "#000";
  addButton.style.backgroundColor = "#000";
  addButton.style.color = "#fff";
  addButton.style.fontWeight = "400";
  restButton.style.backgroundColor = "#000";
  restButton.style.color = "#fff";
  restButton.style.fontWeight = "400";
  lightButton.style.backgroundColor = "#000";
  lightButton.style.color = "#fff";
  lightButton.style.fontWeight = "400";
  darkButton.style.backgroundColor = "#000";
  darkButton.style.color = "#fff";
  darkButton.style.fontWeight = "400";
  setContent.style.borderColor = "#000";
  setDates.style.color = "#000";
  sendButton.style.backgroundColor = "#000";
  sendButton.style.color = "#fff";
  sendButton.style.fontWeight = "400";
  modalWindow.style.border = "none";
});

sendButton.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden");
  textInput.value = "";
  setDates.textContent = "APPLE, BANANAS, ETC";
});

closeCross.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden");
});
