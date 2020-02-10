const menuClose = document.querySelectorAll(".sidenav__link");

for (let k = 0 ; k < menuClose.length; k++) {
	menuClose[k].addEventListener('click', closeSideMenu); 
}


function closeSideMenu(event) {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mySidenav").style.paddingLeft = "0px";
}
