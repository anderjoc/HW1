var timeoutLength = 10000;
var Timer = function () {
    this.init();
}

Timer.prototype = {

    init: function () {
    	//Create containers
    	this.popup = document.createElement('div');
    	this.popup.id = 'popup';
    	this.content = document.createElement('p');
    	this.content.id = 'popupContent'
    	this.content.innerHTML = "Would you like to stay on this page or be redirected?"
    	this.buttonStay = document.createElement('button');
    	this.buttonStay.type = 'button';
    	this.buttonStay.id = 'buttonStay';
    	this.buttonStay.innerHTML = "Stay On This Page";
    	this.buttonGo = document.createElement('button');
    	this.buttonGo.type = 'button';
    	this.buttonGo.id = 'buttonGo';
    	this.buttonGo.innerHTML = "Redirect to Google";

    	//Join containers
    	this.popup.appendChild(this.content);
    	this.popup.appendChild(this.buttonStay);
    	this.popup.appendChild(this.buttonGo);
    	
		setTimeout(timeout,timeoutLength);
		document.getElementById('timer').style.visibility="hidden";
		
    }
}


function timeout(){
	document.getElementById('timer').style.visibility="visible";
	this.buttonGo.onclick = function (evt){
    	document.getElementById('timer').style.visibility="hidden";
		window.location.assign('http://www.google.com');
	}
	this.buttonStay.onclick = function (evt){
    	document.getElementById('timer').style.visibility="hidden";
		setTimeout(timeout,timeoutLength);
	}
}
