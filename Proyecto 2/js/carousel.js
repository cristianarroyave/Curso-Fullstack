let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');
let images = document.querySelectorAll('.carousel .slide img');
let rightArrow = document.querySelector('.right-arrow');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;
let heightCarousel

function loadSlides() {

    carousel.style.height = '90vh';
    heightCarousel = carousel.offsetHeight; 
    console.log(heightCarousel);

    for (i=0; i < images.length - 1; i++) {
        if (images[i].offsetHeight < heightCarousel) {
            heightCarousel = images[i].offsetHeight;
            console.log(heightCarousel);
        }
    }



    carousel.style.height = heightCarousel + 'px';

    for (i=0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
}

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    loadSlides();
}

function closeModal() {
    overlay.style.display = 'none'
    carousel.style.display = 'none';
}

function nextSlide() {
    updateArrowsState(1)
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}

function prevSlide() {
    updateArrowsState(-1)
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px';
    }
}

function updateArrowsState(e) {
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }

    if(counter === slides.length - 2) {
        rightArrow.style.display = 'none'
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';
    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}