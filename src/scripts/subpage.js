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
         collection: 'otwarcie',
         photosNumber: 4,
      }, {
         collection: 'sedinum_bridal_2020',
         photosNumber: null,
      }, {
         collection: 'annais_bridal_2020',
         photosNumber: null,
      }, {
         collection: 'modeca_2020',
         photosNumber: null,
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

      const resizeMenuBarOnScroll = () => {
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
      }

      const toggleHamburgerClass = () => {
         this.hamburger.addEventListener('click', () => {
            this.hiddenMenu.classList.toggle('menu__hidden--active')
            this.hamburger.classList.toggle('menu__burger--active')
         })
      }

      const toggleDropdownVisibility = () => {
         document.addEventListener('click', (e) => {
            if (e.target.id === 'menu-link')
               this.dropdownList.classList.toggle('menu__dropdown__list--active')
            else this.dropdownList.classList.remove('menu__dropdown__list--active')
         })
      }

      const handleLazyLoading = () => {
         document.addEventListener("DOMContentLoaded", function () {
            let lazyloadImages;

            if ("IntersectionObserver" in window) {
               lazyloadImages = document.querySelectorAll(".lazy");
               const imageObserver = new IntersectionObserver(function (entries, observer) {
                  entries.forEach(function (entry) {
                     if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove("lazy");
                        imageObserver.unobserve(image);
                     }
                  });
               });

               lazyloadImages.forEach(function (image) {
                  imageObserver.observe(image);
               });
            } else {
               let lazyloadThrottleTimeout;
               lazyloadImages = document.querySelectorAll(".lazy");

               function lazyload() {
                  if (lazyloadThrottleTimeout) {
                     clearTimeout(lazyloadThrottleTimeout);
                  }

                  lazyloadThrottleTimeout = setTimeout(function () {
                     const scrollTop = window.pageYOffset;
                     lazyloadImages.forEach(function (img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                           img.src = img.dataset.src;
                           img.classList.remove('lazy');
                        }
                     });
                     if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                     }
                  }, 20);
               }

               document.addEventListener("scroll", lazyload);
               window.addEventListener("resize", lazyload);
               window.addEventListener("orientationChange", lazyload);
            }
         })

      }

      resizeMenuBarOnScroll()
      toggleHamburgerClass()
      toggleDropdownVisibility()
      handleLazyLoading()


      this.setFooterDate()
      this.toggleHamburger()
      this.generateDOM()
   },

   toggleHamburger() {
      this.hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
         this.hiddenMenu.classList.toggle('menu__hidden--active')
      }))
   },

   activateModal(subpageImages) {
      subpageImages.forEach((img, index) => {
         img.addEventListener('click', () => {

            const handleModalRightArrow = () => {
               if (indexValue === subpageImages.length - 1) {
                  indexValue = -1
               }
               srcValue = subpageImages[++indexValue].dataset.src
               this.modalImage.setAttribute('src', srcValue)
            }

            const handleModalLeftArrow = () => {
               if (indexValue === 0) {
                  indexValue = subpageImages.length
               }
               srcValue = subpageImages[--indexValue].dataset.src
               this.modalImage.setAttribute('src', srcValue)
            }

            const handleClosingModal = () => {
               this.modalCloseBtn.addEventListener('click', () => this.hideModal({ handleRightArrowModal: handleModalRightArrow, handleLeftArrowModal: handleModalLeftArrow }))
               this.modalCloseBtn.addEventListener('click', () => this.modalRightArrow.removeEventListener('click', handleModalRightArrow))
               this.modalCloseBtn.addEventListener('click', () => this.modalLeftArrow.removeEventListener('click', handleModalLeftArrow))

               this.modal.addEventListener('click', (e) => {
                  if (e.target.id === 'catalog_modal') this.hideModal({ handleRightArrowModal: handleModalRightArrow, handleLeftArrowModal: handleModalLeftArrow })
               })
            }

            let indexValue = index;
            let srcValue = subpageImages[index].dataset.src

            this.modal.style.visibility = "visible";
            this.modalImage.setAttribute('src', srcValue)

            this.modalRightArrow.addEventListener('click', handleModalRightArrow)
            this.modalLeftArrow.addEventListener('click', handleModalLeftArrow)

            handleClosingModal()
         })
      })
   },

   hideModal(arrowHandlers) {
      const { handleRightArrowModal, handleLeftArrowModal } = arrowHandlers
      this.modalRightArrow.removeEventListener('click', handleRightArrowModal)
      this.modalLeftArrow.removeEventListener('click', handleLeftArrowModal)
      this.modal.style.visibility = "hidden"
   },

   generateCollectionImages(photosNumber, collectionName) {
      const createImgElement = (collectionName, numberName) => {
         const img = document.createElement('img')
         img.classList.add('catalog__section--subpage__img')
         img.classList.add('lazy')
         img.setAttribute('alt', 'wedding dress photo')
         img.setAttribute('data-src', `../images/${collectionName}/${collectionName} (${numberName}).jpg`)

         return img
      }

      const createImgWrapperDivElement = () => {
         const div = document.createElement('div')
         div.classList.add(`catalog__section`)
         div.classList.add(`catalog__section--subpage`)
         catalog.appendChild(div)

         return div
      }

      const renderModalImages = () => {
         let subpageImages = document.querySelectorAll('.catalog__section--subpage__img')
         this.activateModal(subpageImages)
      }


      if (photosNumber === null) {
         renderModalImages()
      }
      else {
         for (let i = 1; i <= photosNumber; i++) {
            const div = createImgWrapperDivElement()
            const img = createImgElement(collectionName, i)

            div.appendChild(img)

            if (photosNumber === i) {
               renderModalImages()
            }
         }
      }
   },

   generateDOM() {
      const location = window.location.pathname.split('/')[2]

      this.images.forEach(({ collection, photosNumber }) => {
         const isCollectionSubpage = location === `${collection}.html`

         if (isCollectionSubpage) {
            this.generateCollectionImages.call(this, photosNumber, collection)
         }
      })
   },

   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }

}

subpage.init()