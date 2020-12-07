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
        sectionProjects.classList.remove('overflow');
        modalCard.classList.remove('modal-card--active');
        modalImg.classList.remove('modal-img--active');
        body.classList.remove('hidden');
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

const dotBtns = () => {
  radioBtns.forEach((selected) => {
    if(slideImg === 0 && selected.id === 'dot1' || slideImg === 1 && selected.id === 'dot2' ||
    slideImg === 2 && selected.id === 'dot3' || slideImg === 3 && selected.id === 'dot4' ||
    slideImg === 4 && selected.id === 'dot5') {
      selected.classList.add('button-on');
    } else {
      selected.classList.remove('button-on');
    }
  });
} 

const nextSlide = () => {
  sliderImg.style.display = 'block';
  if (slideImg < (imgItems.length - 1)) {
    slideImg++;
    dotBtns();
  } else {
    slideImg = 0;
    dotBtns();
  }
  sliderImg.src = `${imgItems[slideImg]}`;
}

const prevSlide = () => {
  if (slideImg > 0) {
    slideImg--;
    dotBtns();
  } else {
    slideImg = imgItems.length - 1;
    dotBtns();
  }
  sliderImg.src = `${imgItems[slideImg]}`;  
}

radioBtns.forEach((radioSelected) => {
  radioBtns[1].classList.add('button-on');
  radioSelected.addEventListener('click', function() {
    dotsChange(radioSelected);
      if (radioSelected.classList.value === 'button-on' || radioSelected.classList.value !== 'button-on') {
      for (let radioSelected of radioBtns) {
        radioSelected.classList.remove('button-on');
      }
      radioSelected.classList.add('button-on');
    } else {
      false;
    }
  });
});

const dotsChange = (selected) => {
  let dotId = selected.id;
  switch(dotId) {
    case 'dot1':
      sliderImg.src = `${imgItems[0]}`;
      break;
    case 'dot2':
      sliderImg.src = `${imgItems[1]}`;  
      break;
    case 'dot3':
      sliderImg.src = `${imgItems[2]}`;  
      break;
    case 'dot4':
      sliderImg.src = `${imgItems[3]}`;  
      break;
    case 'dot5':
      sliderImg.src = `${imgItems[4]}`;  
      break;
    default:
      sliderImg.src = `${imgItems[slideImg[1]]}`;  
  }
}

nextSlide();
btnHeaderNextSlide.addEventListener('click', nextSlide);
btnHeaderPrevSlide.addEventListener('click', prevSlide);

// Card projects card
const cardBtns = document.querySelectorAll('.btn-item');
const allCards = document.querySelectorAll('.card-items');

for (let allBtns of cardBtns) {
  allBtns.addEventListener('click', (e) => {
    e.preventDefault();
    if (allBtns.classList.value === 'btn-item--active' || allBtns.classList.value !== 'btn-item--active') {
      for (let allBtns of cardBtns) {
        allBtns.classList.remove('btn-item--active');
      }
      allBtns.classList.add('btn-item--active');
      showCards(allBtns);
    } else {
      false;
    }
  });
}

const showCards = (allBtns) => {
  let btnId = allBtns.id;
  for (let card of allCards) {
    let cardId = card.getAttribute('data-id');
    switch(btnId) {
      case 'all': 
        card.classList.remove('card-items--hidden');
        break;
      case 'web': 
      card.classList.remove('card-items--hidden');
        if(cardId !== 'web') {
          card.classList.add('card-items--hidden');
        }
        break;
      case 'mobile': 
      card.classList.remove('card-items--hidden');
        if(cardId !== 'mobile') {
          card.classList.add('card-items--hidden');
        }
        break;
      case 'illustration': 
      card.classList.remove('card-items--hidden');
        if(cardId !== 'illustration') {
          card.classList.add('card-items--hidden');
        }
        break;
      case 'photography': 
      card.classList.remove('card-items--hidden');
        if(cardId !== 'photography') {
          card.classList.add('card-items--hidden');
        }
        break;
      default: 
        card.classList.remove('card-items--hidden');
    }
  }
}

// scale lupa open 
const projectsImg = [
  './css/img/features/f1.png',
  './css/img/features/f2.png',
  './css/img/features/f3.png',
  './css/img/features/f4.png',
  './css/img/features/f5.png',
  './css/img/features/f6.png',
];

const sectionProjects = document.querySelector('.projects');
const modalCard = document.querySelector('.modal-card');
const modalImg = document.querySelector('.modal-img');
const lupaElem = document.querySelectorAll('.lupa');
const body = document.querySelector('#body');

let selectedImg = 0;

const scaleAnimationCard = (i) => {
  selectedImg = i;
  sectionProjects.classList.add('overflow');
  modalCard.classList.add('modal-card--active');
  modalImg.src = `${projectsImg[selectedImg]}`;
  modalImg.classList.add('modal-img--active');
  body.classList.add('hidden');
}

lupaElem.forEach((lupa, i) => {
  lupa.addEventListener('click', (e) => {
    e.preventDefault();
    scaleAnimationCard(i);
  });
});

modalCard.addEventListener('click', (e) => {
  e.preventDefault();
  sectionProjects.classList.remove('overflow');
  modalCard.classList.remove('modal-card--active');
  modalImg.classList.remove('modal-img--active');
  body.classList.remove('hidden');
});

sectionProjects.addEventListener('click', (e) => {
  target = e.target;
  if (target === sectionProjects || target === modalCard) {
    sectionProjects.classList.remove('overflow');
    modalCard.classList.remove('modal-card--active');
    modalImg.classList.remove('modal-img--active');
    body.classList.remove('hidden');
  }
});

// video presentation play
const videoPlay = document.querySelector('.btn-icon-play');
const videoOpen = document.querySelector('.video-overlay');
const videoClose = document.querySelector('.video-close');
const videoPlayer = document.querySelector('.video-player');

videoPlay.addEventListener('click', (e) => {
  e.preventDefault();
  videoOpen.classList.add('video-overlay--active');
  videoPlayer.play();
});

videoClose.addEventListener('click', (e) => {
  e.preventDefault();
  videoOpen.classList.remove('video-overlay--active');
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

// progress counter for numbers when scrolling.
const counter = document.querySelectorAll('.counter');
const counterNumbers = (() => {
  let limit = 0; 
  window.addEventListener('scroll', () => {  
    if ( limit === counter.length ) return;

    for(let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; 
      let win = window.innerHeight - 40; 
      if ( pos < win && counter[i].dataset.stop === '0' ) {
        counter[i].dataset.stop = 1; 
        let x = 0;
        limit++; 
        let int = setInterval(() => {
          x = x + Math.ceil( counter[i].dataset.to / 50 ); 
          counter[i].innerText = x;
          if( x > counter[i].dataset.to ) {
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
})();

// carousel 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 60,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.right-posts',
    prevEl: '.left-posts',
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 60,
      slidesPerGroup: 3,
    }
  }
});
