$(document).ready(function(){

     ///// Code goes here
$('#btnOne').on('click', trigger);
function trigger() { alert('Triggered')
}

$('#btnTwo').on('click', upDate);
function upDate() {
  $('.update-html').html('<h3>Hello Word!</h3>')
}

$('#btnThree').on('click', hello);
function hello() {
  $('#text-update').val('Hello World');
}

$('#btnCopyHtml').on('click', copy);
  function copy() {
    var copiedHtml = $('.copy-html').html();
    $('.paste-html').html(copiedHtml);
  }

  $('#btnCopyValues').on('click', copy2);
    function copy2() {
      var copiedValue = $('#copy-text').val();
      $('#paste-text').val(copiedValue);
    }

});
