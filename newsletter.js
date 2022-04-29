// Newsletter Form //
const newsForm = document.getElementById("newsletter_form");
const form_container = document.getElementById("form_container");
const firstInput = document.getElementById("name");
const secondInput = document.getElementById("email");

function showMessage(input, message, type) {
    const msg = document.createElement('div');
    msg.innerHTML = message;
    newsForm.insertBefore(msg, form_container);
    input.className = type ? "success" : "error";
    msg.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function checkValue(input, message) {
    if (input.value === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, required, invalid) {
    if(!checkValue(input, required)) {
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

newsForm.addEventListener("submit", (e)=> {
    event.preventDefault();

    let nameValid = checkValue(newsForm.elements["name"], "Please enter your name");
    let emailValid = validateEmail(newsForm.elements["email"], "Please enter your email");

    if(nameValid && emailValid) {
        window.location = "subscribed.html";
    }
});