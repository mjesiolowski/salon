const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu__link')
const menuLogo = document.querySelector('.menu__logo')
const menuTitle = document.querySelector('.menu__title')
const dropdownList = document.querySelector('.menu__dropdown__list')

const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

//scroll handlers
window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      menu.style.fontSize = "1.4rem"
      menuLogo.style.fontSize = "1.8rem"
      menuTitle.style.fontSize = "1.2rem"
   } else {
      menu.style.fontSize = "2rem"
      menuLogo.style.fontSize = "2.3rem"
      menuTitle.style.fontSize = "1.4rem"
   }
})
//hamburger handlers
hamburger.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
   hamburger.classList.toggle('menu__burger--active')
})

hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
}))

//dropdown handlers

menuLinks[1].addEventListener('click', () => {
   dropdownList.classList.toggle('menu__dropdown__list--active')
})