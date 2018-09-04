var button = document.getElementById("spinning-egg");
var button2 = document.getElementById("close");
var button3 = document.getElementById("close2");
var button4 = document.getElementById("close3");
var modal = document.getElementById("modal");

var sound = document.getElementById("play")

button.addEventListener("click", function () {
    //menu.className("visible")
    if (modal.className === "visible") {
        modal.className = "";
    } else {
        modal.className = "visible";
        sound.play();
    }
});

button2.addEventListener("click", function () {
    //menu.className("visible")
    if (modal.className === "visible") {
        modal.className = "";
        sound.pause();
    }
});

button3.addEventListener("click", function () {
    //menu.className("visible")
    if (modal.className === "visible") {
        modal.className = "";
        sound.pause();
    }
});

button4.addEventListener("click", function () {
    //menu.className("visible")
    if (modal.className === "visible") {
        modal.className = "";
        sound.pause();
    }
});
