"use strict";

var main = {
  init: function init() {
    var _this = this;

    this.menu = document.querySelector('.menu');
    this.events = document.querySelector('.events');
    this.about = document.querySelector('.about');
    this.contact = document.querySelector('.contact');
    this.menuLogo = document.querySelector('.menu__logo');
    this.menuTitle = document.querySelector('.menu__title');
    this.menuLinks = document.querySelectorAll('.menu__link');
    this.hamburger = document.querySelector('.menu__burger');
    this.hiddenMenu = document.querySelector('.menu__hidden');
    this.hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link');
    this.footerDate = document.querySelector('.footer__date');
    this.toggleHiddenMenuClass();
    this.setFooterDate();
    window.addEventListener("scroll", function () {
      var safetyTreshold = 10;
      var menuFontSize = {
        styleFontL: "2rem",
        logoFontL: "2.3rem",
        titleFontL: "1.4rem",
        styleFontS: "1.4rem",
        logoFontS: "1.8rem",
        titleFontS: "1.2rem"
      };

      _this.handleMenuFontSize(300, menuFontSize);

      _this.removeActiveClassFromMenu();

      _this.handleMenuHighlight(window.scrollY < catalog.offsetTop, 0);

      _this.handleMenuHighlight(window.scrollY >= catalog.offsetTop && window.scrollY < events.offsetTop, 1);

      _this.handleMenuHighlight(window.scrollY >= events.offsetTop && window.scrollY < about.offsetTop, 2);

      _this.handleMenuHighlight(window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - contact.offsetTop / safetyTreshold, 3);

      _this.handleMenuHighlight(window.scrollY >= contact.offsetTop - contact.offsetTop / safetyTreshold, 4);
    }, {
      passive: true
    }), this.hamburger.addEventListener('click', function () {
      _this.hiddenMenu.classList.toggle('menu__hidden--active');

      _this.hamburger.classList.toggle('menu__burger--active');
    }, {
      passive: true
    });
  },
  toggleHiddenMenuClass: function toggleHiddenMenuClass() {
    var _this2 = this;

    this.hiddenMenuLinks.forEach(function (link) {
      return link.addEventListener('click', function () {
        _this2.hiddenMenu.classList.toggle('menu__hidden--active');
      });
    });
  },
  handleMenuFontSize: function handleMenuFontSize(scrollPos, _ref) {
    var styleFontL = _ref.styleFontL,
        logoFontL = _ref.logoFontL,
        titleFontL = _ref.titleFontL,
        styleFontS = _ref.styleFontS,
        logoFontS = _ref.logoFontS,
        titleFontS = _ref.titleFontS;

    if (window.scrollY >= scrollPos) {
      this.menu.style.fontSize = styleFontS;
      this.menuLogo.style.fontSize = logoFontS;
      this.menuTitle.style.fontSize = titleFontS; // catalogSection.forEach(section => section.style.left = 0)
    } else {
      this.menu.style.fontSize = styleFontL;
      this.menuLogo.style.fontSize = logoFontL;
      this.menuTitle.style.fontSize = titleFontL;
    }
  },
  removeActiveClassFromMenu: function removeActiveClassFromMenu() {
    this.menuLinks.forEach(function (navbarLink) {
      return navbarLink.classList.remove('menu__link--active');
    });
  },
  handleMenuHighlight: function handleMenuHighlight(condition, linkPosition) {
    if (condition) {
      this.menuLinks[linkPosition].classList.add('menu__link--active');
    }
  },
  setFooterDate: function setFooterDate() {
    this.footerDate.textContent = new Date().getFullYear();
  }
};
main.init();