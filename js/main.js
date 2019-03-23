$(document).ready(function() {
  // on documument scroll change the nav bar to fixed
  AOS.init({
    duration: 1300
  });

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
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  // smooth scroll
  let navElements = $(".scroll");
  navElements.on("click", function(e) {
    e.preventDefault();
    let target = $(this.hash).offset().top - 80;
    console.log(target);
    $("body, html").animate(
      {
        scrollTop: target
      },
      1300
    );
  });

  // add active class to nav elements
  $(window).scroll(function() {
    let scrollTop = $(this).scrollTop();

    navElements.each(function(e) {
      let sectionOffSet = $(this.hash).offset().top - 80;

      if (sectionOffSet <= scrollTop) {
        $(this).addClass("active");
        $(this)
          .parent()
          .siblings()
          .children()
          .removeClass("active");
      }
    });
  });

  $(".bars").click(function() {
    let navList = $(".nav-list").css("display");
    navList == "block" ? hideMenu() : showMenu();
  });

  let bars = $(".bars").css("display");
  if (bars == "block") {
    console.log("block");
    $(".nav-list").click(function() {
      hideMenu();
    });
  }

  function showMenu() {
    $(".nav-list").css("display", "block");
    $("nav").css({
      "background-color": "#0e1015",
      height: "220px"
    });
    $(".bars").css("transform", "rotate(90deg)");
  }

  function hideMenu() {
    $(".nav-list").css("display", "none");
    $("nav").css({
      "background-color": "",
      height: "80px"
    });
    $(".bars").css("transform", "rotate(0)");
  }
});
