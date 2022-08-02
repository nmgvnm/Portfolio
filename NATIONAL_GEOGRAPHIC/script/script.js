const toggleBtn = document.querySelector('.drop_menu');
const mobileMenu = document.querySelector('#drop_menu_wrapper');

// 모바일 토글버튼
toggleBtn.addEventListener('click',(e)=>{
  // 토글버튼
  toggleBtn.classList.toggle('closeMenu');
  // 토글메뉴
  mobileMenu.classList.toggle('open');
});

//  main01 숫자 카운팅
const countBox = document.querySelector('.main_01').offsetTop;
const txtBox = document.querySelector('.main_01_txt_box');
const awardBox = document.querySelector('#count1');
const countryBox = document.querySelector('#count2');
const kindBox = document.querySelector('#count3');
const supportBox = document.querySelector('#count4');
 countAw = 0;
 countCt = 0;
 countK = 0;
 countSpp = 0;
 console.log(document.documentElement.scrollTop);
 
 
const countAward = setInterval(function () {
  const ht = document.documentElement.scrollTop;
  if (ht > 200) {
    if (countAw == 1000) {
    clearInterval(countAward);
    return false;
    }
    countAw += 20;
    awardBox.innerHTML = new Intl.NumberFormat().format(countAw)+`+`;
  }
 }, 30); 

const countCountry = setInterval(() => {
  const ht = document.documentElement.scrollTop;
  if (ht > 200) {
  if (countCt ==28) {
    clearInterval(countCountry);
    return false;
  }
  countCt += 1;
  countryBox.innerHTML = new Intl.NumberFormat().format(countCt);
}
}, 40);

const countKind = setInterval(() => {
  const ht = document.documentElement.scrollTop;
  if (ht > 200){
  if (countK == 700) {
    clearInterval(countKind);
    return false;
  }
  countK += 20;
  kindBox.innerHTML = new Intl.NumberFormat().format(countK) + `+`;
}
}, 40);

const countSupport = setInterval(() => {
  const ht = document.documentElement.scrollTop;
  if (ht > 200) {
  if (countSpp == 27) {
    clearInterval(countSupport);
    return false;
  }
  countSpp += 1;
  supportBox.innerHTML = new Intl.NumberFormat().format(countSpp) + `%`;
}
}, 40);
