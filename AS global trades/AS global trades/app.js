const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open')
})

// $(function (){
//     $('.toggle-button').on('click', function(){
//         console.log("hamburger");
//                 $('.bar').toggleClass('open');

//         $('.navbar-links').toggleClass('open');

//     });
// });
