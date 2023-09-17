
let slide_div = document.querySelector('.slides');
let slideWidth = slide_div.querySelector('.slide').offsetWidth;
let slides = [...slide_div.children];

let counter = 0;
let slideBtn = document.querySelectorAll('.arrows .arrow');


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
slides.slice(-slideWidth).reverse().forEach(item => {
    slide_div.insertAdjacentHTML("afterbegin", item.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
slides.slice(0, slideWidth).forEach(item => {
    slide_div.insertAdjacentHTML("beforeend", item.outerHTML);
});

// slide_div.classList.add("no-transition");
// slide_div.style.left = slide_div.offsetWidth;
// slide_div.classList.remove("no-transition");
// console.log(slide_div.offsetWidth);



slideBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        btn.className == 'arrow right' ? counter++ : counter--;
        slideImage();
    })
})

let slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
    // infiniteScroll();
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(slide_div.style.left === 0) {
        slide_div.classList.add("no-transition");
        slide_div.style.left = slide_div.offsetWidth - (2 * slide_div.offsetWidth);
        slide_div.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(slide_div.style.left) === slide_div.style.left - slide_div.offsetWidth) {
        slide_div.classList.add("no-transition");
        slide_div.style.left = slide_div.offsetWidth;
        slide_div.classList.remove("no-transition");
    }
}


slide_div.addEventListener("scroll", infiniteScroll);
