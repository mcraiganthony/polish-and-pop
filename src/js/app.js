$(document).ready(function() {


	// Hero
	$(window).scroll(function(){
		if($(window).width() > 1260) {
			windowScroll = $(window).scrollTop();
			contentOpacity = 1 - (windowScroll / ($('.js-hero--home').offset().top+$('.js-hero--home').height()));
			$('.js-hero__headline').css('transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
			$('.js-hero__headline').css('-webkit-transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
			$('.js-hero__headline').css('opacity',contentOpacity.toFixed(2));
		}
	});

	// Instantiate some stuff on larger screens
	if($(window).width() > 1260) {
		$('[data-toggle="tooltip"]').tooltip();
		window.sr = new scrollReveal();
	}


});