function stopDefaultAction(event) {
    event.preventDefault();
}

$('submit_button')[0].addEventListener('submit', stopDefaultAction, false);

function executeOnLoad() {
    var el = $('#submit_button')[0];
    el.addEventListener("click", validate, false);
}

function validate() {
    alert('inside github script validate');
    var email = $('#email')[0],
        password = $('#password')[0],
        hasUpper = password.match(/[A-Z]/),
        hasLower = password.match(/[a-z]/g),
        hasNumber = password.match(/[0-9]/g),
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isValidEmail = re.test(email);

    if (isValidEmail && hasUpper && hasLower && hasNumber) {
        alert("Valid Email Address and Password");
        //        return true;
    } else {
        alert("Not a valid e-mail address or password");
        //        return false;
    }
}

