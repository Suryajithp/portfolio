var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'name is reqired';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = ' ';
      return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid';
        return false;
    }
    emailError.innerHTML = ' ';
      return true;
}
function validateSubject(){
    var subject = document.getElementById('contact-subject').value;
    if(subject.length == 0){
        subjectError.innerHTML = 'phone no is required'
        return false;
    }
    if(subject.length !== 10){
        subjectError.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    if(!subject.match(/^[0-9]{10}$/)){
        subjectError.innerHTML = 'only digits please';
        return false;
    }
    subjectError.innerHTML = ' ';
      return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var reqired =20;
    var left = reqired - message.length;
    if(message.length == 0){
        messageError.innerHTML = 'please write a   message';
        return false;
    }
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = ' ';
      return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage)
    {
        submitError.innerHTML = ' '
    }
}