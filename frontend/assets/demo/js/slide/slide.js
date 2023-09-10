
let slides = document.querySelectorAll('.slides .slide');
let slide_div = document.querySelector('.slides .slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})


let prevImg = document.querySelector('.arrows .arrow.left');
let nextImg = document.querySelector('.arrows .arrow.right');

prevImg.addEventListener('click', function(){
    console.log(counter);
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

slide_div.addEventListener('transitionend', function(){ 

    if(slides.length === counter){
        slides[0].style.transition = "none";
        console.log(counter);
        alert('Ok')
    }

    if(counter === -1){
        // slides[0].style.transition = "none";
        console.log(counter);
        alert('SDIf')
    }

})