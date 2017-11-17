$(function(){
  $('.hamburger,.hamburger__item').click(function(){
    $('.hamburger').toggleClass('hamburger--active');
    $('.hamburger__menu').toggleClass('hamburger__menu--active');
    $('.wrapper').toggleClass('wrapper--open-menu');
  })
});
// $(window).scroll(function(){
//   $('.hamburger').removeClass('hamburger--active');
//   $('.hamburger__menu').removeClass('hamburger__menu--active');
// })

//Текст кнопки при Изменении размера окна
$(function(){
  $(window).resize(()=>{
    let width=$(window).width();
    let peopleButton=$('.people__button');
    if(width<=480){
      peopleButton.text('отзыв');
    }else{
      peopleButton.text('подробнее');
    }
  });
});

 //Аккордеон team
$(function(){
  $('.team__item').click(function(e){
    let elem = $(e.currentTarget);
    let height = $(e.currentTarget).find('.team__item-area').outerHeight();
    elem.toggleClass('team__item--active').siblings().removeClass('team__item--active');
    if(elem.hasClass('team__item--active')){
      elem.find('.team__item-hide').css('height',height);
    }else{
      elem.find('.team__item-hide').css('height','0');
    }
    elem.siblings().find('.team__item-hide').css('height','0');
  }); 
});

//Аккордеон menu
$(function(){
  $('.menu__item').click(function(e){
      let elem = $(e.currentTarget);
      let width = function(){
        let width;
        let allwidth = $('.menu').outerWidth();
        if (allwidth>768){
          width = allwidth/100*70-240;
        }else{
          width = allwidth-240;
        }
        return width;
      };
      
      console.log(elem.hasClass('menu__item--active'));
      elem.toggleClass('menu__item--active').siblings().removeClass('menu__item--active');
      if(elem.hasClass('menu__item--active')){
        elem.find('.menu__description-area').css('width',width);
      } else{
        elem.find('.menu__description-area').css('width','0');
      }
      elem.siblings().find('.menu__description-area').css('width','0');
  }); 
});
