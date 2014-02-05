var Clock = function () {
    this.init();
}

Clock.prototype = {
	init: function () {
		this.el = document.createElement('span');
		this.el.id = 'clock'
		timeDisplay = document.createTextNode("");
		document.getElementById("clock").appendChild(timeDisplay);
		updateClock();
		this.utility = new Utility;
	}
	
}


function updateClock() {
   	
    	time = new Date();
    	hours = time.getHours();
    	minutes = time.getMinutes();
    	seconds = time.getSeconds();
    	
    	minutes = (minutes < 10 ? "0" : "") + minutes;
    	seconds = (seconds < 10 ? "0" : "") + seconds;
    	
    	timeOfDay = (hours < 12) ? "AM" : "PM";
    	hours = (hours > 12) ? hours - 12 : hours;
    	hours = (hours == 0) ? 12 : hours;
    	
    	timeString = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
    	
    	document.getElementById("clock").firstChild.nodeValue = 'The current time is ' + timeString;

    	console.log(timeString);

}


