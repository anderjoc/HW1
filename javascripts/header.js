if (document.getElementById("index_header"))
	{var title = document.createElement("h1");
	var node = document.createTextNode("Pyramid Web Framework");
	title.appendChild(node);
	
	var childHeader = document.getElementById("index_header");
	var parentHeader = document.getElementById("header");
	parentHeader.replaceChild(title,childHeader);}


if (document.getElementById("about_header"))
	{var title = document.createElement("h1");
	var node = document.createTextNode("About the Author");
	title.appendChild(node);
	
	var childHeader = document.getElementById("about_header");
	var parentHeader = document.getElementById("header");
	parentHeader.replaceChild(title,childHeader);}
	

document.getElementById("footer_content").innerHTML="Webpage built for IS542 at Brigham Young University Provo, UT"

	
	

// Needs to be set to 18000000 for 5 minute interval
setInterval(function(){alert("You've been on this page for 5 minutes. Please extend your session or go to another site.")},18000000);




