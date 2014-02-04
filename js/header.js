var Header = function () {
    this.init();
}

Header.prototype = {

    init: function () {
    	//Create containers
    	this.el = document.createElement('header');
    	this.h1 = document.createElement('h1');
    	this.image = document.createElement('img');
    	this.image.id = 'icon';
    	this.title = document.createElement('span');
    	
    	this.getContent();
    	this.title.innerHTML = this.content;
		
    	//Join containers
    	this.el.appendChild(this.h1);
    	this.h1.appendChild(this.image);
    	this.h1.appendChild(this.title);
    	
    	this.utility = new Utility;
    },
    
    //Find whether it is the main page or about page and set header content and the tab content
    getContent: function() {
		//Index Page
		if (document.getElementById("index")){
			this.content = "Pyramids Web Framework";
			this.image.src = "images/pyramid-icon.png";
			document.getElementById('title').innerHTML = "Pyramids Overview";
		}
		//About Page
		if (document.getElementById("about")){
			this.content = "About the Author";
			document.getElementById('title').innerHTML = "About the Author";
		}
		return this.content;
	}
	
}
