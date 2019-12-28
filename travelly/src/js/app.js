const bars = document.querySelector(".fa-bars");
const menu = document.querySelector(".tr-header__nav-hidden");
bars.addEventListener('click', hiddenMenu);

function hiddenMenu(event) {
	bars.classList.toggle("fa-times");
	menu.classList.toggle("tr-header__nav");
}