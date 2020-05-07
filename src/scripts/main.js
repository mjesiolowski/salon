const main = {
   init() {
      this.menu = document.querySelector('.menu')

      this.events = document.querySelector('.events')
      this.about = document.querySelector('.about')
      this.contact = document.querySelector('.contact')

      this.menuLogo = document.querySelector('.menu__logo')
      this.menuTitle = document.querySelector('.menu__title')
      this.menuLinks = document.querySelectorAll('.menu__link')

      this.hamburger = document.querySelector('.menu__burger')
      this.hiddenMenu = document.querySelector('.menu__hidden')
      this.hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link')

      this.footerDate = document.querySelector('.footer__date')

      this.toggleHiddenMenuClass()
      this.setFooterDate()

      window.addEventListener("scroll", () => {
         const safetyTreshold = 10

         const menuFontSize = {
            styleFontL: "2rem",
            logoFontL: "2.3rem",
            titleFontL: "1.4rem",
            styleFontS: "1.4rem",
            logoFontS: "1.8rem",
            titleFontS: "1.2rem",
         }

         this.handleMenuFontSize(300, menuFontSize)

         this.removeActiveClassFromMenu()

         this.handleMenuHighlight(window.scrollY < catalog.offsetTop, 0)
         this.handleMenuHighlight(window.scrollY >= catalog.offsetTop && window.scrollY < events.offsetTop, 1)
         this.handleMenuHighlight(window.scrollY >= events.offsetTop && window.scrollY < about.offsetTop, 2)
         this.handleMenuHighlight(window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - (contact.offsetTop / safetyTreshold), 3)
         this.handleMenuHighlight(window.scrollY >= contact.offsetTop - (contact.offsetTop / safetyTreshold), 4)
      }, {
         passive: true
      }),

         this.hamburger.addEventListener('click', () => {
            this.hiddenMenu.classList.toggle('menu__hidden--active')
            this.hamburger.classList.toggle('menu__burger--active')
         }, {
            passive: true
         })
   },

   toggleHiddenMenuClass() {
      this.hiddenMenuLinks.forEach(link => link.addEventListener('click', () => {
         this.hiddenMenu.classList.toggle('menu__hidden--active')
      }))
   },

   handleMenuFontSize(scrollPos, {
      styleFontL,
      logoFontL,
      titleFontL,
      styleFontS,
      logoFontS,
      titleFontS
   }) {
      if (window.scrollY >= scrollPos) {
         this.menu.style.fontSize = styleFontS
         this.menuLogo.style.fontSize = logoFontS
         this.menuTitle.style.fontSize = titleFontS
      } else {
         this.menu.style.fontSize = styleFontL
         this.menuLogo.style.fontSize = logoFontL
         this.menuTitle.style.fontSize = titleFontL
      }
   },

   removeActiveClassFromMenu() {
      this.menuLinks.forEach(navbarLink => navbarLink.classList.remove('menu__link--active'))
   },

   handleMenuHighlight(condition, linkPosition) {
      if (condition) {
         this.menuLinks[linkPosition].classList.add('menu__link--active')
      }
   },

   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }
}

main.init()