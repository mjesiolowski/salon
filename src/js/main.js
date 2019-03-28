const navbar = document.querySelector('.menu')
const catolog = document.querySelector('.catalog')
const section = document.querySelector('.section')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const navbarLinks = document.querySelectorAll('.menu__link')
const catalogSection = document.querySelectorAll('.catalog__section')
const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')


window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      navbar.style.fontSize = "1.4rem"
      catalogSection.forEach(section => section.style.left = 0)
   } else navbar.style.fontSize = "2rem"

   navbarLinks.forEach(navbarLink => navbarLink.classList.remove('menu__link--active'))
   if (window.scrollY < catalog.offsetTop) {
      navbarLinks[0].classList.add('menu__link--active')
   }
   if (window.scrollY >= catalog.offsetTop && window.scrollY < services.offsetTop) {
      navbarLinks[1].classList.add('menu__link--active')
   }
   if (window.scrollY >= services.offsetTop && window.scrollY < about.offsetTop) {
      navbarLinks[2].classList.add('menu__link--active')
   }
   if (window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - (contact.offsetTop / 10)) {
      navbarLinks[3].classList.add('menu__link--active')
   }
   if (window.scrollY >= contact.offsetTop - (contact.offsetTop / 10)) {
      navbarLinks[4].classList.add('menu__link--active')
   }
})

hamburger.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
   hamburger.classList.toggle('menu__burger--active')
})

hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
}))