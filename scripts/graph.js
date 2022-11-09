function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.options')) {
        var dropdowns = document.getElementsByClassName("options-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var bar1 = document.getElementById("bar1")
var bar1Text = document.getElementById("bar1Text")
var bar2 = document.getElementById("bar2")
var bar2Text = document.getElementById("bar2Text")
var bar3 = document.getElementById("bar3")
var bar3Text = document.getElementById("bar3Text")
var bar4 = document.getElementById("bar4")
var bar4Text = document.getElementById("bar4Text")
var bar5 = document.getElementById("bar5")
var bar5Text = document.getElementById("bar5Text")
var bar6 = document.getElementById("bar6")
var bar6Text = document.getElementById("bar6Text")

function portfolioGraph() {
    bar1.style.height = "8500%"
    bar1Text.textContent = "31.4%"
    bar2.style.height = "14500%"
    bar2Text.textContent = "58.7%"
    bar3.style.height = "2000%"
    bar3Text.textContent = "9.9%"
    bar4.style.height = "750%"
    bar4Text.textContent = ""
    bar5.style.height = "750%"
    bar5Text.textContent = ""
    bar6.style.height = "750%"
    bar6Text.textContent = ""
}
function afterhoursGraph() {
    bar1.style.height = "1000%"
    bar1Text.textContent = "0.9%"
    bar2.style.height = "7000%"
    bar2Text.textContent = "30.7%"
    bar3.style.height = "9250%"
    bar3Text.textContent = "44.3%"
    bar4.style.height = "4800%"
    bar4Text.textContent = "22.9%"
    bar5.style.height = "750%"
    bar5Text.textContent = ""
    bar6.style.height = "750%"
    bar6Text.textContent = ""
}
function rocketclubGraph() {
    bar1.style.height = "7500%"
    bar1Text.textContent = "30.5%"
    bar2.style.height = "9000%"
    bar2Text.textContent = "37.0%"
    bar3.style.height = "8000%"
    bar3Text.textContent = "32.5%"
    bar4.style.height = "750%"
    bar4Text.textContent = ""
    bar5.style.height = "750%"
    bar5Text.textContent = ""
    bar6.style.height = "750%"
    bar6Text.textContent = ""
}