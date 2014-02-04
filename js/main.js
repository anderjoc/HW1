// Main Script
h = new Header;
document.getElementById('header').appendChild(h.el);

f = new Footer;
document.getElementById('footer').appendChild(f.el);


	
	

// Needs to be set to 18000000 for 5 minute interval
setInterval(function(){alert("You've been on this page for 5 minutes. Please extend your session or go to another site.")},18000000);




