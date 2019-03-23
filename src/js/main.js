const navbar = document.querySelector('.menu')
const catalogSection = document.querySelectorAll('.catalog__section')


window.addEventListener("scroll", function () {
   if (window.scrollY >= 300) {
      navbar.style.fontSize = "1.6rem"
      catalogSection.forEach(section => section.style.left = 0)
   } else navbar.style.fontSize = "2.5rem"
})