const imageLists = document.querySelectorAll(".image");
const sliders = document.querySelectorAll(".slider");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let activeImage = 0;

const slideLeft = () => {
  activeImage--;

  if(activeImage < 0)
    activeImage = imageLists.length - 1;

  setActiveImage();    
}

const slideRight = () => {
  activeImage++;

  if(activeImage > imageLists.length - 1)
    activeImage = 0;

  setActiveImage();    
}

arrowLeft.addEventListener("click", () => slideLeft());
arrowRight.addEventListener("click", () => slideRight());

sliders.forEach((slide, idx) => slide.addEventListener("click", () => handleSlider(idx)));

function setActiveImage(){
  handlePrevActive();

  imageLists[activeImage].classList.add("active-img");
  sliders[activeImage].classList.add("active-slider");
}

function handleSlider(idx){
  handlePrevActive();

  sliders[idx].classList.add("active-slider");
  imageLists[idx].classList.add("active-img");
}

function handlePrevActive(){
  const activeSlide = document.querySelector(".active-slider");
  const activeImage = document.querySelector(".active-img");

  activeSlide.classList.remove("active-slider");
  activeImage.classList.remove("active-img");
}