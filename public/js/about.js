let historyElements = document.getElementById('history-events-list') ,
historyListItems = historyElements.getElementsByTagName('li');

window.addEventListener( 'scroll', function(e) { 
	
	if( historyListItems[0].offsetTop != 0) {
		for( let i = 0;  i < historyListItems.length; i++ ) {
			if ( window.pageYOffset >= historyListItems[i].offsetTop ) {
				if( i % 2 == 0 ) {
					historyListItems[i].style.transform = "translateX( 0% )";
				} else {
					historyListItems[i].style.transform = "translateX( 135% )";
				}
			}
		}
	}

});
