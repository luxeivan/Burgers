//Слайдер
$(function(){
  let elems = $('.akk-burgers__item')
  let kolvo = elems.length;
  let sdvig = 0;
  $('.akk-burgers').css('width',kolvo*100 + '%');
  elems.eq(0).addClass('akk-burgers__item--active');
  let elem = $('.akk-burgers__item--active');

  $('.slide-burger__right').on('click', function(){
    let elem = $('.akk-burgers__item--active');
    if(elem.next().length){
      sdvig = sdvig - (100/kolvo);
      $('.akk-burgers').css('transform',`translateX(${sdvig}%)`);
      elem.next().addClass('akk-burgers__item--active').siblings().removeClass('akk-burgers__item--active');
    }
  });

  $('.slide-burger__left').on('click', function(){
    let elem = $('.akk-burgers__item--active');
    if(elem.prev().length){
      sdvig = sdvig - (-100/kolvo);
      $('.akk-burgers').css('transform',`translateX(${sdvig}%)`);
      elem.prev().addClass('akk-burgers__item--active').siblings().removeClass('akk-burgers__item--active');
    }
  });

});


//Меню
$(function(){
  let flag = true;
  $('.hamburger,.hamburger__item').click(function(){
    $('.hamburger').toggleClass('hamburger--active');
    $('.hamburger__menu').toggleClass('hamburger__menu--active');
    $('.wrapper').toggleClass('wrapper--open-menu');
    if(flag){
      flag = false;
      $('.page-pagination').hide()
    }else{
      flag = true;
      $('.page-pagination').show();
    }
   
  })
});


//Текст кнопки отзывы при Изменении размера окна
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
  const pagination = $('.page-pagination__item');
  const scroll = function(sectionid){
    let position = (sectionid * -100) + '%';
    maincontent.css('transform',`translateY(${position})`)
    sections.eq(sectionid).addClass('activeSection').siblings().removeClass('activeSection');
    pagination.eq(sectionid).children('.page-pagination__link').addClass('page-pagination__link_active');
    pagination.eq(sectionid).siblings().children('.page-pagination__link').removeClass('page-pagination__link_active');
    setTimeout(function(){
      inScroll=false;
    } ,300);
  };
  let inScroll = false;

  $('.wrapper').on('wheel',function(e){
    let sectionActive = sections.filter('.activeSection');
    let nextSection = sectionActive.next();
    let prevSection = sectionActive.prev();
    let delta = e.originalEvent.deltaY;
    
    if (delta>0 && nextSection.length){
      if (inScroll) return
      inScroll=true
      scroll(nextSection.index());
    }
     if(delta<0 && prevSection.length){
      if (inScroll) return
      inScroll=true
      scroll(prevSection.index());
    }
  });

  $('[data-scroll-in]').on('click',function(e){
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-in'));
    if (inScroll) return
    inScroll=true
    scroll(sectionIndex);
  });
});



// Состав
$(function () {
  let width = window.innerWidth;
  $('.akk-burgers__sostav').on('click', function(e){
    if (width<=768){
      const $this = $(e.currentTarget).find('.sostav');
      $this.toggleClass('sostav--active');
    }
  });
  $('.sostav--active').on('click',function(e){
    e.currentTarget.toggleClass('sostav--active');
  });
});

//Карта
$(function () {
  ymaps.ready(init);
  let myMap;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.936143, 30.315055],
      zoom: 12
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myMap.controls.add('zoomControl');

    let description = {
        balloonContent: "Наша всеми любимая бургерная",
        hintContent: "Mr.Burger"
      },
      options = {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.svg',
        iconImageSize: [47, 58],
        iconImageOffset: [-24, -58]
      },
      placemark1 = new ymaps.Placemark([59.977357, 30.313831], description, options);
      placemark2 = new ymaps.Placemark([59.944690, 30.381894], description, options);
      placemark3 = new ymaps.Placemark([59.915397, 30.493131], description, options);
      placemark4 = new ymaps.Placemark([59.890391, 30.315633], description, options);
      myMap.geoObjects.add(placemark1).add(placemark2).add(placemark3).add(placemark4);
  }
});
//Форма
$(function(){
  $('#form').on('submit',submitForm)

  function submitForm(e){
    e.preventDefault();
    let form = $(e.target),
    data = form.serialize(),
    url = form.attr('action');
    let request = $.ajax({
      type:'POST',
      url: url,
      dataType:'HTML',
      data: data
    });
    request.done(function(msg){
      $('.popup').toggleClass('popup--active').find('.popup__text').text('Ваш заказ отправлен');
    })
    request.fail(function(msg,text){
      $('.popup').toggleClass('popup--active').find('.popup__text').text('Ошибка: ' + text);
    })
  }
});
//Popup
$(function () {
  $('.popup__area').on('click', function(){
    $('.popup').toggleClass('popup--active');
  });
});