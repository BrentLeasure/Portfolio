var previousPageID = "";
var previousButtonID = "";

function NavbarClick(id){
	if(previousButtonID == ""){
		document.getElementById(id).classList.add("active-button");
		document.getElementById("about-me").classList.remove("active-button");
	}else{
		document.getElementById(id).classList.add("active-button");
		document.getElementById(previousButtonID).classList.remove("active-button");
	}
	previousButtonID = id;
}

function ActivatePage(id){
	if(previousPageID == ""){
		document.getElementById(id).classList.add("active");
		document.getElementById("pageOne").classList.remove("active");
	}else{
		document.getElementById(id).classList.add("active");
		document.getElementById(previousPageID).classList.remove("active");
	}
	previousPageID = id;
}
