window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open')
})

// const tag= document.querySelector(".tag");
// // console.log('tag');
// const strText = tag.textContent;
// // console.log(strText);
// const splitText = strText.split("");
// tag.textContent=" ";

// for(let i=0; i<splitText.length;i++){
//   Text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick(), 50);
//  function onTick(){
//    const Span = tag.querySelectorAll('span')[char];
//    Span.classList.add('fade');
//    char++
//    if(char === splitText.length){
//      complete();
//      return;
//    }
//  }

//  function complete(){
//      clearInterval(timer);
//      timer = null;
// }
