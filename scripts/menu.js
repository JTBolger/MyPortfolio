var button = document.getElementById("bottom")
var closebtn = document.getElementById("close-button")
var container = document.getElementById("container")

function closeNav() {
    button.style.height = "15%"
    button.style.borderTopRightRadius = "50%"
    button.style.borderTopLeftRadius = "50%"
    button.style.transform = ""
    button.style.marginBottom = ""
    button.style.cursor = ""
    closebtn.style.opacity = 0;
    closebtn.style.rotate = ""
    closebtn.style.translate = "0px 100%"
    closebtn.style.cursor = ""
    container.style.opacity = ""
}
function openNav() {
    button.style.height = "100%";
    button.style.borderRadius = "0%";
    button.style.transform = "scaleY(1)"
    button.style.marginBottom = "0"
    button.style.cursor = "default"
    button.style.position='fixed'
    revealButton()
    container.style.opacity = "1"
}
function revealButton() {
    closebtn.style.opacity = 1;
    closebtn.style.rotate = "180deg"
    closebtn.style.translate = "0px 10px"
    closebtn.style.translate = "0px -50%"
    closebtn.style.cursor = "pointer"
}