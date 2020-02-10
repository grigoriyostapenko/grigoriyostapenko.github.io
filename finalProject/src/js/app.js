fetch('https://my-json-server.typicode.com/grigoriyostapenko/fake-database/menu')  
.then(  
  function (response) { 
    response.json().then(function(data) { 
      // for (let i = 0; i < data.length; i++) {
      //   $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#'+data[i]+'" class="fp-header__list-link">' + data[i] + '</a></li>');
      //   $("#mySidenav").append('<a class="sidenav__link" href="#'+data[i]+'">'+data[i]+'<a>')
      // }

      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#" class="fp-header__list-link">' + data[0] + '</a></li>');
      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#offer" class="fp-header__list-link">' + data[1] + '</a></li>');
      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#gallery" class="fp-header__list-link">' + data[2] + '</a></li>');
      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#about" class="fp-header__list-link">' + data[3] + '</a></li>');
      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#testim" class="fp-header__list-link">' + data[4] + '</a></li>');
      $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#contact" class="fp-header__list-link">' + data[5] + '</a></li>');
      $("#mySidenav").append('<a class="sidenav__link" href="#"">'+data[0]+'<a>');
      $("#mySidenav").append('<a class="sidenav__link" href="#offer"">'+data[1]+'<a>');
      $("#mySidenav").append('<a class="sidenav__link" href="#gallery"">'+data[2]+'<a>');
      $("#mySidenav").append('<a class="sidenav__link" href="#about"">'+data[3]+'<a>');
      $("#mySidenav").append('<a class="sidenav__link" href="#testim"">'+data[4]+'<a>');
      $("#mySidenav").append('<a class="sidenav__link" href="#contact"">'+data[5]+'<a>');
    });  
  }  
  )  
.catch(function(err) {  
  console.log('Fetch Error :-S', err);  
});

// <!-- LIST WITH EX:
// CUSTOM SCROLL 
// PRELOADER
// COMMENTS IS ARTICLE
//  -->

$('.fp-gallery').Mosaic({
  maxRowHeight: 600
});

document.body.style.overflow = 'hidden';
const preloaderBlock = document.querySelector(".preloader");
function preloader() {
  document.body.style.overflow = 'visible';
  preloaderBlock.style.display = 'none';
};

setTimeout(preloader, 3000);

const closeTimes = document.querySelector(".closebtn");
const openBars = document.querySelector(".fp-menu__bars");

openBars.addEventListener('click', openNav);
closeTimes.addEventListener('click', closeNav);


function openNav(event) {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.paddingLeft = "20px";
}

function closeNav(event) {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.paddingLeft = "0px";
}






let lastScrollTop = 0;

$(window).scroll(function(event){

  let st = $(this).scrollTop();
  
  if (st < 100){
    $("#btnTop").removeClass('active');
  } else {
    if (st > lastScrollTop){
      $("#btnTop").removeClass('active');
    } else {
      $("#btnTop").addClass('active');
    }   
  }
  
  lastScrollTop = st;
  
});


// // Scroll to bottom on document ready
// $(document).ready(function(){
//   $("html, body").animate({ scrollTop: $(document).height() }, 200);
//   return false;
// });


// // Smooth scroll
// $(document).ready(function(){
//   $('a[href^="#"]').on('click',function (e) {
//     e.preventDefault();
//     const target = this.hash,
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//     }, 200, function () {
//       window.location.hash = target;
//     });
//   });
// });

const anchors = document.querySelector(".btnTop")

anchors.addEventListener('click', (event) => {
  event.preventDefault()

  const blockID = anchors.getAttribute('href').substr(1)

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});





let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
console.log(today);

const dateControl = document.getElementById("start")
dateControl.value = today;

const windowHeight = document.documentElement.clientHeight;
console.log(windowHeight);