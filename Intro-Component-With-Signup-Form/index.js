function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

const inputs = qsa(".inputBox");

function checkInputs() {
  const areAllUserInputsValid = validateInputs();
  if (areAllUserInputsValid) {
    console.log("ALL INPUTS ARE FINE");
  } else {
    console.log("SOMETHING WRONG");
  }

  return false;
}

function validateInputs() {
  let isFirstNameValid = false;
  let isLastNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  inputs.forEach((element) => {
    const inputId = element.id;
    const inputText = element.value;

    switch (inputId) {
      case "fName":
        isFirstNameValid = validateName(inputText);
        showError(element, isFirstNameValid);
        break;

      case "lName":
        isLastNameValid = validateName(inputText);
        showError(element, isLastNameValid);
        break;

      case "email":
        isEmailValid = validateEmail(inputText);
        showError(element, isEmailValid);
        break;

      case "password":
        isPasswordValid = validatePassword(inputText);
        showError(element, isPasswordValid);
        break;

      default:
        break;
    }
  });

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

  return isFormValid;
}

const validateName = (name) => {
  /**
   *
   * Names must be
   * - At least two characters long, max length anything
   * - Include at least one vowel letter
   *
   * @author Vanza Setia <https://github.com/vanzasetia>
   *
   */

  const nameValidation = /^((?=.*[aiueo])|(?=.*[AIUEO]))[A-Za-z]{2,}$/;
  const isValid = nameValidation.test(name);

  if (!isValid) {
    return false;
  }
  return isValid;
};

const validateEmail = (input) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const isValid = mailformat.test(input);

  if (!isValid) {
    return false;
  }
  return isValid;
};

const validatePassword = (password) => {
  /**
   *
   * Passwords must be
   * - At least 12 characters long, max length anything
   * - Include at least 1 lowercase letter
   * - 1 capital letter
   * - 1 number
   * - 1 special character => !@#$%^&*
   *
   * @author Harish Chaudhari <harishchaudhari.com>
   *
   */
  const passwordValidation = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{12,}$/;
  const isValid = passwordValidation.test(password);
  if (!isValid) {
    return false;
  }
  return isValid;
};

const showError = (element, isValid) => {
  let prevElClass = element.previousElementSibling.classList;
  let nextElClass = element.nextElementSibling.classList;

  if (isValid) {
    prevElClass.remove("block");
    prevElClass.add("hidden");

    element.classList.remove("border-red-500");

    nextElClass.remove("block");
    nextElClass.add("hidden");
  } else {
    prevElClass.remove("hidden");
    prevElClass.add("block");

    element.classList.add("border-red-500");

    nextElClass.remove("hidden");
    nextElClass.add("block");
  }
};
