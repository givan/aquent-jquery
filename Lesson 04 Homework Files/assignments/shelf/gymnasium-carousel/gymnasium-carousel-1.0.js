/*

Don't forget to document your plugin! Include any assumptions that your plugin is making.

*/

// Don't forget to add your own stylesheet.

$(document).ready(function() {
	// Set up our carousel.
	var $carousel = $('.carousel-wrapper');
	$carousel.cycle({
		fx: 'scrollHorz',
		speed: 400,
		height: $carousel.height(),
		width: $carousel.width(),
		fit: true
	}).cycle('pause');

	// Set up the carousel buttons.
	$('.nav-arrow-left').click(function() {
		$carousel.cycle('prev');
	});
	$('.nav-arrow-right').click(function() {
		$carousel.cycle('next');
	});

	// Animate in.
	$('ul.shelf > li').animate({ top: 0, left: 0 }, 700, 'easeOutBounce');

	// Set up hover effect.
	$('ul.shelf > li').hover(
		function() { $(this).children('.meta').stop().animate({ bottom: 0 }, 250) },
		function() { $(this).children('.meta').stop().animate({ bottom: -22 }, 100) }
	)

});
