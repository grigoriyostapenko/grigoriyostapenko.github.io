$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

const bars = document.querySelector("#nav-icon3");
const menuContent = document.querySelector(".dk-header__list");

bars.addEventListener('click', closeMenu);

function closeMenu(event) {
	menuContent.classList.toggle("hidden");
};


