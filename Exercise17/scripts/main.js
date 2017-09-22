$(document).ready(function(){
$('.error').hide();
$('.input-group').filter(':even').addClass('even');
$('#firstName').on('blur', function(){
  var firstName = $('#firstName').val();
  var errorMessage = $(this).closest('.input-group').find('.requiredMsg');
        if(firstName === ""){
          errorMessage.fadeIn();
        }else{
          errorMessage.fadeOut();
        }
    })
    $('#lastName').on('blur', function(){
    var lastName = $('#lastName').val();
    var errorMessage = $(this).closest('.input-group').find('.requiredMsg');
          if(lastName === ""){
            errorMessage.fadeIn();
          }else{
            errorMessage.fadeOut();
          }
      })
      $('#emailAddress').on('blur', function(){
      var emailAddress = $('#emailAddress').val();
      var errorMessage = $(this).closest('.input-group').find('.requiredMsg');
      var emailMsg = $(this).closest('.input-group').find('.emailMsg');
            if(emailAddress === ""){
              errorMessage.fadeIn();
            }else{
              errorMessage.fadeOut();
            }
            if(emailAddress.includes('@') === false){
              emailMsg.fadeIn();
            }else{
              emailMsg.fadeOut();
            }
        })




});
