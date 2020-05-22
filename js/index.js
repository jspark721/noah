// ANIMATION
const header = document.querySelector('#header');
const banner = document.querySelector('#bannerBg');
const bannerAddition = document.querySelector('#bannerBgAddition');
const h1Line = document.querySelectorAll('.h-line span');
const contentP = document.querySelector('.content-inner p');
const mainButton = document.querySelector('.content-inner a');
const imageContainer = document.querySelector('.image-container');
const sliderItem = document.querySelector('.slider-item');
const sliderCaption = document.querySelector('.slider-caption');
const arrow = document.querySelector('.arrow');
const bannerTimeline = gsap.timeline();

bannerTimeline
  .from([bannerAddition, banner], {
    duration: 2,
    width: 0,
    skewX: 4,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.2,
    },
  })
  .to(banner, {
    width: '50%',
    ease: 'power3.inOut',
    duration: 1.5,
  })
  .from(header, {
    delay: -0.5,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.inOut',
  })
  .from(h1Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  })
  .from([contentP, mainButton], {
    delay: -0.6,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  })
  .from([imageContainer, sliderCaption, arrow], {
    delay: -0.4,
    y: -40,
    duration: 1,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
      amount: 0.4,
    },
  });

//SCROLLMAGIC

// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//   triggerElement: '.line',
//   triggerHook: 0,
//   reverse: false,
// })
//   // .addIndicators()
//   .setTween(featuresTimeline)
//   .addTo(controller);

// MENU NAVIGATION
const menuIcon = document.querySelector('.menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('close');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('close');
});
