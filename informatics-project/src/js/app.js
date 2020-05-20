const auditory = document.querySelectorAll(".ls-desc__audit");
for (let k=0; k<auditory.length; k++) {
	auditory[k].innerText = k+1+ ". " + auditory[k].innerText + ":";
}

$("#body").append('<footer class="ls-footer"><div class="container"><h3 class="ls-footer__text">Автор проекту: Остапенко Григорій</h3></div></footer>');

const kkkkkkk = document.querySelectorAll(".ls-buy__item");
for (let k=0; k<kkkkkkk.length; k++) {
	kkkkkkk[k].innerText = k+1+ ". " + kkkkkkk[k].innerText;
}