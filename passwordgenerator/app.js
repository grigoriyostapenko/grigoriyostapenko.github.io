const generateButton = document.querySelector(".button");
generateButton.addEventListener('click', (event) => {
	event.preventDefault();
	const lengthNumber = document.querySelector(".chislo").value;
	const letters = "qazw9sx7e8dcrf8vt1gby8hnu4jm8i9okl541QPWOEIR2UTY48AL37SK55D6JFH4143664G2ZXCV9BN0M";
	const lettersMassive = letters.split('');	
	let finalPassword = "";

	for (i=0; i<lengthNumber; i++) {
		const lettersLength = lettersMassive.length;
		let randomNumber = Math.floor(Math.random() * Math.floor(lettersLength));
		finalPassword = finalPassword + lettersMassive[randomNumber];
	}

	const passwordField = document.querySelector(".password");
	passwordField.innerText = finalPassword;
})

const numberInput = document.querySelector(".chislo");
numberInput.addEventListener('change', () => {
	if(numberInput.value>30) {
		let minusValue = numberInput.value - 30;
		numberInput.value = numberInput.value - minusValue;
	}
})

numberInput.addEventListener('input', () => {
	if(numberInput.value>30) {
		let minusValue = numberInput.value - 30;
		numberInput.value = numberInput.value - minusValue;
	}
})

