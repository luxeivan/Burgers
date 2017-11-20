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
      
      elem.toggleClass('menu__item--active').siblings().removeClass('menu__item--active');
      if(elem.hasClass('menu__item--active')){
        elem.find('.menu__description-area').css('width',width);
        setTimeout(function(){
          elem.find('.menu__description-text').addClass('menu__description-text--active');
        } ,500);
      } else{
        elem.find('.menu__description-text').removeClass('menu__description-text--active');
        setTimeout(function(){
          elem.find('.menu__description-area').css('width','0');
        } ,500);
      }
      elem.siblings().find('.menu__description-text').removeClass('menu__description-text--active');
      elem.siblings().find('.menu__description-area').css('width','0');
  }); 
});

//One page scroll
$(function(){
  const maincontent = $('.maincontent');
  const sections = $('.section');
  const scroll = function(sectionid){
    let position = (sectionid * -100) + '%';
    maincontent.css('transform',`translateY(${position})`)
  };
  let inScroll = false;

  $('.wrapper').on('wheel',function(e){
    let sectionActive = sections.filter('.activeSection');
    let nextSection = sectionActive.next();
    let prevSection = sectionActive.prev();
    let delta = e.originalEvent.deltaY;
    if (inScroll){
      return
    }else{
      inScroll=true
    if (delta>0 && nextSection.length){
      scroll(nextSection.index());
      nextSection.addClass('activeSection').siblings().removeClass('activeSection');
    }
     if(delta<0 && prevSection.length){
      scroll(prevSection.index());
      prevSection.addClass('activeSection').siblings().removeClass('activeSection');
    }
    setTimeout(function(){
      inScroll=false;
    } ,300);
    }

  });
});
