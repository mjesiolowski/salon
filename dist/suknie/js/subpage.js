const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu__link')
const menuLogo = document.querySelector('.menu__logo')
const menuTitle = document.querySelector('.menu__title')
const dropdownList = document.querySelector('.menu__dropdown__list')

const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

const catalogSection = document.querySelectorAll('.catalog__section')
const catalogSectionSubpageImages = document.querySelectorAll('.catalog__section--subpage__img')

const modal = document.querySelector('.catalog__modal')
const modalImage = document.querySelector('.catalog__modal__img')
const modalCloseBtn = document.querySelector('.catalog__modal__closeBtn')
const modalRightArrow = document.querySelector('.catalog__modal__rightArrow')
const modalLeftArrow = document.querySelector('.catalog__modal__leftArrow')

//scroll handlers
window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      menu.style.fontSize = "1.4rem"
      menuLogo.style.fontSize = "1.8rem"
      menuTitle.style.fontSize = "1.2rem"
      catalogSection.forEach(section => section.style.left = 0)
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

//modal handlers
catalogSectionSubpageImages.forEach((section, index) => {
   section.addEventListener('click', () => {
      modal.style.visibility = "visible";
      let indexValue = index;
      let srcValue = catalogSectionSubpageImages[index].attributes.src.nodeValue
      modalImage.setAttribute('src', srcValue)

      modalRightArrow.addEventListener('click', () => {
         if (indexValue === catalogSectionSubpageImages.length - 1) {
            indexValue = -1
         }
         srcValue = catalogSectionSubpageImages[++indexValue].attributes.src.nodeValue
         modalImage.setAttribute('src', srcValue)
      })

      modalLeftArrow.addEventListener('click', () => {
         if (indexValue === 0) {
            indexValue = catalogSectionSubpageImages.length
         }
         srcValue = catalogSectionSubpageImages[--indexValue].attributes.src.nodeValue
         modalImage.setAttribute('src', srcValue)
      })
   })
})

modalCloseBtn.addEventListener('click', () => {
   modal.style.visibility = "hidden"
})

//dropdown handlers

menuLinks[1].addEventListener('click', () => {
   dropdownList.classList.toggle('menu__dropdown__list--active')
})