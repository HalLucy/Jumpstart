$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false
  });


  var prev = 0;
  var $window = $(window);
  var nav = $('.navbar');

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();

    if (scrollTop > prev + 50) {

      nav.animate({top: "-52px"},150);
      prev = scrollTop;

    } else if (prev > scrollTop + 50) {

      nav.animate({top: "0"},150);
      prev = scrollTop;

    }

  });

});
