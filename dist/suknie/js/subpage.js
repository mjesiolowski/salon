const navbar = document.querySelector('.menu')

const catalogSection = document.querySelectorAll('.catalog__section')
const catalogSectionSubpage = document.querySelectorAll('.catalog__section--subpage')
const modal = document.querySelector('.catalog__modal')
const modalImage = document.querySelector('.catalog__modal__img')
const modalCloseBtn = document.querySelector('.catalog__modal__closeBtn')

const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

//scroll handlers
window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      navbar.style.fontSize = "1.4rem"
      catalogSection.forEach(section => section.style.left = 0)
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

//modal handlers
catalogSectionSubpage.forEach(section => {
   section.addEventListener('click', (e) => {
      modal.style.visibility = "visible";
      const srcValue = e.target.attributes.src.nodeValue
      modalImage.setAttribute('src', srcValue)

   })
})

modalCloseBtn.addEventListener('click', () => {
   modal.style.visibility = "hidden"
})