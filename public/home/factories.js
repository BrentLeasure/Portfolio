var navButtons = document.getElementsByClassName('nav-buttons');
function toRectagle(){
	//loop through and set nav buttons to rectangles
	for(var button = 0; button < navButtons.length; button++){
		navButtons[button].style.height = '50px';
		navButtons[button].style.borderRadius = '25px';
	}
}

function toCircle(){
	if(window.innerWidth > 751){
		//loop through and set nav buttons to circles
		for(var button = 0; button < navButtons.length; button++){
			navButtons[button].style.height = '125px';
			navButtons[button].style.borderRadius = '100%';
			navButtons[button].style.margin = '0px 0px 0px';
		}
	}else{
		//loop through and set nav buttons to small circles
		for(var button = 0; button < navButtons.length; button++){
			navButtons[button].style.height = '100px';
			navButtons[button].style.borderRadius = '100%';
			navButtons[button].style.margin = '0px 0px 0px';
		}
	}
}

function changeButtonLocation(isWindoResize){
	if(window.innerWidth > 751){
    	//if the window is BIGGER than 751px, this will fire
    	if(previousButtonID == 'home' && isWindoResize){
    		//If the home button was clicked last, then it will adjust the 
    		//location of the buttons as if they were on the main page
	    	document.getElementById('about-me').style.top = '70px';
			document.getElementById('skills').style.top = '0px';
			document.getElementById('projects').style.top = '70px';

			toCircle();

		}else{
			//If the home button was NOT clicked last, then it will adjust the 
    		//location of the buttons as if they were NOT on the main page
			document.getElementById('about-me').style.top = '10px';
			document.getElementById('skills').style.top = '10px';
			document.getElementById('projects').style.top = '10px';

			toRectagle();
		}
    }else{
    	//if the window is SMALLER than 751px, this will fire
    	if(previousButtonID == 'home' && isWindoResize){
    		//If the home button was clicked last, then it will adjust the 
    		//location of the buttons as if they were on the main page
    		document.getElementById('about-me').style.top = '80px';
			document.getElementById('skills').style.top = '-70px';
			document.getElementById('projects').style.top = '-120px';

			toCircle();
    	}else{
    		//If the home button was NOT clicked last, then it will adjust the 
    		//location of the buttons as if they were NOT on the main page
    		document.getElementById('about-me').style.top = '10px';
			document.getElementById('skills').style.top = '-40px';
			document.getElementById('projects').style.top = '-89px';
			
			toRectagle();
    	}
    }
}


function FocusAboutMe(selectedColumn){
	var aboutMeColumns = document.getElementsByClassName('col');
	for(var column = 0; column < aboutMeColumns.length; column ++){
		if(column != selectedColumn){
			aboutMeColumns[column].style.display = 'none';
		}
	}
	// setTimeout(function(){

	// }, 1000);
}