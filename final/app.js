
// var myNav =document.getElementsByClassName('navbar')


// window.onscroll =function(){
//     "use strict";
//     if(document.body.scrollTop>=200)
// }


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open')
})
