// smooth scrolling by anchors
const headerBlock = document.querySelector('.header');
const sectionElem = document.getElementsByTagName('section');
const overflowFoter = document.querySelector('.footer');
const navMenu = document.querySelector('.navigation');
const anchors = document.querySelectorAll('a.navigation-link');
const burgerMenu = document.querySelector('#burgerToogle');

for (let anchor of anchors) {
  const blockID = anchor.getAttribute('href');
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    if (anchor.classList.value === 'nav-link--active' || anchor.classList.value !== 'nav-link--active') {
      for (let anchor of anchors) {
        anchor.classList.remove('nav-link--active');
      }
      anchor.classList.add('nav-link--active');
    } else {
      false;
    }
  });
};

//burger menu
burgerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.toggle('nav-menu--active');
  headerBlock.classList.toggle('overflow');
  overflowFoter.classList.toggle('overflow'); 

  for (let classListName of sectionElem ) {
    const sectionElemValue = classListName.classList.value;
    sectionElemValue !== 'overflow' ? classListName.classList.toggle('overflow') : false;
  }
});

//header slider 
const sliderImg = document.querySelector('#sliderImg');
const btnHeaderPrevSlide = document.querySelector('.left');
const btnHeaderNextSlide = document.querySelector('.right');
const radioWrapp = document.querySelector('.radio-wrapper');
const radioBtns = document.querySelectorAll('.radio-off');

let slideImg = 0;

const imgItems = [
  './css/img/features/f6.png',
  './css/img/Logo/bg-header.png',
  './css/img/posts/photo-post1.png',
  './css/img/posts/photo-post2.png',
  './css/img/video/img-video.png'
];

const nextSlide = () => {
  sliderImg.style.display = 'block';
    radioBtns[1].classList.add('button-on');
  if (slideImg < (imgItems.length - 1)) {
    slideImg++;
  } else {
    slideImg = 0;
  }
  sliderImg.src = `${imgItems[slideImg]}`;

  // const currDot = [slideImg];
  // console.log(currDot);
}

const prevSlide = () => {
  if (slideImg > 0) {
    slideImg--;
  } else {
    slideImg = imgItems.length - 1;
  }
  sliderImg.src = `${imgItems[slideImg]}`;  
}

radioBtns.forEach((radioSelected) => {
  radioSelected.addEventListener('click',function() {
     if (radioSelected.classList.value === 'button-on' || radioSelected.classList.value !== 'button-on') {
      for (let radioSelected of radioBtns) {
        radioSelected.classList.remove('button-on');
      }
      radioSelected.classList.add('button-on');
    } else {
      false
    }
  });
});

nextSlide();
btnHeaderNextSlide.addEventListener('click', nextSlide);
btnHeaderPrevSlide.addEventListener('click', prevSlide);