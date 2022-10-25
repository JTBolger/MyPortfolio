window.onload = function() {loadIntro()}
window.onload = function() {moveBottom()}
window.onload = function() {titleIntro()}

var title = document.getElementById("PageTitle")
var titleFG = document.getElementById("transitionFG")
var bottom = document.getElementById("bottom")

function loadIntro() {
    title.style.opacity = 1;
}
function moveFG() {
    titleFG.style.height = "0%"
    titleFG.style.borderRadius = "80%"
    titleFG.style.borderRadius = "90%"
    titleFG.style.translate = "0px -1500px"
    bottom.style.height = "15%";
    title.style.opacity = 0;
}
setTimeout(moveFG, 700);
setTimeout(loadIntro, 100);