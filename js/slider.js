const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const dots = document.querySelectorAll('.dot');

let previousI = 0;
let currentI = 0;

// show slide and highlight dot
function showSlide(i){
    // show slide
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${i * slideWidth}px)`;

    // highlight dot
    dots[currentI].classList.remove('active');
    dots[i].classList.add('active');
    currentI = i;
}

// auto slide every 3 seconds
setInterval(() => {
    previousI = (previousI + 1) % images.length;
    showSlide(previousI);
}, 3000);