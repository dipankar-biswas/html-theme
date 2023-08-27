
let slides = document.querySelectorAll('.slides .slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})


let prevImg = document.querySelector('.arrows .arrow.left');
let nextImg = document.querySelector('.arrows .arrow.right');

prevImg.addEventListener('click', function(){
    console.log(slides.length);
    counter--;
    slideImage();
})

nextImg.addEventListener('click', function(){
    counter++;
    slideImage();
})


let slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}