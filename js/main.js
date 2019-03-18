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
});
