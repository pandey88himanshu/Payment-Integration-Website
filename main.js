let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const headtext = document.querySelector(".headText");
const section1 = document.querySelector(".first")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    headtext.classList.toggle("hidden");
    headtext
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})
