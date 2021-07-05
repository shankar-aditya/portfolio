function FormValidator() {
    var name = document.forms["contact-form"]["mame"];
    var email = document.forms["contact-form"]["email"];
    var what = document.forms["contact-form"]["subject"];
    var message = document.forms["contact-form"]["message"];
  
    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
  
    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (message.value == "") {
        window.alert(
            "Please enter your message.");
        message.focus();
        return false;
    }
  
    return true;
}
