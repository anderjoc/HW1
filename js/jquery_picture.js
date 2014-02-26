$(document).ready(function(){
	$(".slider").slippity({
	arrowClass: ".arrow", // the selector for arrows navigation.
	slideClass: ".slide", // the selector for slide items.
	dynamicHeight: true, // dynamiclly set the height of your images
	animationTime: 500, // the delay time between slides. 
	start: function(){}, // callback
	end: function(){}}); // callback
	
	$(".slider").hide();

});


	
$( ".slideshow-button" ).click(function(){
	$(this).toggleClass("slideshow-button");
	if ($(this).hasClass("slideshow-button")){
		$("#my-slider").show("slow");
		$(this).text('Hide Picture Slideshow');
	} else {
		$("#my-slider").hide("slow");
		$(this).text('View Picture Slideshow');
	}
});