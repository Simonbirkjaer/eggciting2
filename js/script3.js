var page1 = document.getElementById("index");
var page2 = document.getElementById("amount");
var page3 = document.getElementById("size");
var page4 = document.getElementById("timere");
var page5 = document.getElementById("clock");

var button1 = document.getElementById("to-amount");
var button2 = document.getElementById("to-size");
var button3 = document.getElementById("back-amount");
var button4 = document.getElementById("to-timer");
var button5 = document.getElementById("back-size");
var button6 = document.getElementById("play");
var button7 = document.getElementById("to-index");

var sound = document.getElementById("playsound");
var modal = document.getElementById("times-up");

var preset1 = document.getElementById("time1");
var preset2 = document.getElementById("time2");
var preset3 = document.getElementById("time3");
var preset4 = document.getElementById("time4");
var preset5 = document.getElementById("time5");
var preset6 = document.getElementById("time6");



button1.addEventListener("click", function () {
    //menu.className("visible")
if (page2.className === "visible") {
        page2.className = "";
    } else {
        page2.className = "visible";
        page1.className = "invisible";
    }
});

button2.addEventListener("click", function () {
    //menu.className("visible")
if (page3.className === "visible") {
        page3.className = "";
    } else {
        page3.className = "visible";
        page2.className = "invisible";
    }
});

button3.addEventListener("click", function () {
    //menu.className("visible")
if (page2.className === "visible") {
        page2.className = "";
    } else {
        page2.className = "visible";
        page3.className = "invisible";
    }
});

button4.addEventListener("click", function () {
    //menu.className("visible")
if (page4.className === "visible") {
        page4.className = "";
    } else {
        page4.className = "visible";
        page3.className = "invisible";
    }
});

button5.addEventListener("click", function () {
    //menu.className("visible")
if (page3.className === "visible") {
        page3.className = "";
    } else {
        page3.className = "visible";
        page4.className = "invisible";
		preset1.className = "";
		preset2.className = "";
		preset3.className = "";
		preset4.className = "";
		preset5.className = "";
		preset6.className = "";
		document.getElementById("checkbox1").checked = false;
		document.getElementById("checkbox2").checked = false;
		document.getElementById("checkbox3").checked = false;
    }
});

button6.addEventListener("click", function () {
    //menu.className("visible")
if (page5.className === "visible") {
        page5.className = "";
    } else {
        page5.className = "visible";
        page4.className = "invisible";
    }
});

button7.addEventListener("click", function () {
    //menu.className("visible")
if (page1.className === "visible") {
        page1.className = "";
    } else {
        page1.className = "visible";
        page5.className = "invisible";
        modal.className = "";
        sound.pause();
        
    }
});





