
var btn = getE('btnSubmit');
btn.addEventListener('click', submit);
var inputs = ['firstName', 'lastName', 'emailAddress'];
var errorMessage = document.getElementsByClassName('errorMessage');
function submit() {
    var elm = document.getElementsByName('input');


    for (var i = 0; i < inputs.length; i++) {
        elm = getE(inputs[i]);
        if (elm.value === '') {
            elm.classList.add(errorMessage);
            console.log('adderr')
        } else {
            elm.classList.remove(errorMessage);
        }
    }
}
function getE(id) {
    return document.getElementById(id);
}
