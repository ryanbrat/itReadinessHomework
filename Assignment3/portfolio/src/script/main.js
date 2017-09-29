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
 // document.getElementById('rightButton').classList.add("buttonVisibleRight");
}

document.getElementById('rightButton').addEventListener('click', myFunctionRemove2);
function myFunctionRemove2() {
 document.getElementById("slideRight").classList.remove("rightAni");
 document.getElementById('rightButton').classList.toggle("buttonVisibleRight");
 // document.getElementById('rightButton').classList.remove("buttonVisibleRight");
}
