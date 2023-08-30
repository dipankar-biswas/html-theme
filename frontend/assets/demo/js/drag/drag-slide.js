let tabsBox = document.querySelector('.tabs-box');
let tab = document.querySelectorAll('.tabs-box .tab');
let icons = document.querySelectorAll('.arrow .icon');
let isDragging = false;


icons.forEach(icon => {
    icon.addEventListener('click', function(){
        let scrollWidth = tabsBox.scrollLeft += icon.className === "icon left" ? -340 : 340;
    })
});

