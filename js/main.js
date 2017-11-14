$('.hamburger,.hamburger__item').click(function(){
  $('.hamburger').toggleClass('hamburger--active');
  $('.hamburger__menu').toggleClass('hamburger__menu--active');
})

$(window).scroll(function(){
  $('.hamburger').removeClass('hamburger--active');
  $('.hamburger__menu').removeClass('hamburger__menu--active');

  // window.location = '#section1';
})