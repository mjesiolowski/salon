const navbar = document.querySelector('.menu')
const catolog = document.querySelector('.catalog')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const navbarLinks = document.querySelectorAll('.menu__link')
const catalogSection = document.querySelectorAll('.catalog__section')


window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      navbar.style.fontSize = "1.6rem"
      catalogSection.forEach(section => section.style.left = 0)
   } else navbar.style.fontSize = "2.5rem"

   navbarLinks.forEach(navbarLink => navbarLink.classList.remove('menu__link__active'))

   console.log(window.scrollY, contact.offsetTop)

   if (window.scrollY >= catalog.offsetTop && window.scrollY < about.offsetTop) {
      navbarLinks[0].classList.add('menu__link__active')
   }
   if (window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - (contact.offsetTop / 10)) {
      navbarLinks[1].classList.add('menu__link__active')
   }
   if (window.scrollY >= contact.offsetTop - (contact.offsetTop / 10)) {
      navbarLinks[2].classList.add('menu__link__active')
   }


})