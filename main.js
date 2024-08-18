// effects
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: '.scroll'
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

gsap.from('section:nth-of-type(3) *', {
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

// track sections
const content = document.querySelector('.scroll');
const circles = document.querySelectorAll('.circle');

function getCurrentSection() {
  const sections = gsap.utils.toArray('.scroll section'); // Get all the sections on the page
  const currentPosition = content.scrollTop; // Get the current scroll position

  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Get the top position of each section
    const sectionHeight = section.offsetHeight; // Get the height of each section
    const sectionBottom = sectionTop + sectionHeight; // Calculate the bottom position of each section
    // console.log(currentPosition, sectionTop + "-" + sectionBottom)

    if (currentPosition >= sectionTop-1 && currentPosition < sectionBottom) {
      currentSection = section;
    }
  });

  return currentSection;
}

content.addEventListener('scroll', () => {
  const currentSection = getCurrentSection();
  // console.log(currentSection); // Print the ID of the current section

  if (currentSection.id == 'section-intro') {
    circles[0].style.backgroundColor = '#000';
    circles[1].style.backgroundColor = 'transparent';
    circles[2].style.backgroundColor = 'transparent';
    circles[3].style.backgroundColor = 'transparent';

  } else if (currentSection.id == 'section-mda') {
    circles[0].style.backgroundColor = 'transparent';
    circles[1].style.backgroundColor = '#000';
    circles[2].style.backgroundColor = 'transparent';
    circles[3].style.backgroundColor = 'transparent';

  } else if (currentSection.id == 'section-ishallpass') {
    circles[0].style.backgroundColor = 'transparent';
    circles[1].style.backgroundColor = 'transparent';
    circles[2].style.backgroundColor = '#000';
    circles[3].style.backgroundColor = 'transparent';

  } else if (currentSection.id == 'section-future') {
    circles[0].style.backgroundColor = 'transparent';
    circles[1].style.backgroundColor = 'transparent';
    circles[2].style.backgroundColor = 'transparent';
    circles[3].style.backgroundColor = '#000';
  }
});


// preloader
const buttonContact = document.getElementById('click-contact');

const preloaderTl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

function delayToLink(URL) {
    setTimeout(() => {
        window.location.href = URL;
    }, 2500)
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