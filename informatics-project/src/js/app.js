const auditory = document.querySelectorAll(".ls-desc__audit");
for (let k=0; k<auditory.length; k++) {
	auditory[k].innerText = k+1+ ". " + auditory[k].innerText + ":";
}
