import './scss/styles.scss'

const menu = document.querySelector('.menu')
const menuLogo = document.querySelector('.menu__logo')
const menuTitle = document.querySelector('.menu__title')
const dropdownList = document.querySelector('.menu__dropdown__list')

const hamburger = document.querySelector('.menu__burger')
const hiddenMenu = document.querySelector('.menu__hidden')
const hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

const catalogSection = document.querySelectorAll('.catalog__section')
const subpageImg = document.querySelectorAll('.catalog__section--subpage__img')

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
}, {
   passive: true
})


//hamburger handlers
hamburger.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
   hamburger.classList.toggle('menu__burger--active')
})

const toggleHamburger = () => hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
   hiddenMenu.classList.toggle('menu__hidden--active')
}))


//modal handlers

const handleModal = () => {
   return subpageImg.forEach((img, index) => {
      img.addEventListener('click', () => {
         modal.style.visibility = "visible";
         let indexValue = index;
         let srcValue = subpageImg[index].attributes.src.nodeValue
         modalImage.setAttribute('src', srcValue)

         //right arrow
         modalRightArrow.addEventListener('click', () => {
            if (indexValue === subpageImg.length - 1) {
               indexValue = -1
            }
            srcValue = subpageImg[++indexValue].attributes.src.nodeValue
            modalImage.setAttribute('src', srcValue)
         })

         //left arrow
         modalLeftArrow.addEventListener('click', () => {
            if (indexValue === 0) {
               indexValue = subpageImg.length
            }
            srcValue = subpageImg[--indexValue].attributes.src.nodeValue
            modalImage.setAttribute('src', srcValue)
         })
      })
   })
}

const hideModal = () => modal.style.visibility = "hidden"

modal.addEventListener('click', (e) => {
   if (e.target.id === 'catalog_modal') hideModal()
})

modalCloseBtn.addEventListener('click', () => hideModal())

//dropdown handlers
document.addEventListener('click', (e) => {
   if (e.target.id === 'menu-link')
      dropdownList.classList.toggle('menu__dropdown__list--active')
   else dropdownList.classList.remove('menu__dropdown__list--active')
})

toggleHamburger()
handleModal()