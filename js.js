const NavSlide = function(){
	const nice = document.querySelector('.nice');
	const Nav = document.querySelector('.Nav-links');
	const NavLinks = document.querySelectorAll('.Nav-links li');

	
	nice.addEventListener('click', function(){
		//Toggle Nav
		Nav.classList.toggle('Nav-active');
	
		//Animate Links
	NavLinks.forEach((link, index) =>{
		if(link.style.animation){
			link.style.animation = '';
		}else{
			link.style.animation = `NavLinkFade 0.5s ease forwards ${index / 7 + 2}s
		}
	});

	//nice animation
	nice.classList.toggle('toggle');
});

}
NavSlide();