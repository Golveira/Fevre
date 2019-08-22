(function($) {
  'use strict';

  // toggle menu button
  $('.header__toggle-icon').click(function(e) {
    $('.header__nav').toggle();
  });

  // Owl Carousel banner
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 1000,
      dotsSpeed: 1000
    });
  });
})(jQuery);
