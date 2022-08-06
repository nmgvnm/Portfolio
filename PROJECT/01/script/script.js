
$('#menuBtn').on('click', (e) => {
  $('#menu_box').slideToggle();
});

// $('#menuBtn').on('click', (e) => {
//   $('#menuBtn').toggleClass('close');
// });

const menuBtn = document.querySelector('#menuBtn');
const menuBox = document.querySelector('#menu_box');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // 토글 버튼
  menuBtn.classList.toggle('close');
  // 토글 메뉴
  // menuBox.classList.toggle('menu');
})
