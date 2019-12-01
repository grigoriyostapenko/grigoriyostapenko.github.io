const cards = document.querySelectorAll('.about__card-text');
Array.from(cards).forEach((card) => {
	const substr = card.outerText.substring(0, 399) + '…';
	card.innerText = substr;
});