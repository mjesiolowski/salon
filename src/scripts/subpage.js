const subpage = {
   images: [
      {
         collection: 'duber',
         photosNumber: 158,
      }, {
         collection: 'dodatki',
         photosNumber: 5,
      }, {
         collection: 'plus_size',
         photosNumber: 31,
      }, {
         collection: 'sedinum_bridal',
         photosNumber: 52,
      }, {
         collection: 'slubne',
         photosNumber: 13,
      }, {
         collection: 'wizytowe',
         photosNumber: 45,
      }, {
         collection: 'otwarcie',
         photosNumber: 4,
      }, {
         collection: 'sedinum_bridal_2020',
         photosNumber: 11,
      }, {
         collection: 'annais_bridal_2020',
         photosNumber: 17,
      }, {
         collection: 'modeca_2020',
         photosNumber: 11,
      },
   ],
   init() {
      this.menu = document.querySelector('.menu')
      this.menuLogo = document.querySelector('.menu__logo')
      this.menuTitle = document.querySelector('.menu__title')
      this.dropdownList = document.querySelector('.menu__dropdown__list')

      this.hamburger = document.querySelector('.menu__burger')
      this.hiddenMenu = document.querySelector('.menu__hidden')
      this.hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

      this.catalog = document.getElementById('catalog')
      this.catalogSection = document.querySelector('.catalog__section')

      this.modal = document.querySelector('.catalog__modal')
      this.modalImage = document.querySelector('.catalog__modal__img')
      this.modalCloseBtn = document.querySelector('.catalog__modal__closeBtn')
      this.modalRightArrow = document.querySelector('.catalog__modal__rightArrow')
      this.modalLeftArrow = document.querySelector('.catalog__modal__leftArrow')

      this.footerDate = document.querySelector('.footer__date')

      // this.images.forEach(({ name, number }) => {
      //    this.generateImages(number, this.generateDOM, name)
      // })

      window.addEventListener("scroll", () => {
         if (window.scrollY >= 300) {
            this.menu.style.fontSize = "1.4rem"
            this.menuLogo.style.fontSize = "1.8rem"
            this.menuTitle.style.fontSize = "1.2rem"
         } else {
            this.menu.style.fontSize = "2rem"
            this.menuLogo.style.fontSize = "2.3rem"
            this.menuTitle.style.fontSize = "1.4rem"
         }
      }, {
         passive: true
      })

      this.hamburger.addEventListener('click', () => {
         this.hiddenMenu.classList.toggle('menu__hidden--active')
         this.hamburger.classList.toggle('menu__burger--active')
      })

      this.modal.addEventListener('click', (e) => {
         if (e.target.id === 'catalog_modal') this.hideModal()
      })

      this.modalCloseBtn.addEventListener('click', () => this.hideModal())

      document.addEventListener('click', (e) => {
         if (e.target.id === 'menu-link')
            this.dropdownList.classList.toggle('menu__dropdown__list--active')
         else this.dropdownList.classList.remove('menu__dropdown__list--active')
      })

      this.setFooterDate()
      this.toggleHamburger()
      this.generateImages()
   },
   toggleHamburger() {
      this.hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
         this.hiddenMenu.classList.toggle('menu__hidden--active')
      }))
   },
   handleModal(subpageImg) {
      return subpageImg.forEach((img, index) => {
         img.addEventListener('click', () => {
            this.modal.style.visibility = "visible";
            let indexValue = index;
            let srcValue = subpageImg[index].attributes.src.nodeValue

            this.modalImage.setAttribute('src', srcValue)

            const handleRightArrowModal = () => {
               if (indexValue === subpageImg.length - 1) {
                  indexValue = -1
               }
               srcValue = subpageImg[++indexValue].attributes.src.nodeValue
               this.modalImage.setAttribute('src', srcValue)
            }

            const handleLeftArrowModal = () => {
               if (indexValue === 0) {
                  indexValue = subpageImg.length
               }
               srcValue = subpageImg[--indexValue].attributes.src.nodeValue
               this.modalImage.setAttribute('src', srcValue)
            }

            this.modalRightArrow.addEventListener('click', handleRightArrowModal)

            this.modalLeftArrow.addEventListener('click', handleLeftArrowModal)

            document.addEventListener('keydown', (e) => {
               if (e.keyCode === 39) handleRightArrowModal()
               else if (e.keyCode === 37) handleLeftArrowModal()
            })

         })
      })
   },
   hideModal() {
      this.modal.style.visibility = "hidden"
   },
   generateDOM(number, collection) {
      const location = window.location.pathname.split('/')[2]

      if (location === `${collection}.html`) {
         const div = document.createElement('div')
         div.classList.add(`catalog__section`)
         div.classList.add(`catalog__section--subpage`)
         catalog.appendChild(div)

         const img = document.createElement('img')
         img.classList.add('catalog__section--subpage__img')
         img.setAttribute('alt', 'wedding dress photo')
         img.setAttribute('src', `../images/${collection}/${collection} (${number++}).jpg`)
         div.appendChild(img)

         let subpageImg = document.querySelectorAll('.catalog__section--subpage__img')

         this.handleModal(subpageImg)
      }
   },
   generateImages() {
      this.images.forEach(({ collection, photosNumber }) => {
         for (let i = 1; i <= photosNumber; i++) {
            this.generateDOM.call(this, i, collection)
         }
      })
   },
   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }

}

subpage.init()