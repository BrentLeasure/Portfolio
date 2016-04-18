function NavbarClick(id){
	if(id === "about-me"){
		document.getElementById("about-me").classList.add('active-button');
		document.getElementById('skills').classList.remove('active-button');
		document.getElementById('projects').classList.remove('active-button');
	}else if(id === "skills"){
		document.getElementById('about-me').classList.remove('active-button');
		document.getElementById("skills").classList.add('active-button');
		document.getElementById('projects').classList.remove('class');
	}else if(id === "projects"){
		document.getElementById('about-me').classList.remove('active-button');
		document.getElementById('skills').classList.remove('active-button');
		document.getElementById("projects").classList.add('active-button');
	}
}