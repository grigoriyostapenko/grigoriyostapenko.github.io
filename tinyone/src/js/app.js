const words = document.querySelectorAll('.th-main__list-desc');
console.log(words);
Array.from(words).forEach((desc) => {
	const substr = desc.outerText.substring(0, 120) + '…';
	desc.innerText = substr;
});

const form = document.querySelector('.form');
const answer = document.querySelector('.th-footer__title');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

	event.preventDefault();
	const data = {};
	const mail = form.elements.mail;

	for(let i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name === 'submit') {
			continue;
		}
		data[form.elements[i].name] = form.elements[i].value;
	}

	answer.innerText = `${data.mail}`;
}


