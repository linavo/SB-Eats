let popUp = document.querySelector(".popUp");
let getStartedButton = document.querySelector(".indexButton");
let exitButton = document.querySelector(".exit");

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let alphaNumeric = /^\w+$/;

getStartedButton.addEventListener("click", () => {
  popUp.style.opacity = 1;
  console.log("testing");
});

exitButton.addEventListener("click", () => {
  popUp.style.opacity = 0;
});

function validateForm() {
  if (
    firstName.value.length < 2 ||
    alphaNumeric.test(firstName.value) == false
  ) {
    firstName.style.border = "2px solid rgb(213, 34, 34)";
    firstName.style.borderRadius = "4px";
    return false;
  } else if (
    lastName.value.length < 2 ||
    alphaNumeric.test(lastName.value) == false
  ) {
    lastName.style.border = "2px solid rgb(213, 34, 34)";
    lastName.style.borderRadius = "4px";
    return false;
  } else if (email.value.length < 2) {
    email.style.border = "2px solid rgb(213, 34, 34)";
    email.style.borderRadius = "4px";
    return false;
  } else if (message.value.length < 2) {
    message.style.border = "2px solid rgb(213, 34, 34)";
    message.style.borderRadius = "4px";
    return false;
  } else {
    return true;
  }
}
