// smooth scrolling by anchors
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
// const animationTime = 300;
// const framesCount = 20;

// anchors.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

//         let scroller = setInterval(() => {
//             let scrollBy = coordY / framesCount;

//             if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//                 window.scrollBy(0, scrollBy);
//             } else {
//                 window.scrollTo(0, coordY);
//                 clearInterval(scroller);
//             }
//         }, animationTime / framesCount);
//     });
// });

const anchors = document.querySelectorAll('a.navigation-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};