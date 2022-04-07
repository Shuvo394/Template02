// Fixed Nav
$(function() {
    $(window).scroll(function() {
      var scrolling = $(this).scrollTop();
      if (scrolling > 100) {
        $("nav").addClass("fixed-nav");
        console.log(scrolling);
      }
      else {
        $("nav").removeClass("fixed-nav");
      }
    })
  });

  AOS.init();