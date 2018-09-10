/*
@name: Adeum Countdown
@description: A simple countdown application that is intuitive to use and void of distractions
@version: 1.01
@author: Jarne W. Beutnagel (jarne@beutnagel.dk)
@license: Creative Commons Attribution 3.0 Unported License
@year: 2013

@initiator: initiate();

@objects

	display
		initiate()			// Adds event listeners and gets element references
		prepare(value) 		// Prepares the number, a.o. adds leading zero
		setTime() 			// Updates the display
		overlayToggle()		// Toggles the overlay over the display
		overlayShow()		// Shows the overlay
		overlayHide()		// Hides the overlay
		timesupShow()		// Shows the time's up message
		timesupHide()		// Hides the time's up message
		mins 				// Element ('minutes')
		secs 				// Element ('seconds')
		overlay 			// Element ('overlay')
		play 				// Element ('play')
		timesup 			// Element ('times-up')
		number 				// Temp store for the display number

	menu
		initiate()			// Adds event listeners and gets element references
		toggle()			// Toggles the menu from collapsed to full and vice versa
		hide()				// Collapses the menu
		show()				// Shows the menu
		state 				// Keeps track of whether the menu is collapsed or full
		menubtn 			// Element ('menubtn')
		dropdown 			// Element ('dropdown')
		items 				// Elements class ('menuItem')

	timer
		initiate()			// Adds event listeners and gets element references
		run()				// runs the countdown timer
		pause()				// Pauses the countdown timer
		countdown() 		// Performs the countdown
		running 			// Used to keep track of whether the timer is running

	input (under progress)	// used for handling custom times inputted by the user
		initiate()
		show()
		hide()
		apply()
		stepperUp()
		stepperDown()
		secs
		mins
		state
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - Display - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
display = {};
	display.initiate = function () {
		console.log('display object initiated');
		
		// Properties
		display.mins = document.getElementById('minutes');
		display.secs = document.getElementById('seconds');
		display.overlay = document.getElementById('overlay');
		display.play = document.getElementById('play');
		display.timesup = document.getElementById('times-up');
		display.overlayState = "visible";
		display.number;

		// Events
		display.overlay.addEventListener('click',display.overlayToggle);
		display.play.addEventListener('click',display.overlayToggle);
	}
	display.prepare = function (value) {
		if(value<10) {
			display.number = "0" + value;
			return display.number;
		}
		else {
			display.number = value;
			return display.number;
		}
	}
	display.setTime = function (e) {
		// Show the overlay is the timer is not running
		if(timer.running===false) {
			display.overlayShow();
		}
		// Get the minutes from the button that was clicked
		var content = e.target.innerHTML;
		content = content.replace(' min','');
		content = parseInt(content);
		console.log('setTime was called from: '+content+' ('+typeof(content)+')');
		// Set the display number
		display.prepare(content);
		display.mins.innerHTML = display.number;
		display.secs.innerHTML = "00";
		
		// Uncomment for testing ----
		// display.mins.innerHTML = "00";
		// display.secs.innerHTML = "13";
		// ----
		
		// Hide the menu after click
	}
	display.overlayToggle = function () {
		if (display.overlayState==="visible") {
			display.overlayHide();
		}
		else {
			display.overlayShow();
		}	
	}
	display.overlayHide = function () {
		display.overlay.classList.add("hidden");
		display.play.classList.add("hidden");
		menu.hide();
		timer.run();
		display.overlayState = "hidden";
	}
	display.overlayShow = function () {
		display.overlay.classList.remove("hidden");
		display.play.classList.remove("hidden");
		timer.pause();
		display.overlayState = "visible";
		display.timesupHide();
	}
	display.timesupShow = function () {
		display.timesup.style.display = "block";
	}
	display.timesupHide = function () {
		display.timesup.style.display = "none";
	}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - Menu  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
var menu = {
	initiate: function () {
		console.log('menu object initiated');		
		this.menubtn = document.getElementById('menu-btn');
		this.dropdown = document.getElementById('dropdown');
		this.state = "full";
		this.items = document.getElementsByClassName('menuItem');

		this.menubtn.addEventListener('click',this.toggle);
		for (var i = 0; i < this.items.length; i++) {
			this.items[i].addEventListener('click',display.setTime);
		}
	},
	toggle: function () {
		if (menu.state==="full") {
			menu.hide();
		}
		else {
			menu.show();
		}
	},
	hide:  function () {
		//console.log('HideMenu: '+this)
		menu.dropdown.style.top = "0px";
		menu.state = "hidden";
	},
	show: function () {
		menu.dropdown.style.top = "0px";
		menu.state = "full";
	}
};
// menu.initiate = function () {
// 	console.log('menu object initiated');
		
// 	// Properties
// 	menu.menubtn = document.getElementById('menu-btn');
// 	menu.dropdown = document.getElementById('dropdown');
// 	menu.state = "full";
// 	menu.items = document.getElementsByClassName('menuItem');

// 	// Events
// 	menu.menubtn.addEventListener('click',menu.toggle);
// 	for (var i = 0; i < menu.items.length; i++) {
// 		menu.items[i].addEventListener('click',display.setTime);
// 	}

// }
	// menu.toggle = function () {
	// 	if (menu.state==="full") {
	// 		menu.hide();
	// 	}
	// 	else {
	// 		menu.show();
	// 	}
	// }
	// menu.hide = function () {
	// 	menu.dropdown.style.top = "-165px";
	// 	menu.state = "hidden";
	// }
	// menu.show = function () {
	// 	menu.dropdown.style.top = "0px";
	// 	menu.state = "full";
	// }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - Timer - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
timer = {};
	timer.initiate = function () {
		console.log('timer object is initiated');
		// Properties
		timer.running = false;
		timer.interval;
	}
	timer.run = function () {
		console.log('run timer');
		timer.interval = setInterval(timer.countdown,1000);
		display.timesupHide();
	}
	timer.pause = function () {
		console.log('pause timer');
		clearInterval(timer.interval);
	}
	timer.countdown = 	function () {
		secs = display.secs.innerHTML;
		secs = secs.replace(/^0/g,''); // remove leading zeros (due to bug in Opera that converts 09 to 0)
		secs = parseInt(secs);
		mins = parseInt(display.mins.innerHTML);
		console.log('mins: '+mins+' secs: '+secs + ' ('+display.secs.innerHTML+')');
		if (mins>=0 && secs>=0) {
			if (mins===0 && secs===0) {
				console.log('End of timer');
				timer.pause();
				display.timesupShow();
			}
			// countdown second
			if (secs === 0 && mins>=0) {
				secs = 60;
				console.log('new minute')
			}
			if (secs>0 && mins>=0) {
				secs--;
				console.log('-1 sec')
			}
			// countdown minutes
			if (mins > 0 && secs === 59) {
				mins--;
				console.log('-1 min');
			}
		}	
		else {
			console.log('End of timer');
			timer.pause();
			display.timesupShow();
		}
		display.prepare(secs);
		display.secs.innerHTML = display.number;
		display.prepare(mins); 
		display.mins.innerHTML = display.number;
	}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - input - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
input = {};
input.initiate = function () {
	console.log('input object initiated');
	// Properties
	input.mins = 0;
	input.secs = 0;
	input.displayMins = document.getElementById('inputMins');
	input.displaySecs = document.getElementById('inputSecs');
	input.overlay = document.getElementById('inputOverlay');
	input.navElement = document.getElementById('inputNav');
	input.plusBtn = document.getElementById('plus');
	input.minsUpBtn = document.getElementById('minsUp');
	input.secsUpBtn = document.getElementById('secsUp');
	input.minsDownBtn = document.getElementById('minsDown');
	input.secsDownBtn = document.getElementById('secsDown');
	input.okBtn = document.getElementById('inputOK');
	input.state = 'off';

	// Events
	input.plusBtn.addEventListener('click',input.show);
	input.minsUpBtn.addEventListener('click',function () {input.stepperUp('mins');});
	input.secsUpBtn.addEventListener('click',function () {input.stepperUp('secs');});
	input.minsDownBtn.addEventListener('click',function () {input.stepperDown('mins');});
	input.secsDownBtn.addEventListener('click',function () {input.stepperDown('secs');});
	input.okBtn.addEventListener('click',input.updateDisplay);
	input.displayMins.addEventListener('blur',input.validate);
	input.displaySecs.addEventListener('blur',input.validate);
	input.displayMins.addEventListener('click',function () {this.focus();this.select();});
	input.displaySecs.addEventListener('click',function () {this.focus();this.select();});
	//input.displaySecs.addEventListener('click',input.selectAll);
	// input.displaySecs.addEventListener('focus',input.displaySecs.select);
}

input.show = function () {
	//console.log('btn clicked');
	// display.mins.innerHTML = display.prepare(input.mins);
	// display.secs.innerHTML = display.prepare(input.secs);
	input.overlay.style.display = "block";
	input.navElement.style.display = "block";
	input.overlay.addEventListener('click',input.hide);
	// timer.pause();
	// display.overlayShow();
	document.addEventListener('keyup', input.enter2);
}
input.hide = function () {
	console.log('hide input');
	console.log(input.overlay.style.display);
	input.overlay.style.display = "none";
	input.navElement.style.display = "none";
	input.overlay.removeEventListener('click',input.hide);
	console.log(input.overlay.style.display);
}
input.enter2 = function (e) {
	var keyCode = e.keyCode;
	console.log('keycode: '+keyCode);
	// Enter keycode = 13
	if (keyCode == 13) {
		document.removeEventListener('keyup',input.enter2);
		input.updateDisplay();
	}

}
input.stepperUp = function (type) {
	// console.log('type: '+type);
	input.mins = input.displayMins.value;
	input.secs = input.displaySecs.value;
	// console.log('stepper(before): ' + input.mins + ' ' + input.secs);
	if (type==="mins") {
		input.mins++;
	}
	else {
		if (input.secs>=59) { // if secs is higher than 59, add minute
			input.mins++;
			input.secs = 0;
		}
		else {
			input.secs++;
		}
	}
	console.log('StepperUp: '+input.mins+' '+input.secs);
	input.apply();
	input.validate();
}
input.stepperDown = function (type) {
	input.mins = input.displayMins.value;
	input.secs = input.displaySecs.value;
	 //console.log('stepper(before): ' + input.mins + ' ' + input.secs);
	if (type==="mins") {
		if(input.mins==0) { // don't let it go beneath 0
			input.mins = 0;
		}
		else {
			input.mins--;			
		}
	}
	else {
		if (input.mins>0 && input.secs==0) {
			input.mins--;
			input.secs = 59;
		}
		else {
			if (input.secs==0 && input.mins==0) { // don't let it go beneath 0
				input.secs = 0;
			}
			else {
				input.secs--;	
			}		
		}
	}
	console.log('StepperDown: '+input.mins+' '+input.secs);
	input.apply();
	input.validate();
}
input.updateDisplay = function () {
	input.validate();
	display.mins.innerHTML = input.displayMins.value;
	display.secs.innerHTML = input.displaySecs.value;
	input.hide();
	timer.pause();
	menu.hide();
	display.overlayShow();
	display.timesupHide();
	console.log('Update: '+input.mins + ' mins ' + input.secs + 'secs');
}
input.apply = function () {
	//console.log('Apply (before): ' + input.displayMins.value +' ' + input.displaySecs.value);
	// input.displayMins.value = display.prepare(input.mins);
	// input.displaySecs.value = display.prepare(input.secs);
	input.displayMins.value = input.mins;
	input.displaySecs.value = input.secs;
	console.log('Apply: ' + input.displayMins.value +' ' + input.displaySecs.value);
}
input.validate = function () {
	if(input.displayMins.value<10) {
		input.displayMins.value = input.displayMins.value.replace(/^0/g,''); 
		input.displayMins.value = "0"+input.displayMins.value;
	}
	if(input.displayMins.value=="0") {
		input.displayMins.value = "00";
	}
	if (input.displaySecs.value>59) {
		input.displaySecs.value = 59;
	}
	if(input.displaySecs.value=="0") {
		input.displaySecs.value = "00";
	}
	if(input.displaySecs.value<10) {
		input.displaySecs.value = input.displaySecs.value.replace(/^0/g,''); 
		input.displaySecs.value = "0"+input.displaySecs.value;
	}
	console.log('validate');
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - Initiator - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function initiate() {
	console.log('initiating');
	display.initiate();
	menu.initiate();
	timer.initiate();
	input.initiate();
} 

