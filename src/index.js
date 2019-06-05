import './scss/styles.scss'

const menu = document.querySelector('.menu')

// const catolog = document.querySelector('.catalog')
const events = document.querySelector('.events')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')

const menuLogo = document.querySelector('.menu__logo')
const menuTitle = document.querySelector('.menu__title')
const menuLinks = document.querySelectorAll('.menu__link')
// const catalogSection = document.querySelectorAll('.catalog__section')
const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

//scroll handlers
window.addEventListener("scroll", () => {
   if (window.scrollY >= 300) {
      menu.style.fontSize = "1.4rem"
      menuLogo.style.fontSize = "1.8rem"
      menuTitle.style.fontSize = "1.2rem"
      // catalogSection.forEach(section => section.style.left = 0)
   } else {
      menu.style.fontSize = "2rem"
      menuLogo.style.fontSize = "2.3rem"
      menuTitle.style.fontSize = "1.4rem"
   }

   if (window.scrollY < catalog.offsetTop) {
      menuLinks[0].classList.add('menu__link--active')
   }

   menuLinks.forEach(navbarLink => navbarLink.classList.remove('menu__link--active'))

   if (window.scrollY < catalog.offsetTop) {
      menuLinks[0].classList.add('menu__link--active')
   }

   if (window.scrollY >= catalog.offsetTop && window.scrollY < events.offsetTop) {
      menuLinks[1].classList.add('menu__link--active')
   }
   if (window.scrollY >= events.offsetTop && window.scrollY < about.offsetTop) {
      menuLinks[2].classList.add('menu__link--active')
   }
   if (window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - (contact.offsetTop / 10)) {
      menuLinks[3].classList.add('menu__link--active')
   }
   if (window.scrollY >= contact.offsetTop - (contact.offsetTop / 10)) {
      menuLinks[4].classList.add('menu__link--active')
   }
}, {
   passive: true
})

//hamburger and hidden menu handlers
hamburger.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
   hamburger.classList.toggle('menu__burger--active')
}, {
   passive: true
})

hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
}))