$(document).ready(function(){
// PART 2
$('#btnShow').on('click', function() {
    $('.display-basic').show();
});

$('#btnHide').on('click', function() {
    $('.display-basic').hide();
});

$('#btnToggle').on('click', function() {
    $('.display-basic').toggle();
});
// PART 3

$(".part3").css("display", "block");

// PART 4
$('#btnFadeIn').on('click', function() {
    $('.display-fade').fadeIn('quick');
});

$('#btnFadeOut').on('click', function() {
    $('.display-fade').fadeOut('slow');
});

$('#btnFadeToggle').on('click', function() {
    $('.display-fade').fadeToggle('slow');
});

// PART 5
$('#btnSlideDown').on('click', function() {
    $('.display-slide').slideDown(1000);
});

$('#btnSlideUp').on('click', function() {
    $('.display-slide').slideUp(500);
});

$('#btnSlideToggle').on('click', function() {
    $('.display-slide').slideToggle();
});

});
