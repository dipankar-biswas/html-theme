let product_img = document.querySelector('.image-zoom .image img');
let lens = document.querySelector('.image-zoom .image .magnifier-lens');
let magnified_img = document.querySelector('.image-zoom .details .magnified-img');

function magnify(product_img,magnified_img){
    lens.addEventListener('mousemove',movelens);
    product_img.addEventListener('mousemove',movelens);
    // Take mouse out of Image
    lens.addEventListener('mouseout', leavelens);
}

function movelens(e){
    let x, y, cx, cy;
    let product_img_rect = product_img.getBoundingClientRect();
    x = e.pageX - product_img_rect.left - lens.offsetWidth / 2;
    y = e.pageY - product_img_rect.top - lens.offsetHeight / 2;
    // console.log("X : "+e.pageX+" Y : "+e.pageY);
    
    let max_xpos = product_img_rect.width - lens.offsetWidth;
    let max_ypos = product_img_rect.height - lens.offsetHeight;
    
    if(x > max_xpos) x = max_xpos;
    if(x < 0) x = 0;
    
    if(y > max_ypos) y = max_ypos;
    if(y < 0) y = 0;

    lens.style.cssText = `top: ${y}px; left: ${x}px`;

    // Calculate the Magnified_Img & Lens Aspect Ratio
    cx = magnified_img.offsetWidth / lens.offsetWidth;
    cy = magnified_img.offsetHeight / lens.offsetHeight;

    magnified_img.style.backgroundImage = `url(${product_img.src})`;
    magnified_img.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    magnified_img.style.backgroundSize = `${product_img_rect.width * cx}px ${product_img_rect.height * cy}px`;
    magnified_img.style.backgroundRepeat = `no-repeat`;

    lens.classList.add('active');
    magnified_img.classList.add('active');
}

function leavelens(){
    lens.classList.remove('active');
    magnified_img.classList.remove('active');
}

magnify(product_img,magnified_img);