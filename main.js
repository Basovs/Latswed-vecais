window.onscroll = function() {changeOnScroll()}

function changeOnScroll() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector('nav').className = 'onScroll'
    // const allA = document.querySelectorAll('nav ul li a')
    // for (let i = 0; i < allA.length; i++) {
    //   allA[i].className = 'changeTextColor'
    // }
  } else {
    document.querySelector('nav').className = ''
    // const allA = document.querySelectorAll('nav ul li a')
    // for (let i = 0; i < allA.length; i++) {
    //   allA[i].className = ''
    // }
  }
}