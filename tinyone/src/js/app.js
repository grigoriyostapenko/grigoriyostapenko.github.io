const words = document.querySelectorAll('.th-main__list-desc');
console.log(words);
Array.from(words).forEach((desc) => {
	const substr = desc.outerText.substring(0, 120) + '…';
	desc.innerText = substr;
});

const form = document.querySelector('.form');
const answer = document.querySelector('.th-footer__title');

function handleSubmit(event) {

	event.preventDefault();


	const mail = form.elements.mail;

	answer.innerText = mail;
}


