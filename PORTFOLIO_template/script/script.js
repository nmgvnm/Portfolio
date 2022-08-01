const topBtn = document.querySelector('.top_btn');
const skill = document.querySelector('.bout_skill_wrapper');

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
})
