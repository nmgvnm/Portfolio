const a = 300;
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