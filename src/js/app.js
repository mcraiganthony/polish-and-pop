$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

	// .js-hero__headline reduce opacity when scrolling down
	$(window).scroll(function(){
		if($(window).width() > 1260) {
			windowScroll = $(window).scrollTop();
			contentOpacity = 1 - (windowScroll / ($('.js-hero--home').offset().top+$('.js-hero--home').height()));
			$('.js-hero__headline').css('transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
			$('.js-hero__headline').css('-webkit-transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
			$('.js-hero__headline').css('opacity',contentOpacity.toFixed(2));
		}
	});

});