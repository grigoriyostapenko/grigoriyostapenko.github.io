const words = document.querySelectorAll(".dc-content__name");

for(let i = 0; i < words.length; i++) {
	console.log(words[i].innerText);
}

let sortWords = new Array();

for(let k = 0; k < words.length; k++) {
	sortWords[k] = words[k].innerText;
}
sortWords.sort();
console.log(sortWords);


const sortList = document.querySelector(".sort");
sortList.style.display = "none";

const sortButton = document.querySelector(".dc-header__button");
sortButton.addEventListener("click", () => {
	sortList.style.display = "flex";
	document.querySelector(".dc-content__list").style.display = "none";
})