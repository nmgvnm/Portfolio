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

$('.slide_item').eq(0).addClass('active');

$('.menu_buttons li').on('click', function () {
  let num = $(this).index();

  $('.menu_buttons li #bar').animate({
    marginTop : 65 * num + 'px'
  }, 300)

  // 메뉴 타이틀 영어
  $('.menu_buttons li').removeClass('select');
  $(this).addClass ('select')

  // active 활성화
  $('.slide_item').removeClass('active');
  $('.slide_item').eq(num).addClass('active')

  // bgColor 변경
  $('.bg li').removeClass('bgColor');
  $('.bg li').eq(num).addClass ('bgColor')
});


 let num = 0;
const slide = () => {
  num = (num + 1) % 4;
  $('.menu_buttons li #bar').animate({
    marginTop : 65 * num + 'px'
  }, 300)

  // 메뉴 타이틀 영어
  $('.menu_buttons li').eq(num).addClass('select').siblings().removeClass('select');

  // active 활성화
  $('.slide_item').removeClass('active');
  $('.slide_item').eq(num).addClass('active')

  // bgColor 변경
  $('.bg li').removeClass('bgColor');
  $('.bg li').eq(num).addClass ('bgColor')
}
let auto = setInterval(slide, 5000);



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