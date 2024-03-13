$(document).on('mouseover','.header__below__menu',function(){
  $('.header__below__subMenu').slideDown(200);
});
  
$(document).on('mouseleave','.header__below__subMenu',function(){
  if(!$(this).hasClass('.header__below__subMenu')){
    $('.header__below__subMenu').slideUp(200);
  }
});
