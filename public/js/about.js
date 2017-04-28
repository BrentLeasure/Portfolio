let body = document.body, historyElements = document.getElementById('history-events-list') ,
historyListItems = historyElements.getElementsByTagName('li'), endOfHistory = document.getElementById('end-of-history');

window.addEventListener( 'scroll', function(e) { 
	if( historyListItems[0].offsetTop != 0) {
		for( let i = 0;  i < historyListItems.length; i++ ) {
			if ( window.pageYOffset >= historyListItems[i].offsetTop - 55 ) {
				if( i % 2 == 0 ) {
					historyListItems[i].style.transform = "translateX( 0% )";
				} else {
					historyListItems[i].style.transform = "translateX( 130% )";
				}
			} else if (historyListItems[i].style.transform != "") {
				if( i % 2 == 0 ) {
					historyListItems[i].style.transform = "translateX( -160% )";
				} else {
					historyListItems[i].style.transform = "translateX( 250% )";
				}
			}
		}
		console.log( body.scrollHeight);
		console.log( body.scrollTop + window.innerHeight  + 100 );
		if ( body.scrollHeight <= ( body.scrollTop + window.innerHeight  ) ) {
			endOfHistory.style.opacity = 1;
		} else if ( endOfHistory.style.opacity == 1 ) {
			endOfHistory.style.opacity = 0;
		}
	}


});
