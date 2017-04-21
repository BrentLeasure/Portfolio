let randomNumArray = [], randomNum, skillBoxArray = document.getElementsByClassName('skillBox'), i = 0, j = 0;

let skillsLength = skillBoxArray.length;

window.onload = function() { 	

	while ( randomNumArray.length != skillsLength ) {
		randomNum = Math.floor(Math.random() * skillsLength);
		
		if( randomNumArray.indexOf(randomNum) == -1 ) {
			randomNumArray.push(randomNum);
		}
	}
	pulseLoop();
	
	removePulse();
}
 
function pulseLoop() {

	addAnimation( 'skillBox', randomNumArray[i], 'pulse 1.5s', 'alternate' );
		
	i++;
	
	if( i >= skillsLength ) {
		i = 0;
		j = 0;
		for ( let k = 0; k < skillsLength; k++ ) {
			removeAllStyles( 'skillBox', randomNumArray[k] );
		}

		
	}

	if( i % 3 == 0 ) {
		removePulse();
	}

	setTimeout(function() {
		pulseLoop();
	}, 500);
}

function removePulse() {
	
	if( j >= 1 ) {
		removeAllStyles( 'skillBox', randomNumArray[j - 1] );
	}

	j++;

	if( j >= skillsLength ) {
		j = 0;
	}
}