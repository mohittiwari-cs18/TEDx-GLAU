
$(document).ready(function () {
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(document).ready(function () {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items: 4,
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsTabletSmall: [985, 2],
      itemsMobile: [479, 1],
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  })


  new WOW({ mobile: false }).init();

});

