$(document).ready(function(){
	$(".slider").slippity({
	arrowClass: ".arrow", // the selector for arrows navigation.
	slideClass: ".slide", // the selector for slide items.
	dynamicHeight: true, // dynamiclly set the height of your images
	animationTime: 500, // the delay time between slides. 
	start: function(){}, // callback
	end: function(){}}); // callback
});