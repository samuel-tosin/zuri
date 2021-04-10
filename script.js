const menuBars = document.getElementById('menu-bars');
const navLinks = document.getElementById('nav-links');
const body = document.getElementById('body');

function toggleNav() {
	// toggle menubars open/closed & add navLinks class
    menuBars.classList.toggle('change')
    navLinks.classList.add('nav-links');

     if (menuBars.classList.contains('change')) {
      navLinks.classList.add('nav-links');
      navLinks.hidden = false;
    
     } else {
     	navLinks.classList.remove('nav-links');
     	navLinks.hidden = true;
  
     }
 
}

function media(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
  	navLinks.classList.remove('nav-links');
     navLinks.hidden = true;
  } else {
     navLinks.classList.add('nav-links');
      navLinks.hidden = false;
  }
}

var mediaQuery = window.matchMedia("(max-width: 600px)")
media(mediaQuery) // Call listener function at run time
mediaQuery.addListener(media) /

menuBars.addEventListener('click', toggleNav);

