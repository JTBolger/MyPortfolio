window.onscroll = function() {hatScroll()};

function hatScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("hats").style.translate = scrolled + "%";
}

window.onload = function() {loadIntro()};

function loadIntro() {
    document.getElementById("intro").style.opacity = 100;
    document.getElementById("intro").style.translate = ""
}