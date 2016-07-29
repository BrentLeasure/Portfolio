var navButtons = document.getElementsByClassName('nav-buttons');
function toRectagle(){
	//loop through and set nav buttons to rectangles
	for(var button = 0; button < navButtons.length; button++){
		navButtons[button].style.height = '50px';
		navButtons[button].style.borderRadius = '25px';
	}
	// if(window.innerWidth > 751){
	// 	navButtons[0].style.right = '200px';
	// 	navButtons[2].style.left = '200px';
	// }else{
	// 	navButtons[0].style.right = '0px';
	// 	navButtons[2].style.left = '0px';
	// }
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