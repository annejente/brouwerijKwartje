
document.getElementsByClassName('menutoggle')[0].onclick = function () {
	var menu = document.getElementById('menu');
	var hamburger = document.getElementById('hamburger');


	if(menu.className=="active") {
		menu.className="inactive";
		hamburger.innerHTML="&#9776;"
	} else {
		menu.className = "active";	
		hamburger.innerHTML="&times;"
	}
}