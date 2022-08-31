$('.nav_wrapper .menu').on('click', () => {
  $('.nav_wrapper .menu').toggleClass('click');
  $('.slide_menu').toggleClass('active');
})

// 스크롤위치
/* $(window).scroll(function () {
  var height = $(document).scrollTop();
  log(height);
  
});

function log(str){
$('#log').text(str);
} */

const nav = document.querySelector('.nav_wrapper');

addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    nav.classList.add('down')
  } else if (window.scrollY) {
    nav.classList.remove('down')
  }
})


