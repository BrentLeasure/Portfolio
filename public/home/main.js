var previousPageID = "pageOne";
var previousButtonID = "about-me";
var colors = ['#1072b8', '#e44d26', '#90c53f'];



function resetButtonLocation(){
	document.getElementById(previousButtonID).style.backgroundColor = "black";
	if(window.innerWidth > 751){
		document.getElementById('about-me').style.top = '70px';
		document.getElementById('skills').style.top = '0px';
		document.getElementById('projects').style.top = '70px';
	}else{
		document.getElementById('about-me').style.top = '125px';
		document.getElementById('skills').style.top = '-40px';
		document.getElementById('projects').style.top = '-75px';
	}	
}


function changeButtonLocation(){
	if(window.innerWidth > 751){
		document.getElementById('about-me').style.top = '10px';
		document.getElementById('skills').style.top = '10px';
		document.getElementById('projects').style.top = '10px';
	}else{
		document.getElementById('about-me').style.top = '10px';
		document.getElementById('skills').style.top = '-90px';
		document.getElementById('projects').style.top = '-190px';
	}
}

function NavbarClick(id, idNum){
	if(previousButtonID == ""){
		document.getElementById("about-me").classList.remove("active-button");
		document.getElementById(id).classList.add("active-button"); 

		document.getElementById(id).style.backgroundColor = colors[idNum];
		document.getElementById("about-me").style.backgroundColor = "black";
	}else{
		document.getElementById(previousButtonID).classList.remove("active-button");
		document.getElementById(id).classList.add("active-button");

		document.getElementById(id).style.backgroundColor = colors[idNum];
		document.getElementById(previousButtonID).style.backgroundColor = "black";
	}

	changeButtonLocation();
	previousButtonID = id;
}

function ActivatePage(id){
		if(id != 'pageOne'){
			document.getElementById('home-button').style.visibility = 'visible';
		}else{
			document.getElementById('home-button').style.visibility = 'hidden';
		}
		document.getElementById(previousPageID).classList.remove("active");
		document.getElementById(id).classList.add("active");
	previousPageID = id;
}
