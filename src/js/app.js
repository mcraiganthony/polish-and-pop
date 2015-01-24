$(document).ready(function() {

  // Hero text animations

  $(window).scroll(function(){
    if($(window).width() > 1260) {
      windowScroll = $(window).scrollTop();
      contentOpacity = 1 - (windowScroll / ($('.js-hero--home').offset().top+$('.js-hero--home').height()));
      $('.js-hero__headline').css('transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
      $('.js-hero__headline').css('-webkit-transform','translateY('+Math.floor(windowScroll*0.16)+'px)');
      $('.js-hero__headline').css('opacity',contentOpacity.toFixed(2));
    }
  });

  // On larger screens, run some extra js

  if($(window).width() > 1260) {
    // Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // See: https://github.com/julianlloyd/scrollReveal.js
    window.sr = new scrollReveal();
  }

  // Initialize smooth scroll

  smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic'
  });

});