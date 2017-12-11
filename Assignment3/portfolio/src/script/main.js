// LANDING PAGE IMAGE SLIDE

document.getElementById('clickLeft').addEventListener('click', myFunction);
function myFunction() {
 document.getElementById("slideLeft").classList.add("leftAni");
 document.getElementById('leftButton').classList.remove("buttonInvisibleLeft");
 document.getElementById('leftButton').classList.add("buttonVisibleLeft");
}

document.getElementById('leftButton').addEventListener('click', myFunctionRemove);
function myFunctionRemove() {
 document.getElementById("slideLeft").classList.remove("leftAni");
 document.getElementById('leftButton').classList.add("buttonInvisibleLeft");
 document.getElementById('leftButton').classList.remove("buttonVisibleLeft");
}

document.getElementById('clickRight').addEventListener('click', myFunction2);
function myFunction2() {
 document.getElementById("slideRight").classList.add("rightAni");
 document.getElementById('rightButton').classList.toggle("buttonVisibleRight");
}

document.getElementById('rightButton').addEventListener('click', myFunctionRemove2);
function myFunctionRemove2() {
 document.getElementById("slideRight").classList.remove("rightAni");
 document.getElementById('rightButton').classList.toggle("buttonVisibleRight");
}

// MODAL STUFF

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
