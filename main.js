// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// horizontal scroll
const slider = document.querySelector('.scroll')
const sections = gsap.utils.toArray(".scroll section")

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 1,
        snap: false,
        end: () => "+=" + slider.offsetWidth
    }
})

gsap.to('.inner', {
  scaleX: 1,
  scrollTrigger: {
      scrub: 0.333333,
  }
})