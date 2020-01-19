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


const mail = document.querySelector(".dk-sub__text");
const form = document.querySelector(".dk-sub__form");
const title = document.querySelector(".dk-sub__title");
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {};
	const text = form.elements.text;

	for(let i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name === 'submit') {
			continue;
		}
		data[form.elements[i].name] = form.elements[i].value;
	}

	if (data.text === "") {
		title.innerText = `Write something`;
	} else {title.innerText = `${data.text}`;}

});	

const subtitle = document.querySelector(".dk-sub__subtitle");
form.addEventListener('change', (event) => {
	const data = {};
	const text = form.elements.text;

	for(let i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name === 'submit') {
			continue;
		}
		data[form.elements[i].name] = form.elements[i].value;
	}

	subtitle.innerText = `${data.text}`;
});

// const menuFooter = document.querySelector(".dk-footer__list-link");
// menuFooter.addEventListener('mouseover', () => {
// 	menuFooter.classList.toggle("mouseover");
// });

// menuFooter.addEventListener('mouseout', () => {
// 	menuFooter.classList.toggle("mouseout");
// });