/*I had to use Bret's JS, I couldn't figure how to get it working from the bootstrap documentation.*/

$(document).ready(function () {

    var form = document.getElementById('myForm');

    $('#btnSubmit').on('click', function(){

        if (form.checkValidity() === false) {

        } else {
            $('form').fadeOut('slow');
            $('#thankyou').fadeIn('slow');
        }
          form.classList.add('was-validated');
    });
});
