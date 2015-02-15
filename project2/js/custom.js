$(document).ready(function(){
  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button type="button" data-role="none" class="slick-prev button round" aria-label="previous">&#10094;</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next button round" aria-label="next">&#10095;</button>',
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });

});




