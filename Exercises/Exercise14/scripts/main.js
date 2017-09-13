function submitForm() {
  var messages = [];
  var username = getValue('firstName');
  if (username.length === 0){
    messages.push(' User name required');
    // add invalid class
    getElm("firstName").classList.add("invalid");
  }else {
  // remove invalid
    getElm("firstName").classList.remove("invalid");
  }

    var email = getValue('email');
    if (email.includes('@') === false) {
      messages.push(' Email required');
      // add invalid class
      getElm("email").classList.add("invalid");
    }else {
    // remove invalid
      getElm("email").classList.remove("invalid");
    }

    var password = getValue('password');
    if (password.length === 0){
      messages.push(' Password required');
      // add invalid class
      getElm("password").classList.add("invalid");
    }else {
    // remove invalid
      getElm("password").classList.remove("invalid");
    }

    var timezone = getValue('myDropDown');
    if (timezone.length === 0){
      messages.push(' Please select timezone');
      // add invalid class
      getElm("myDropDown").classList.add("invalid");
    }else {
    // remove invalid
      getElm("myDropDown").classList.remove("invalid");
    }

    var acceptTerms = getValue('checkbox');
    if (checkbox.checked == false){
      messages.push(' Please accept terms');
      // add invalid class
      getElm("checkboxLabel").classList.add("acceptTerms");
    }else {
    // remove invalid
      getElm("checkboxLabel").classList.remove("acceptTerms");
    }

  for (i = 0; i < messages.length; i++){
    getElm('message').innerHTML = messages;
  }
}



getElm('reset').addEventListener('click', function resetForm() {
//var dostuff = getElementsByTagName("input").innerHTML = "";
//getElm('firstName').classList.remove('invalid');
//getElm('message').innerHTML = '';
console.log('checking reset function');
});

getElm('submit').addEventListener('click', submitForm);
//getElm('reset').addEventListener('click', resetForm);


function getElm(id) {
  return document.getElementById(id);
}

function getValue(id) {
  return getElm(id).value;
}
