let tabsBox = document.querySelector('.tabs-box');
let tabAlls = document.querySelectorAll('.tabs-box .tab');
let icons = document.querySelectorAll('.arrow .icon');
let isDragging = false;


handleIcon = (scrollValue) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    icons[0].style.display = scrollValue <= 0 ? 'none' : 'flex';
    icons[1].style.display = maxScrollableWidth - scrollValue <= 1 ? 'none' : 'flex';
}

icons.forEach(icon => {
    icon.addEventListener('click', function(){
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.className === "icon left" ? -340 : 340;
        handleIcon(scrollWidth);
    })
});

tabAlls.forEach(item => {
    item.addEventListener('click', function(){
        tabsBox.querySelector('.active').classList.remove('active');
        item.classList.add('active');
    })
});

let dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add('dragging');
    tabsBox.scrollLeft -= e.movementX;
    handleIcon(tabsBox.scrollLeft);
}

let dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove('dragging');
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", dragStop);

