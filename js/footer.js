var Footer = function () {
    this.init();
}

Footer.prototype = {

    init: function () {
    	//Create containers
    	this.el = document.createElement('footer');
    	this.p = document.createElement('p');
    	this.p.innerHTML = "Webpage built for IS542 at Brigham Young University Provo, UT";
		
    	//Join containers
    	this.el.appendChild(this.p);
    }
    
}