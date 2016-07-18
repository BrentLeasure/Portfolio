var previousPageID = "pageOne";
var previousButtonID = "home";
var colors = ['#1072b8', '#e44d26', '#90c53f'];


window.onresize = function(event) {
	//if window resizes, this will run
    if(window.innerWidth > 751){
    	//if the window is BIGGER than 751px, this will fire
    	if(previousButtonID == 'home'){
    		//If the home button was clicked last, then it will adjust the 
    		//location of the buttons as if they were on the main page
	    	document.getElementById('about-me').style.top = '70px';
			document.getElementById('skills').style.top = '0px';
			document.getElementById('projects').style.top = '70px';
			var navButtons = document.getElementsByClassName('nav-buttons');
			for(var button = 0; button < navButtons.length; button++){
				// navButtons[button].style.height = 125px;
				navButtons[button].style.height = '125px';
			}
		}else{
			//If the home button was NOT clicked last, then it will adjust the 
    		//location of the buttons as if they were NOT on the main page
			document.getElementById('about-me').style.top = '10px';
			document.getElementById('skills').style.top = '10px';
			document.getElementById('projects').style.top = '10px';
		}
    }else{
    	//if the window is SMALLER than 751px, this will fire
    	if(previousButtonID == 'home'){
    		//If the home button was clicked last, then it will adjust the 
    		//location of the buttons as if they were on the main page
    		document.getElementById('about-me').style.top = '80px';
			document.getElementById('skills').style.top = '-70px';
			document.getElementById('projects').style.top = '-120px';
    	}else{
    		//If the home button was NOT clicked last, then it will adjust the 
    		//location of the buttons as if they were NOT on the main page
    		document.getElementById('about-me').style.top = '10px';
			document.getElementById('skills').style.top = '-90px';
			document.getElementById('projects').style.top = '-190px';
    	}
    }
};

function resetButtonLocation(){
	//if the home button is clicked, then this will fire 
	//and reset all the buttons background colors to black
	document.getElementById(previousButtonID).style.backgroundColor = "black";

	if(window.innerWidth > 751){
		//if the window is BIGGER than 751px, this will fire
		document.getElementById('about-me').style.top = '70px';
		document.getElementById('skills').style.top = '0px';
		document.getElementById('projects').style.top = '70px';
	}else{
		//if the window is SMALLER than 751px, this will fire
		document.getElementById('about-me').style.top = '80px';
		document.getElementById('skills').style.top = '-70px';
		document.getElementById('projects').style.top = '-120px';
	}	
	previousButtonID = 'home';
}


function changeButtonLocation(){
	//if a navigation button is clicked, this will fire
	if(window.innerWidth > 751){
		//if the window is BIGGER than 751px, this will fire
		document.getElementById('about-me').style.top = '10px';
		document.getElementById('skills').style.top = '10px';
		document.getElementById('projects').style.top = '10px';
	}else{
		//if the window is SMALLER than 751px, this will fire
		document.getElementById('about-me').style.top = '10px';
		document.getElementById('skills').style.top = '-90px';
		document.getElementById('projects').style.top = '-190px';
	}
}

function NavbarClick(id, idNum){
	if(previousButtonID == "home"){
		//if previous button is 'home', then there is no previous button to reset
		//this will fire and only set a button's background color
		document.getElementById(id).classList.add("active-button"); 

		document.getElementById(id).style.backgroundColor = colors[idNum];
	}else{
		//If previous button is NOT home, it changes background color to
		//previous button to black and sets the current button to it's 
		//provided background color
		document.getElementById(previousButtonID).classList.remove("active-button");
		document.getElementById(id).classList.add("active-button");

		document.getElementById(id).style.backgroundColor = colors[idNum];
		document.getElementById(previousButtonID).style.backgroundColor = "black";
	}

	//changes the buttons location
	changeButtonLocation();
	//previous button is set to the button that was clicked
	previousButtonID = id;
}

function ActivatePage(id){
		if(id != 'pageOne'){
			//If not on page one, the home button is set to visible
			document.getElementById('home-button').style.visibility = 'visible';
		}else{
			//If on page one, the home button is set to hidden
			document.getElementById('home-button').style.visibility = 'hidden';
		}
		//all buttons get 'active' class removed
		document.getElementById(previousPageID).classList.remove("active");
		//button clicked gets 'active' class added
		document.getElementById(id).classList.add("active");

	//previous button is set to the button that was clicked
	previousPageID = id;
}
