var btn = document.getElementById("my-btn");
var link = document.getElementById("dark");

btn.addEventListener("click", function() { ChangeTheme();});

function ChangeTheme() {
	let lightTheme = "assets/css/stile.css";
	let darkTheme = "assets/css/stile1.css";

	var currTheme = link.getAttribute("href");
	var theme = "";

	if(currTheme == lightTheme) {
		currTheme = darkTheme;
		theme = "dark";
	}
	else 
	{
		currTheme = lightTheme;
		theme = "light";
	}
	link.setAttribute("href", currTheme);

}

let slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("banner");
    var dots = document.getElementsByClassName("dots");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1; 
    }

    for(i= 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides,5000);
}

