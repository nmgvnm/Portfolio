/* window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $("").length;
$html.animate({scrollTop:0},10);



$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
}); */

const a =100;
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

  // bgColor 변경
  $('.bg li').removeClass('bgColor');
  $('.bg li').eq(num).addClass ('bgColor')

  // 메뉴 이미지 변경
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

  // 메뉴 이미지 변경
  $('.img_box_wrapper .img_box').removeClass('move');
  $('.img_box_wrapper .img_box').eq(num).addClass('move')
}

let auto = setInterval(slide, 4000);


// top버튼
const topBtn = document.querySelector('.top_button');

topBtn.addEventListener('click', e => {
  e.preventDefault();
  scrollTo({
    top:0,
    behavior: "smooth",
  });
});

addEventListener('scroll', () => {
  let ht = document.documentElement.scrollTop;
  if (ht > 2000) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});