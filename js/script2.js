var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var button = document.getElementById("favourite");
var button3 = document.getElementById("custom");
var button2 = document.getElementById("close");
var button4 = document.getElementById("close3");

button.addEventListener("click", function () {
    //menu.className("visible")
    if (modal2.className === "visible") {
        modal2.className = "";
    } else {
        modal2.className = "visible";
    }
});
button3.addEventListener("click", function () {
    //menu.className("visible")
    if (modal3.className === "visible") {
        modal3.className = "";
    } else {
        modal3.className = "visible";
    }
});

button2.addEventListener("click", function () {
    //menu.className("visible")
    if (modal2.className === "visible") {
        modal2.className = "";
    }
    
});
button4.addEventListener("click", function () {
    //menu.className("visible")
    if (modal3.className === "visible") {
        modal3.className = "";
    }
    
});