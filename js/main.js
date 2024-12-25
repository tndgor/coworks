
  const slider = tns({
    container: '.slider',
    items: 2.7,
    mouseDrag: true,
    gutter: 10,
    speed: 400,
    // loop: false, 

    autoWidth: true,
    lazyload: true,
    swipeAngle: false,

    controlsContainer: '.locations__controls',
    nav: false,
  });

const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

prevMobile.addEventListener('click', function(){
    slider.goTo('prev');
})

nextMobile.addEventListener('click', function(){
    slider.goTo('next');
})
