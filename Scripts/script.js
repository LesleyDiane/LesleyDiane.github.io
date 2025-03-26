// WebP fallback for Safari 14

const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
document.addEventListener("DOMContentLoaded", function(event) { // Load this script after everything else (document is ready)
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$$('img').forEach(ele => {
			src = ele.src;
			if(src.includes('webp')) {
				src = src.replace('.webp', '.jpg');
				ele.src = src;
			}
		});
	}
});

/****** ============================================= ******/
/******                     HEADER                    ******/
/****** ============================================= ******/

const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#logo');
let navOpen = false;
hamburger.addEventListener('click', ()=> {
  if(!navOpen) {
    hamburger.classList.add('open');
    navbar.classList.add('open');
    logo.classList.add('open');

    navOpen = true;
  }
  else {
    hamburger.classList.remove('open');
    navbar.classList.remove('open');
    logo.classList.remove('open');

    navOpen = false;
  }
});