const toggleBtn = document.querySelector('.drop_menu');
const mobileMenu = document.querySelector('#drop_menu_wrapper');

// 모바일 토글버튼
toggleBtn.addEventListener('click',(e)=>{
  // 토글버튼
  toggleBtn.classList.toggle('closeMenu');
  // 토글메뉴
  mobileMenu.classList.toggle('open');
});