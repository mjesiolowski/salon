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

      // this.subpageImages = []

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

      // this.handleModal(this.subpageImages)

      this.modal.addEventListener('click', (e) => {
         if (e.target.id === 'catalog_modal') this.hideModal()
      })

      // this.modalCloseBtn.addEventListener('click', () => this.hideModal())

      document.addEventListener('click', (e) => {
         if (e.target.id === 'menu-link')
            this.dropdownList.classList.toggle('menu__dropdown__list--active')
         else this.dropdownList.classList.remove('menu__dropdown__list--active')
      })

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

      this.setFooterDate()
      this.toggleHamburger()
      this.generateDOM()
   },
   toggleHamburger() {
      this.hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
         this.hiddenMenu.classList.toggle('menu__hidden--active')
      }))
   },
   handleModal(subpageImages) {
      subpageImages.forEach((img, index) => {
         img.addEventListener('click', () => {
            const handleRightArrowModal = () => {
               console.log(indexValue)
               if (indexValue === subpageImages.length - 1) {
                  indexValue = -1
               }
               srcValue = subpageImages[++indexValue].dataset.src
               this.modalImage.setAttribute('src', srcValue)
            }

            const handleLeftArrowModal = (indexValue, subpageImages) => {
               console.log(indexValue)
               if (indexValue === 0) {
                  indexValue = subpageImages.length
               }
               srcValue = subpageImages[--indexValue].dataset.src
               this.modalImage.setAttribute('src', srcValue)
            }

            this.modal.style.visibility = "visible";
            let indexValue = index;
            let srcValue = subpageImages[index].dataset.src
            this.modalImage.setAttribute('src', srcValue)

            this.modalRightArrow.addEventListener('click', handleRightArrowModal)

            this.modalLeftArrow.addEventListener('click', () => handleLeftArrowModal(indexValue, subpageImages))
            this.modalCloseBtn.addEventListener('click', () => this.hideModal())
            this.modalCloseBtn.addEventListener('click', () => this.modalRightArrow.removeEventListener('click', handleRightArrowModal))
            // this.modalCloseBtn.addEventListener('click', () => this.hideModal())
            // this.modalCloseBtn.addEventListener('click', () => this.hideModal())
            // document.addEventListener('keydown', (e) => {
            //    if (e.keyCode === 39) handleRightArrowModal()
            //    else if (e.keyCode === 37) handleLeftArrowModal()
            // })

         })
      })
   },
   hideModal() {
      this.modal.style.visibility = "hidden"
      this.modalRightArrow.removeEventListener('click', () => this.handleRightArrowModal(indexValue, subpageImages))
      this.modalLeftArrow.removeEventListener('click', () => this.handleLeftArrowModal(indexValue, subpageImages))
   },

   generateCollectionImages(photosNumber, collection) {
      const location = window.location.pathname.split('/')[2]

      if (location === `${collection}.html`) {
         for (let i = 1; i <= photosNumber; i++) {
            const div = document.createElement('div')
            const img = document.createElement('img')

            div.classList.add(`catalog__section`)
            div.classList.add(`catalog__section--subpage`)
            catalog.appendChild(div)

            img.classList.add('catalog__section--subpage__img')
            img.classList.add('lazy')
            img.setAttribute('alt', 'wedding dress photo')
            img.setAttribute('data-src', `../images/${collection}/${collection} (${i}).jpg`)
            div.appendChild(img)

            if (i === photosNumber) {
               let subpageImages = document.querySelectorAll('.catalog__section--subpage__img')
               this.handleModal(subpageImages)
            }
         }

         // console.log(this.subpageImages)
         // let subpageImages = document.querySelectorAll('.catalog__section--subpage__img')

         // this.handleModal(subpageImages)
      }
   },
   generateDOM() {
      this.images.forEach(({ collection, photosNumber }) => {
         this.generateCollectionImages.call(this, photosNumber, collection)
      })
   },
   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }

}

subpage.init()