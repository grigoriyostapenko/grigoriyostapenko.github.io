//0-12 - baby
//13-18 - teen
//19-68 adult
//61-100 - pens
const form = document.querySelector('.form');
const answer = document.querySelector('.answer');

function handleSubmit(event) {
	event.preventDefault();

	const data = {};
	const name = form.elements.name;
	const surname = form.elements.surname;
	const age = form.elements.age;

	for(let i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name === 'submit') {
			continue;
		}
		data[form.elements[i].name] = form.elements[i].value;
	}

	function getStatus(age) {



		if (age < 0 || age > 150) {
			return `Incorrect value`;
		}
		if (age > 0 && age <= 12) {
			return `baby`;
		} else if (age >= 13 && age <= 18) {
			return `teen`;
		} else if (age >= 19 && age <= 64) {
			return `adult`;
		} else { return `pens`;
		}
	}

	answer.innerText = `${data.name} ${data.surname} is ${getStatus(+data.age)}`;
}

form.addEventListener('submit', handleSubmit);

const pallindromForm = document.createElement('form');
pallindromForm.classList.add('pallindrom-form');
document.body.appendChild(pallindromForm);

const pallindromInput = document.createElement('input');
const pallindromSubmit = document.createElement('input');
const pallindromAnswer = document.createElement('p');
pallindromInput.setAttribute('name', 'number');
pallindromSubmit.setAttribute('type', 'submit');
pallindromSubmit.setAttribute('value', 'submit');
pallindromForm.appendChild(pallindromInput);
pallindromForm.appendChild(pallindromSubmit);
pallindromForm.appendChild(pallindromAnswer);

pallindromForm.addEventListener('submit', function(event) {
	event.preventDefault();

if (pallindromInput.value.length !== 5) {
	 pallindromAnswer.innerText = `Введите пятизначное число`;
	 return;
}

	const isPallindrom = pallindromInput.value.split(``).reverse().join('') === pallindromInput.value;
pallindromAnswer.innerText = isPallindrom ? 'Pallindrom' : 'Not Pallindrom';

})
