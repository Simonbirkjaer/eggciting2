var button1 = document.getElementById("size1");
var button2 = document.getElementById("size2");
var button3 = document.getElementById("size3");

var preset1 = document.getElementById("time1");
var preset2 = document.getElementById("time2");
var preset3 = document.getElementById("time3");
var preset4 = document.getElementById("time4");
var preset5 = document.getElementById("time5");
var preset6 = document.getElementById("time6");


button1.addEventListener("click", function () {
	//menu.className("visible")
	if (preset1.className === "" && preset2.className === "") {
		preset1.className = "visible";
		preset2.className = "visible";
	}
});

button2.addEventListener("click", function () {
	//menu.className("visible")
	if (preset3.className === "" && preset4.className === "") {
		preset3.className = "visible";
		preset4.className = "visible";
	}
});

button3.addEventListener("click", function () {
	//menu.className("visible")
	if (preset5.className === "" && preset6.className === "") {
		preset5.className = "visible";
		preset6.className = "visible";
	}
});

preset1.addEventListener("click", function (){
	document.getElementById("checkbox4").checked = true;
})
preset2.addEventListener("click", function (){
	document.getElementById("checkbox5").checked = true;
})
preset3.addEventListener("click", function (){
	document.getElementById("checkbox4").checked = true;
})
preset4.addEventListener("click", function (){
	document.getElementById("checkbox5").checked = true;
})
preset5.addEventListener("click", function (){
	document.getElementById("checkbox4").checked = true;
})
preset6.addEventListener("click", function (){
	document.getElementById("checkbox5").checked = true;
})
