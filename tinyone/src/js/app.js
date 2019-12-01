const words = document.querySelectorAll('.th-main__list-desc');
Array.from(words).forEach((desc) => {
const substr = desc.outerText.substring(0, 100) + '…';
card.innerText = substr;
});