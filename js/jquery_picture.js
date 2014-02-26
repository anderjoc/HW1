$(document).ready(function(){
	$(".slider").slippity({
	arrowClass: ".arrow", // the selector for arrows navigation.
	slideClass: ".slide", // the selector for slide items.
	dynamicHeight: true, // dynamiclly set the height of your images
	animationTime: 500, // the delay time between slides. 
	start: function(){}, // callback
	end: function(){}}); // callback

	$( ".slideshow-button" ).click(function(){
		$(this).toggleClass("slideshow-button");
		if ($(this).hasClass("slideshow-button")){
			$("#my-slider").show();
			$(this).text('Hide Picture Slideshow');
			$(".footer").css("margin-top","500px")
		} else {
			$("#my-slider").hide();
			$(this).text('View Picture Slideshow');
		}
	});

});


	
