
// 위로 버튼 동작
const topBtn = document.querySelector('.top_btn');

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
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
  }
});



// top_menu 클릭시 해당 메뉴 좌표
const project = document.querySelector('.project');
const about = document.querySelector('.about');
const contact = document.querySelector('article');
const pjBtn = document.querySelector('.project_btn');
const abBtn = document.querySelector('.about_btn');
const ctBtn = document.querySelector('.contact_btn');

pjBtn.addEventListener('click', e => {
  e.preventDefault();
  scrollTo({
    top:project.offsetTop,
    behavior: "smooth",
  });
});
abBtn.addEventListener('click', e => {
  e.preventDefault();
  scrollTo({
    top:about.offsetTop,
    behavior: "smooth",
  });
});
ctBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(contact);
  scrollTo({
    top:contact.offsetTop,
    behavior: "smooth",
  });
});


// 스크롤시 로고 사이즈 작게 110px -> 70px
const logo = document.querySelector('.logo');

addEventListener('scroll', () => {
  if (scrollY > project.offsetTop) {
    logo.classList.add('down');
  } else if(scrollY <= project.offsetTop) {
    logo.classList.remove('down');
  }
});




