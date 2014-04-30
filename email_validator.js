function validate() {
    var email = document.getElementById('email'),
        password = document.getElementById('password'),
        hasUpper = password.match(/[A-Z]/),
        hasLower = password.match(/[a-z]/g),
        hasNumber = password.match(/[0-9]/g),
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isValidEmail = re.test(email);

    if (isValidEmail && hasUpper && hasLower && hasNumber) {
        alert("Valid Email Address and Password");
        return true;
    } else {
        alert("Not a valid e-mail address or password");
        return false;
    }
}

function executeOnLoad() {
    window.captureEvents(Event.SUBMIT);
    window.onsubmit = validate;
}
