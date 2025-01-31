const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
});

// Auto-slide every 3 seconds (optional)
setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
}, 3000);