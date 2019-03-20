$(document).ready(function() {
  // on documument scroll change the nav bar to fixed

  $(window).on("scroll", function() {
    let pagePosition = window.scrollY > 120;
    if (pagePosition) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });

  // team section
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});
