var navButtons = document.getElementsByClassName('nav-buttons');

var bl = {
	toRectagle: function() {

		//loop through and set nav buttons to rectangles
		for ( var button = 0; button < navButtons.length; button++ ) {
			navButtons[button].style.height = '50px';
			navButtons[button].style.borderRadius = '25px';
		}

	},

	toCircle: function() {

		if ( window.innerWidth > 751 ) {
			//loop through and set nav buttons to circles
			for ( var button = 0; button < navButtons.length; button++ ) {
				navButtons[button].style.height = '125px';
				navButtons[button].style.borderRadius = '100%';
				navButtons[button].style.margin = '0px 0px 0px';
			}
		} else {
			//loop through and set nav buttons to small circles
			for ( var button = 0; button < navButtons.length; button++ ) {
				navButtons[button].style.height = '100px';
				navButtons[button].style.borderRadius = '100%';
				navButtons[button].style.margin = '0px 0px 0px';
			}
		}

	},

	changeButtonLocation: function( isWindowResize ) {

		if ( window.innerWidth > 751 ) {
	    	//if the window is bigger than 751px, this will fire
	    	if ( previousButtonID == 'home' && isWindowResize ) {
	    		//If the home button was clicked last, then it will adjust the 
	    		//location of the buttons as if they were on the main page
		    	document.getElementById( 'about-me' ).style.top = '70px';
				document.getElementById( 'skills' ).style.top = '0px';
				document.getElementById( 'projects' ).style.top = '70px';

				this.toCircle();

			} else {
				//If the home button was NOT clicked last, then it will adjust the 
	    		//location of the buttons as if they were NOT on the main page
				document.getElementById('about-me').style.top = '10px';
				document.getElementById('skills').style.top = '10px';
				document.getElementById('projects').style.top = '10px';

				this.toRectagle();
			}
	    } else {
	    	//if the window is SMALLER than 751px, this will fire
	    	if ( previousButtonID == 'home' && isWindowResize ) {
	    		//If the home button was clicked last, then it will adjust the 
	    		//location of the buttons as if they were on the main page
	    		document.getElementById('about-me').style.top = '80px';
				document.getElementById('skills').style.top = '-70px';
				document.getElementById('projects').style.top = '-120px';

				this.toCircle();
	    	} else {
	    		//If the home button was NOT clicked last, then it will adjust the 
	    		//location of the buttons as if they were NOT on the main page
	    		document.getElementById('about-me').style.top = '10px';
				document.getElementById('skills').style.top = '-40px';
				document.getElementById('projects').style.top = '-89px';
				
				this.toRectagle();
	    	}
	    }

	},

	addAnimation: function( name, nodeNum = false, animation, direction = false ) {

		if ( nodeNum !== false ) {
			document.getElementsByClassName(name)[nodeNum].style.WebkitAnimation = animation;
			document.getElementsByClassName(name)[nodeNum].style.animation = animation;

			if ( direction ) {
				document.getElementsByClassName(name)[nodeNum].style.animationDirection = direction;
			}
		} else {
			document.getElementById(name).style.WebkitAnimation = animation;
			document.getElementById(name).style.animation = animation;

			if ( direction ) {
				document.getElementById(name).style.animationDirection = direction;		
			}	
		}

	},

	removeAllStyles: function( name, nodeNum = false) {
		if ( nodeNum !== false ) {
			document.getElementsByClassName(name)[nodeNum].removeAttribute('style');
		} else {
			document.getElementById(name).style.removeAttribute('style');
		}
	}
}

