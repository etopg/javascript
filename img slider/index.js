const previousbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const slider = document.getElementById('slider')
const slides = document.getElementById('slides')


previousbtn.addEventListener('click',prev)
nextbtn.addEventListener('click', next)

let sliderindex = 0;
const slidewidth = slider.clientWidth;
console.log(slidewidth)
function prev(){
 sliderindex--;
 if(sliderindex <0){
    sliderindex = 5
 }
 slides.style.transform = `translateX(-${slidewidth * sliderindex}px)`
 slides.style.transition = 'ease-in-out 2s'
};

function next(){
  sliderindex++;
  if(sliderindex >5){
    sliderindex = 0
  }
  slides.style.transform = `translateX(-${slidewidth * sliderindex}px)`
  slides.style.transition = 'ease-in-out 2s'
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
