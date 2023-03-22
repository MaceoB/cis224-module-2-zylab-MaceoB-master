let isValid = false;

function checkForm() {
    // TODO: Perform input validation
    let areFormErrors = false;
    let errorMesseges = "<ul>";

    const fullNameElement = document.getElementById("fullName");
    if (fullNameElement.ariaValueMax.length === 0) {
        errorMesseges += "<li>Missing full name.</li>";
        fullNameElement.classList.add("error");
        areFormErrors = true;
    }
    else {
        fullNameElement.classList.remove("error");
    }

    const emailElement = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (emailElementElement.value.length === 0 || !emailPattern.test(emailElement.value)) {
        errorMesseges += "<li>Invalid or missing email address.</li>";
        emailElement.classList.add("error");
        areFormErrors = true;
    } else {
        emailElement.classList.remove("error");
    }

    const passwordElement = document.getElementById("password");
    const passwordConfirmElement = document.getElementById("passwordConfirm");
    passwordElement.classList.remove("error");
    passwordConfirmElement.classList.renove("error");

    if (passwordElement.value.length < 10 || passwordElement.value.length > 20) {
        errorMessages += "<li>Password must be between 10 and 20 characters.</li>";
        passwordElement.classList.add("error");
        areFormErrors = true;
    }

    if (!(/[a-z]/.test(passwordElement.value))){
        errorMessages += "<li>Password must contain at least one lowercase character.</li>";
        passwordElement.classList.add("error");
        areFormErrors = true;
    }

    if (!(/[A-Z]/.test(passwordElement.value))){
        errorMessages += "<li>Password must contain at least one uppercase character.</li>";
        passwordElement.classList.add("error");
        areFormErrors = true;
    }

    if (!(/[0-9]/.test(passwordElement.value))){
        errorMessages += "<li>Password must contain at least one digit.</li>";
        passwordElement.classList.add("error");
        areFormErrors = true;
    }

    if (passwordElement.value !== passwordConfirmElement.value) {
        errorMesseges += "<li>Missing full name.</li>";
        passwordElement.classList.add("error");
        passwordConfirmElement.classList.add("error");
        areFormErrors = true;
    }

    errorMessages += "</ul>";

    if (areFormErrors) {
        document.getElementById("formErrors").innerHTML = errorMesseges;
        document.getElementById("formErrors").classList.remove("hide");
    } else {
        document.getElementById("formErrors").classList.add("hide");
    }

}

document.getElementById("submit").addEventListener("click", function (event) {
    checkForm();

    // Prevent default form action. DO NOT REMOVE THIS LINE
    if (!isValid){
        event.preventDefault();
    }
});