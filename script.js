const username = document.getElementById("username");
const password = document.getElementById("password");
const number = document.getElementById("number");
const email = document.getElementById("email");
const emailLabel = document.getElementById("label_email");
const usernameLabel = document.getElementById("label_username");
const numberLabel = document.getElementById("label_number");
const passwordLabel = document.getElementById("label_password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
let usernameValidation = false;
let passwordValidation = false;
let emailValidation = false;
let numberValidation = false;

let usernameString = "username";
let correctUsernameString = "✅ username";
let wrongUsernameString = "❌ username can only contains letters,numbers ,@ and _ also minumum 4 letters and maximum 15";

username.addEventListener("keyup", checkUsername);

function checkUsername() {
    if (!username.value.match(/^[A-Za-z0-9@_]+$/) || username.value.length < 5 || username.value.length > 15 || username.value == "") {
        addUsernameError();
        usernameValidation = false;
    } else {
        removeUsernameError();
        usernameLabel.innerHTML = correctUsernameString;
        usernameValidation = true;
    }
}

function addUsernameError() {
    usernameLabel.innerHTML = wrongUsernameString;
    usernameLabel.classList.add("error");
    usernameLabel.classList.remove("correct");
    username.classList.add("wrong");
    username.classList.remove("right");
}

function removeUsernameError() {
    usernameLabel.classList.remove("error");
    usernameLabel.classList.add("correct");
    username.classList.add("right");
    username.classList.remove("wrong");
}

let emailString = "email";
let emailCorrectString = "✅ email";
let emailWrongString = "❌ invalid email address!!";

email.addEventListener("keyup", checkEmail);

function checkEmail() {
    if (!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || email.value == "") {
        addEmailError();
        emailValidation = false;
    } else {
        removeEmailError();
        emailLabel.innerHTML = emailCorrectString;
        emailValidation = true;
    }
}

function addEmailError() {
    emailLabel.innerHTML = emailWrongString;
    emailLabel.classList.add("error");
    emailLabel.classList.remove("correct");
    email.classList.remove("right");
    email.classList.add("wrong");
}

function removeEmailError() {
    emailLabel.classList.remove("error");
    emailLabel.classList.add("correct");
    email.classList.add("right");
    email.classList.remove("wrong")
}

let numberString = "mobile number";
let numberCorrectString = "✅ mobile number";
let numberWrongString = "❌ invalid mobile number !!";

number.addEventListener("keyup", checkNumber);

function checkNumber() {
    if (!number.value.match(/^\d{10}$/) || number.value == "") {
        addNumberError();
        numberValidation = false;
    } else {
        removeNumberError();
        numberLabel.innerHTML = numberCorrectString;
        numberValidation = true;
    }
}

function addNumberError() {
    numberLabel.innerHTML = numberWrongString;
    numberLabel.classList.add("error");
    numberLabel.classList.remove("correct");
    number.classList.add("wrong");
    number.classList.remove("right");
}

function removeNumberError() {
    numberLabel.classList.remove("error");
    numberLabel.classList.add("correct");
    number.classList.remove("wrong");
    number.classList.add("right");
}

let passwordString = "password";
let passwordCorrectString = "✅ password";
password.addEventListener("keyup", checkPassword);

function checkPassword() {
    if (!password.value.match(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/) || password.value == "") {
        if (password.value.length >= 10) {
            document.getElementById("passwordCharacterCount").classList.add("rightPassword");
        } else {
            document.getElementById("passwordCharacterCount").classList.remove("rightPassword");
        }
        if (!password.value.match(/[a-z]/g)) {
            document.getElementById("passwordLowercase").classList.remove("rightPassword");
        } else {
            document.getElementById("passwordLowercase").classList.add("rightPassword");
        }
        if (!password.value.match(/[A-Z]/g)) {
            document.getElementById("passwordUppercase").classList.remove("rightPassword");

        } else {
            document.getElementById("passwordUppercase").classList.add("rightPassword");
        }
        if (!password.value.match(/[0-9]/g)) {
            document.getElementById("passwordNumber").classList.remove("rightPassword");

        } else {
            document.getElementById("passwordNumber").classList.add("rightPassword");
        }
        if (!password.value.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {
            document.getElementById("passwordSpecialCharacter").classList.remove("rightPassword");
        } else {
            document.getElementById("passwordSpecialCharacter").classList.add("rightPassword");
        }
        addPasswordError();
        passwordValidation = false;
    } else {
        removePasswordError();
        passwordLabel.innerHTML = passwordCorrectString;
        passwordValidation = true;
    }
}
const passwordError = document.getElementById("passwordError");

function addPasswordError() {
    passwordLabel.innerHTML = "";
    passwordError.classList.remove("hidden");
    passwordLabel.classList.add("error");
    passwordLabel.classList.remove("correct");
    password.classList.add("wrong");
    password.classList.remove("right");
}

function removePasswordError() {
    passwordError.classList.add("hidden");
    passwordLabel.classList.remove("error");
    passwordLabel.classList.add("correct");
    password.classList.remove("wrong");
    password.classList.add("right");
}

form.addEventListener("reset", reset);

function reset() {
    usernameLabel.classList.remove("correct", "error");
    username.classList.remove("wrong", "right");
    usernameLabel.innerHTML = usernameString;
    passwordLabel.classList.remove("correct", "error");
    password.classList.remove("wrong", "right");
    passwordLabel.innerHTML = passwordString;
    passwordError.classList.add("hidden");
    emailLabel.classList.remove("correct", "error");
    email.classList.remove("wrong", "right");
    emailLabel.innerHTML = emailString;
    numberLabel.classList.remove("correct", "error");
    number.classList.remove("wrong", "right");
    numberLabel.innerHTML = numberString;
    usernameValidation = false;
    passwordValidation = false;
    emailValidation = false;
    numberValidation = false;
}

submit.addEventListener("click", checkValidation);

function checkValidation() {
    if (usernameValidation == false || passwordValidation == false || numberValidation == false || emailValidation == false) {
        if (username.value == "") {
            addUsernameError();
        } else {
            checkUsername();
        }
        if (email.value == "") {
            addEmailError();
        } else {
            checkEmail();
        }

        if (password.value == "") {
            addPasswordError();
        } else {
            checkPassword();
        }

        if (number.value == "") {
            addNumberError();
        } else {
            checkNumber();
        }
    } else {
        document.getElementById("main").classList.add("rotate");
    }
}