const navbar = document.querySelector('.menu')
const navbarLinks = document.querySelectorAll('.menu__link')
const dropdownList = document.querySelector('.menu__dropdown__list')

const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

//scroll handlers
window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      navbar.style.fontSize = "1.4rem"
   } else navbar.style.fontSize = "2rem"
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

navbarLinks[1].addEventListener('click', () => {
   dropdownList.classList.toggle('menu__dropdown__list--active')
})