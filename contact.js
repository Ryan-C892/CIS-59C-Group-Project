"use strict";
var $ = function(id) { return document.getElementById(id); };
// Global Selectors //
var registerForm = $('contact-form');
var fieldSet = document.querySelector('fieldset');
var resetBtn = $('reset');
// Show Message //
function showWarning(input, message, type) {
    const msg = document.createElement('div');
    msg.innerHTML = message;
    registerForm.insertBefore(msg, fieldSet);
    input.className = type ? "success" : "error";
    msg.className = type ? "success" : "error";
    // Vanish
    setTimeout(() => document.querySelector('div.error').remove(), 5000);
    return type;
}

function showError(input, message) {
    return showWarning(input, message, false);
}

function showSuccess(input) {
    return showWarning(input, "", true);
}
// Validate Name //
function checkName(input, message) {
    if (input.value === "") {
        return showError(input, message);
    }
    return showSuccess(input); 
}
// Validate Email //
function checkEmail(input, required, invalid) {
    if(!checkName(input, required)) {
        return false;
    }
    const emailRegex = 
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.value.trim();
    if(!emailRegex.test(email)) {
        return showError(input, invalid);
    }
    return true;
}
// Listen for Submit //
registerForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    var validFirstName = checkName(registerForm.elements["first_name"], "Please enter your first name");
    var validLastName = checkName(registerForm.elements["last_name"], "Please enter your last name");
    var validEmail = checkEmail(registerForm.elements["email"], "Please enter your email");

    if (validFirstName && validLastName && validEmail) {
        window.location = "register_account.html";
    }
});
// Listen for Reset //
resetBtn.addEventListener("click", ()=> {
    registerForm.reset();
});