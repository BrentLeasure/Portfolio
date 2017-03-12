let randomNumArray = [], randomNum, skillBoxArray = document.getElementsByClassName('skillBox'), i = 0;
window.onload = function() { 	

	while ( randomNumArray.length != 11 ) {
		randomNum = Math.floor(Math.random() * 11);
		
		if( randomNumArray.indexOf(randomNum) == -1 ) {
			randomNumArray.push(randomNum);
		}
	}
	pulseLoop();

}

function pulseLoop() {
	skillBoxArray[randomNumArray[i]].classList += (' pulse');
	i++;
	if( i < 11){
		setTimeout(function() {
			pulseLoop();
		}, 500);
	}	
}
