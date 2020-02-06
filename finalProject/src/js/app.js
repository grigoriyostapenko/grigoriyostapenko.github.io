fetch('https://my-json-server.typicode.com/grigoriyostapenko/fake-database/menu')  
.then(  
  function (response) { 
    response.json().then(function(data) { 
      for (let i = 0; i < data.length; i++) {
        $(".fp-header__list").append('<li class="fp-header__list-item"><a href="#" class="fp-header__list-link">' + data[i] + '</a></li>');
      }
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

setTimeout(preloader, 5000);