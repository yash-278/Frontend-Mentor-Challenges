const inputBox = document.querySelector(".inputBox");
const emailError = document.querySelector(".emailError");
const emailNone = document.querySelector(".emailNone");
const emailSuccess = document.querySelector(".emailSuccess");

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputText.value === "") {
    emailNone.classList.remove("hidden");
    emailError.classList.add("hidden");
    emailSuccess.classList.add("hidden");

    inputBox.classList.remove("border-LightRed");
    inputBox.classList.add("border-Blue");
    document.emailForm.email.focus();

    return false;
  } else if (inputText.value.match(mailformat)) {
    emailNone.classList.add("hidden");
    emailError.classList.add("hidden");
    emailSuccess.classList.remove("hidden");

    inputBox.classList.remove("border-LightRed");
    inputBox.classList.add("border-Blue");
    document.emailForm.email.focus();

    return false;
  } else {
    emailNone.classList.add("hidden");
    emailSuccess.classList.add("hidden");
    emailError.classList.remove("hidden");
    inputBox.classList.remove("border-Blue");
    inputBox.classList.add("border-LightRed");
    document.emailForm.email.focus();

    return false;
  }
}
