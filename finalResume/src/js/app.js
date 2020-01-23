const closeTimes = document.querySelector(".closebtn");
const openBars = document.querySelector(".rs-menu__bars");

openBars.addEventListener('click', openNav);
closeTimes.addEventListener('click', closeNav);


function openNav(event) {
	event.preventDefault();
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav(event) {
	event.preventDefault();
	document.getElementById("mySidenav").style.width = "0";
}

