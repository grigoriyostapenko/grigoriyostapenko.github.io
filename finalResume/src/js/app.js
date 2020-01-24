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


const computedStyle = getComputedStyle(document.querySelector(".rs-header"), null);
const height = parseInt(computedStyle.getPropertyValue('height'));

const headerHeight = height - 40*2;

const menuComputed = getComputedStyle(document.querySelector(".rs-menu"), null);
const menuHeight = parseInt(menuComputed.getPropertyValue('height'));
console.log(menuHeight);

const titleHeight = headerHeight - menuHeight;
const title = document.getElementById("title");
title.style.height = titleHeight + "px";
