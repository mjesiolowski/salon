"use strict";

var subpage = {
  init: function init() {
    var _this = this;

    this.menu = document.querySelector('.menu');
    this.menuLogo = document.querySelector('.menu__logo');
    this.menuTitle = document.querySelector('.menu__title');
    this.dropdownList = document.querySelector('.menu__dropdown__list');
    this.hamburger = document.querySelector('.menu__burger');
    this.hiddenMenu = document.querySelector('.menu__hidden');
    this.hiddenMenuLinks = document.querySelectorAll('.menu__hidden__link');
    this.catalog = document.getElementById('catalog');
    this.catalogSection = document.querySelector('.catalog__section');
    this.modal = document.querySelector('.catalog__modal');
    this.modalImage = document.querySelector('.catalog__modal__img');
    this.modalCloseBtn = document.querySelector('.catalog__modal__closeBtn');
    this.modalRightArrow = document.querySelector('.catalog__modal__rightArrow');
    this.modalLeftArrow = document.querySelector('.catalog__modal__leftArrow');
    this.footerDate = document.querySelector('.footer__date');
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 300) {
        _this.menu.style.fontSize = "1.4rem";
        _this.menuLogo.style.fontSize = "1.8rem";
        _this.menuTitle.style.fontSize = "1.2rem";
      } else {
        _this.menu.style.fontSize = "2rem";
        _this.menuLogo.style.fontSize = "2.3rem";
        _this.menuTitle.style.fontSize = "1.4rem";
      }
    }, {
      passive: true
    });
    this.hamburger.addEventListener('click', function () {
      _this.hiddenMenu.classList.toggle('menu__hidden--active');

      _this.hamburger.classList.toggle('menu__burger--active');
    });
    this.modal.addEventListener('click', function (e) {
      if (e.target.id === 'catalog_modal') _this.hideModal();
    });
    this.modalCloseBtn.addEventListener('click', function () {
      return _this.hideModal();
    });
    document.addEventListener('click', function (e) {
      if (e.target.id === 'menu-link') _this.dropdownList.classList.toggle('menu__dropdown__list--active');else _this.dropdownList.classList.remove('menu__dropdown__list--active');
    });
    this.setFooterDate();
    this.toggleHamburger();
    this.generateImages(158, this.generateDOM, 'duber');
    this.generateImages(5, this.generateDOM, 'dodatki');
    this.generateImages(31, this.generateDOM, 'plus_size');
    this.generateImages(52, this.generateDOM, 'sedinum_bridal');
    this.generateImages(13, this.generateDOM, 'slubne');
    this.generateImages(45, this.generateDOM, 'wizytowe');
    this.generateImages(4, this.generateDOM, 'otwarcie');
  },
  toggleHamburger: function toggleHamburger() {
    var _this2 = this;

    this.hiddenMenuLinks.forEach(function (link) {
      return link.addEventListener('click', function () {
        _this2.hiddenMenu.classList.toggle('menu__hidden--active');
      });
    });
  },
  handleModal: function handleModal(subpageImg) {
    var _this3 = this;

    return subpageImg.forEach(function (img, index) {
      img.addEventListener('click', function () {
        _this3.modal.style.visibility = "visible";
        var indexValue = index;
        var srcValue = subpageImg[index].attributes.src.nodeValue;

        _this3.modalImage.setAttribute('src', srcValue);

        var handleRightArrowModal = function handleRightArrowModal() {
          if (indexValue === subpageImg.length - 1) {
            indexValue = -1;
          }

          srcValue = subpageImg[++indexValue].attributes.src.nodeValue;

          _this3.modalImage.setAttribute('src', srcValue);
        };

        var handleLeftArrowModal = function handleLeftArrowModal() {
          if (indexValue === 0) {
            indexValue = subpageImg.length;
          }

          srcValue = subpageImg[--indexValue].attributes.src.nodeValue;

          _this3.modalImage.setAttribute('src', srcValue);
        };

        _this3.modalRightArrow.addEventListener('click', handleRightArrowModal);

        _this3.modalLeftArrow.addEventListener('click', handleLeftArrowModal);

        document.addEventListener('keydown', function (e) {
          if (e.keyCode === 39) handleRightArrowModal();else if (e.keyCode === 37) handleLeftArrowModal();
        });
      });
    });
  },
  hideModal: function hideModal() {
    this.modal.style.visibility = "hidden";
  },
  generateDOM: function generateDOM(number, collection) {
    if (document.URL.includes("".concat(collection))) {
      var div = document.createElement('div');
      div.classList.add("catalog__section");
      div.classList.add("catalog__section--subpage");
      catalog.appendChild(div);
      var img = document.createElement('img');
      img.classList.add('catalog__section--subpage__img');
      img.setAttribute('alt', 'wedding dress photo');
      img.setAttribute('src', "../images/".concat(collection, "/").concat(collection, " (").concat(number++, ").jpg"));
      div.appendChild(img);
      var subpageImg = document.querySelectorAll('.catalog__section--subpage__img');
      this.handleModal(subpageImg);
    }
  },
  generateImages: function generateImages(photosNumber, callback, collection) {
    for (var i = 1; i <= photosNumber; i++) {
      callback.call(this, i, collection);
    }
  },
  setFooterDate: function setFooterDate() {
    this.footerDate.textContent = new Date().getFullYear();
  }
};
subpage.init();