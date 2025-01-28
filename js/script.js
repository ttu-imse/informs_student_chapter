const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0; // Track the current slide index

function moveToSlide(index) {
    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Update the current index
    currentIndex = index;
}

function changeSlide(step) {
    const totalSlides = dots.length;

    // Calculate the new index
    let newIndex = currentIndex + step;

    // Wrap around if index goes out of bounds
    if (newIndex < 0) {
        newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
        newIndex = 0;
    }

    moveToSlide(newIndex);
}
