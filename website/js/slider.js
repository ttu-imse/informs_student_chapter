const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
let slider_interval;


// show slide with index i
function showSlide(i) {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${i * slideWidth}px)`;
}


// create slider interval
function createSliderInterval() {
    // 4s interval
    time = 4000;
    // create interval
    slider_interval = setInterval(() => {
        index = (index + 1) % images.length;
        showSlide(index);
    }, time);
}


// reset slider interval
function resetInterval() {
    clearInterval(slider_interval);
    createSliderInterval();
}


// navigation buttons for slider
nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide(index);
    resetInterval();
});
prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
    resetInterval();
});


// create slider interval
createSliderInterval();