const username=document.getElementById("username");
const password=document.getElementById("password");
const email=document.getElementById("email");
const number=document.getElementById("number");
const form=document.getElementById("form");
const submit=document.getElementById("submit");
const submited=document.getElementById("submited");

let usernameValidation=false;
let passwordValidation=false;
let emailValidation=false;
let numberValidation=false;

const usernameError=document.getElementById("username-error");

username.addEventListener("keyup",checkUsername);

function checkUsername(){
    if(!username.value.match(/^[A-Za-z0-9@_]+$/) || username.value.length<5 || username.value.length>15 || username.value==""){
        addUsernameError();
        usernameValidation=false;
    }
    else{
        removeUsernameError();
        usernameValidation=true;
    }
}
function addUsernameError(){
    usernameError.classList.remove("hidden");
    username.classList.add("input-error");
}
function removeUsernameError(){
    usernameError.classList.add("hidden");
    username.classList.remove("input-error");
}
const passwordError=document.getElementById("password-error");
password.addEventListener("keyup",checkPassword);
function checkPassword(){
    if(!password.value.match(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/) || password.value==""){
        addPasswordError();
        passwordValidation=false;
    }
    else{
        removePasswordError();
        passwordValidation=true;
    }
}
function addPasswordError(){
    passwordError.classList.remove("hidden");
    password.classList.add("input-error");
}
function removePasswordError(){
    passwordError.classList.add("hidden");
    password.classList.remove("input-error");
}
const numberError=document.getElementById("number-error");
number.addEventListener("keyup",checkNumber);

function checkNumber(){
    if(!number.value.match(/^\d{10}$/) || number.value==""){
        addNumberError();
        numberValidation=false;
    }
    else{
        removeNumberError();
        numberValidation=true;
    }
}
function addNumberError(){
    numberError.classList.remove("hidden");
    number.classList.add("input-error");
}
function removeNumberError(){
    numberError.classList.add("hidden");
    number.classList.remove("input-error");
}
const emailError=document.getElementById("email-error");
email.addEventListener("keyup",checkEmail);

function checkEmail(){
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || email.value==""){
        addEmailError();
        emailValidation=false;
    }
    else{
        removeEmailError();
        emailValidation=true;
    }
}

function addEmailError(){
    emailError.classList.remove("hidden");
    email.classList.add("input-error");
}
function removeEmailError(){
    emailError.classList.add("hidden");
    email.classList.remove("input-error");
}

form.addEventListener("reset",reset);

function reset(){
        removeEmailError();
        removeNumberError();
        removePasswordError();
        removeUsernameError();
        usernameValidation=false;
        passwordValidation=false;
        emailValidation=false;
        numberValidation=false;
}
submit.addEventListener("click",checkValidation);

function checkValidation(){
    if(usernameValidation==false || passwordValidation==false || numberValidation==false || emailValidation==false){
        if(username.value==""){
            addUsernameError();    
        }
        else{
            checkUsername();
        }
        
        if(email.value==""){
            addEmailError();
        }
        else{
            checkEmail();
        }
        
        if(password.value==""){
            addPasswordError();
        }
        else{
            checkPassword(); 
        }
        
        if(number.value==""){
            addNumberError();
        }
        else{
            checkNumber();
        }
    }
    else{
        submited.classList.remove("hidden");
        form.classList.add("hidden");
    }
}
