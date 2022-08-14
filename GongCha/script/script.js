const a = 250;
const b = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of b) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + a) {
        element.classList.add('show')
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


// 클릭할 때 변화
// menu title 선택
$('.menu_list li').on('click', function () {
  let num = $(this).index();
  // 메뉴 선택 bar 이동
  $('.menu_list li #bar').animate({
    marginTop : 65 * num + 'px'
  }, 300)
  // 메뉴 타이틀 한글
  $('.menu_kor #orignal').animate({
    marginTop : -57 * num + 'px' 
  })
  // 메뉴 타이틀 영어
  $('.menu_list li').removeClass('select');
  $(this).addClass ('select')

  // 메뉴 설명 멘트 
  $('.text_inner .box').removeClass('style');
  $('.text_inner .box').eq(num).addClass ('style')

  $('.bg li').removeClass('bgColor');
  $('.bg li').eq(num).addClass ('bgColor')

  $('.img_box_wrapper .img_box').removeClass('move');
  $('.img_box_wrapper .img_box').eq(num).addClass('move')
})


// 자동슬라이드
let num = 0;
const slide = () => {
  num = (num + 1) % 4;

  $('.menu_list li #bar').animate({
    marginTop : 65 * num + 'px'
  }, 300)
  // 메뉴 타이틀 한글
  $('.menu_kor #orignal').animate({
    marginTop : -57 * num + 'px' 
  })
  // 메뉴 타이틀 영어
  $('.menu_list li').eq(num).addClass('select').siblings().removeClass('select');

  // 메뉴 설명 멘트
  $('.text_inner .box').removeClass('style');
  $('.text_inner .box').eq(num).addClass ('style')

  // background color
  $('.bg li').removeClass('bgColor');
  $('.bg li').eq(num).addClass ('bgColor')
}

// let auto = setInterval(slide, 4000);