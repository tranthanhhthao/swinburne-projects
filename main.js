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

gsap.from(['section:nth-of-type(2) p', 'section:nth-of-type(2) .search-tool', 'section:nth-of-type(2) .asm'], {
    scrollTrigger: 'section:nth-of-type(2)',
    opacity: 0,
    duration: 1,
    y: 100,
})

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

// button magneto
const btnWrapper = document.querySelector('.button-wrapper:nth-of-type(1)');

// mouse move 
function activateMagneto(event, wrapper, element) {
    let boundBox = element.getBoundingClientRect();
    let boundBoxWrapper = wrapper.getBoundingClientRect();
    const magnetoStrength = 55;

    const newX = ((event.clientX - boundBoxWrapper.left)/(boundBoxWrapper.width) - 0.5)
    const newY = ((event.clientY - boundBoxWrapper.top)/(boundBoxWrapper.height) - 0.5)                    

    gsap.to(element, {
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        duration: 0.2,
        ease: 'power1.inOut'
    });   
                   
}

// mouse leave 
function resetMagneto(event, wrapper, element) {
    gsap.to(element, {
        x: 0,
        y: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.3)'
    });
}

// media query
let mm = gsap.matchMedia();

mm.add({
    isMobile: '(max-width: 768px)',
    isDesktop: '(min-width: 769px)',
}, (context) => {

    let { isMobile, isDesktop } = context.conditions;

    if (isDesktop) {
        // add event listener
        btnWrapper.addEventListener('mousemove', (event) => {
            activateMagneto(event, btnWrapper, btnWrapper.querySelector('.nav'));
        })
        btnWrapper.addEventListener('mouseleave', (event) => {
            resetMagneto(event, btnWrapper, btnWrapper.querySelector('.nav'));
        })
    }
})

// search tool
import Classroom2024 from './Classroom.js';

const searchClassroom = document.getElementById('classroom');
const searchResult = document.getElementById('asm');
const years = gsap.utils.toArray('.year');

const openNewTabSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#202124"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>'  

const classOf2024 = ['Global Media Industries', 'Marketing and Consumer Experience', 'Content Creator Lab', 'Intro to Media Studies', 'Innovation Cultures'];
const classOf2025 = [];
const classOf2026 = [];

function displayClassOptions(year) {
    if (year === '2024') {
        for (const x of classOf2024) {
            searchClassroom.options[searchClassroom.options.length] = new Option(x, x);
        }
    } else if (year === '2025') {
        for (const x of classOf2025) {
            searchClassroom.options[searchClassroom.options.length] = new Option(x, x);
        }
    } else if (year === '2026') {
        for (const x of classOf2026) {
            searchClassroom.options[searchClassroom.options.length] = new Option(x, x);
        }
    }
    displayAsm();
}

function displayAsm() {
    searchResult.innerHTML = '';
    let isClassroom = false
    for (const classroom in Classroom2024) {
        if(classroom === searchClassroom.value) {
            isClassroom = true;
            for (const assignment in Classroom2024[classroom]) {
                const a = document.createElement('a');
                a.href = Classroom2024[classroom][assignment]['link'];
                a.target = '_blank';
                a.textContent = Classroom2024[classroom][assignment]['type'];
                searchResult.appendChild(a);
                a.innerHTML += openNewTabSvg;
            }
        } 
    }

    if (!isClassroom) {
        searchResult.textContent = 'Oops, no work shown.';
    }
}

displayClassOptions(years[0].textContent);
displayAsm();

years.forEach((year, index) => {
    year.addEventListener('click', () => {
        console.log(year.textContent);

        gsap.to(year, {
            backgroundColor: getComputedStyle(document.body).getPropertyValue('--black-main'),
            color: getComputedStyle(document.body).getPropertyValue('--blue-bg'),
        })

        gsap.to(years.filter((y, i) => i !== index), {
            backgroundColor: getComputedStyle(document.body).getPropertyValue('--blue-bg'),
            color: getComputedStyle(document.body).getPropertyValue('--black-main'),
        })

        if (year.textContent === '2024') {
            searchClassroom.innerHTML = '';
            displayClassOptions(year.textContent);
        } else if (year.textContent === '2025') {
            searchClassroom.innerHTML = '';
            displayClassOptions(year.textContent);
        } else if (year.textContent === '2026') {
            searchClassroom.innerHTML = '';
            displayClassOptions(year.textContent);
        }
    })
})

searchClassroom.addEventListener('change', () => {
    displayAsm();

})    