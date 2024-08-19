// effects
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart reverse restart reverse",
    scroller: '.scroll',
    start: '-10% top',
    end: () => `+=${document.querySelector('.scroll').offsetHeight}`,
});

gsap.set('section:nth-of-type(1) *', {
    autoAlpha: 1,
  })
  
gsap.from('section:nth-of-type(1) *', {
    scrollTrigger: 'section:nth-of-type(1)',
    opacity: 0,
    duration: 1,
    y: 100,
})

gsap.from(['section:nth-of-type(2) .talk h2', 'section:nth-of-type(2) .talk p'], {
    scrollTrigger: 'section:nth-of-type(2)',
    opacity: 0,
    duration: 1,
    y: 100,
})

gsap.from('section:nth-of-type(2) .card', {
    scrollTrigger: 'section:nth-of-type(2)',
    opacity: 0,
    duration: 1,
    y: 100,
}, '<')

gsap.from(['section:nth-of-type(3) .talk p', 'section:nth-of-type(3) .talk a'], {
    scrollTrigger: 'section:nth-of-type(3)',
    opacity: 0,
    duration: 1,
    y: 100,
})

gsap.from('section:nth-of-type(4) *', {
    scrollTrigger: 'section:nth-of-type(4)',
    opacity: 0,
    duration: 1,
    y: 100,
})

const circles = gsap.utils.toArray('.circle');

circles.forEach((circle, index) => {
    gsap.to(circle, {
      scrollTrigger: `section:nth-of-type(${index + 1})`,
      backgroundColor: '#000',
      duration: .3,
})
})

// preloader
const buttonContact = document.getElementById('click-contact');

const preloaderTl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

function delayToLink(URL) {
    setTimeout(() => {
        window.location.href = URL;
    }, 2000)
}

buttonContact.addEventListener('click', () => {
    gsap.set('.preload', {
        y: '-100%',
        backgroundColor: getComputedStyle(document.body).getPropertyValue('--yellow-first'),
    })

    preloaderTl
        .to('.preload', {
            y: '0%',
            duration: 2,
            display: 'block',
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
        })

    delayToLink('https://tranthanhhthao.github.io/swinburne-contact/')

});
