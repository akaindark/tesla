$(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: 3000
  });

  $('.header-btn').on('click', function () {
    $('.menu').addClass('active');
  });

  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });

});