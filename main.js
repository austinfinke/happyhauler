console.log('boobs > bellybutton');
$(function() {


  lol();
  let fuckit = $('.js--1');
  fuckit.addClass('animated fadeInLeft');
  setTimeout(() => {
    fuckit.removeClass('fadeInLeft');
    fuckit.addClass('animated fadeOutRight');
  }, 1800);




})


function lol() {

  for(let i = 0; i < 25; i++) {
    setTimeout(() => {
      location.reload();
    },3000);
  }


}