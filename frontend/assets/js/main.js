// Overlay Div 
let site_overlay = document.querySelector('.site-overlay');


// ================= Site Search ===================
let search_btn = document.querySelector('header .navigation .search .search-btn');
let search_div = document.querySelector('header .navigation .search .search-slide');
if(search_btn && search_div){
    window.addEventListener('mouseup',function(event){
        if(search_btn == event.target.closest(".search .search-btn")){
            search_btn.closest(".search").classList.toggle('active');
            search_div.classList.toggle('show');
        }else{
            if(event.target == search_div || event.target.closest(".search-slide") == search_div){
                return false;
            }else if(event.target != search_div && event.target.parentNode != search_div){
                search_div.classList.remove("show");
            }
        }
    }); 
}


// ================= Product Category ===================
// Filter Open/Close
let filter_open_btn = document.querySelector('.category-product .right-section .filter-open');
let filter_close_btn = document.querySelector('.category-product .left-section .filter-close');
let filter_section = document.querySelector('.category-product .left-section');

if(filter_open_btn && filter_close_btn && filter_section){
    filter_open_btn.addEventListener('click',function(){
        siteOverlay();
        site_overlay.classList.add('show');
        filter_section.classList.add('show');
    });
    filter_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        filter_section.classList.remove('show');
    });
}



// ================= Product Details Social Media Share ===================
let product_share_btn = document.querySelector('.pdt-details .details .shares .social-share .share-btn');
let product_share_div = document.querySelector('.pdt-details .details .shares .social-share .share');
if(product_share_btn && product_share_div){
    window.addEventListener('mouseup',function(event){
        if(product_share_btn == event.target.closest(".social-share .share-btn")){
            product_share_div.classList.toggle('show');
        }else{
            if(event.target == product_share_div || event.target.closest(".share.social") == product_share_div){
                return false;
            }else if(event.target != product_share_div && event.target.parentNode != product_share_div){
                product_share_div.classList.remove("show");
            }
        }
    }); 
}


// ================= User Panel ===================
let user_panel_open_btn = document.querySelector('.mobile-tools .user-panel-open-btn');
let user_panel_close_btn = document.querySelector('.head .user-panel-close-btn');
let user_panel_aside = document.querySelector('.user-panel .user-aside');
if(user_panel_open_btn && user_panel_aside){
    user_panel_open_btn.addEventListener('click',function(){
        mobileIconText(this);
        siteOverlay();
        site_overlay.classList.add('show');
        user_panel_aside.classList.add('show');
    });
}
if(user_panel_close_btn && user_panel_aside){
    user_panel_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        user_panel_aside.classList.remove('show');
    });
}

// ================= Mobile Tools Categories Slide ===================
let categories_slide_open_btn = document.querySelector('.mobile-tools .categories-slide-open-btn');
let categories_slide_close_btn = document.querySelector('.heading .categories-slide-close-btn');
let categories_aside = document.querySelector('header .navigation .categories');
if(categories_slide_open_btn && categories_slide_close_btn && categories_aside){
    categories_slide_open_btn.addEventListener('click',function(){
        mobileIconText(this);
        siteOverlay();
        site_overlay.classList.add('show');
        categories_aside.classList.add('show');
    });
    categories_slide_close_btn.addEventListener('click',function(){
        site_overlay.classList.remove('show');
        categories_aside.classList.remove('show');
    });
}

// Mobile Icon Text Active/Remove
function mobileIconText(_this){
    // All active item link remove
    let mobile_tools_icon = document.querySelectorAll(".mobile-tools .items .item .link .icon");
    let mobile_tools_txt = document.querySelectorAll(".mobile-tools .items .item .link .txt");
    for (let i = 0; i < mobile_tools_icon.length; i++) {
        mobile_tools_icon[i].classList.remove("active");
        mobile_tools_txt[i].classList.remove("active");
    }

    _this.querySelector('.icon').classList.add('active')
    _this.querySelector('.txt').classList.add('active')
}



// ================= Site Overlay ===================
// Overlay Click All Close
site_overlay.addEventListener('click',function(){
    this.classList.remove("show");
    siteOverlay();
});

function siteOverlay(){
    if(filter_section){
        filter_section.classList.remove("show");
    }
    if(user_panel_aside){
        user_panel_aside.classList.remove("show");
    }
    if(categories_aside){
        categories_aside.classList.remove("show");
    }
}



// ================= Cart List Short ===================
let cart_view_btn = document.querySelector('header .logo-bar .cart .link');
let cart_view_div = document.querySelector('header .logo-bar .cart .cart-lists');
if(cart_view_btn && cart_view_div){
    window.addEventListener('mouseup',function(event){
        if(cart_view_btn == event.target.closest(".cart .link")){
            cart_view_div.classList.toggle('show');
        }else{
            if(event.target == cart_view_div || event.target.closest(".cart-lists") == cart_view_div){
                console.log(event.target);
                return false;
            }else if(event.target != cart_view_div && event.target.parentNode != cart_view_div){
                cart_view_div.classList.remove("show");
            }
        }
    }); 
}

// ================= User Options/Setting ===================
let user_option_btn = document.querySelector('header .navigation nav .navbar-nav .nav-item.user-set .nav-link');
let user_option_div = document.querySelector('header .navigation nav .navbar-nav .nav-item.user-set .user-options');
let user_option_div_head = document.querySelector('header .navigation nav .navbar-nav .nav-item.user-set .user-options .head');
if(user_option_btn && user_option_div){
    window.addEventListener('mouseup',function(event){
        if(user_option_btn == event.target){
            user_option_div.classList.toggle('show');
        }else{
            if(event.target == user_option_div_head || event.target.closest(".head") == user_option_div_head){
                return false;
            }else if(event.target != user_option_div && event.target.parentNode != user_option_div){
                user_option_div.classList.remove("show");
            }
        }
    }); 
}











// let acc = document.querySelectorAll(".categories .menus .item.tree .link");
// let i;
// // acc[0].classList.add("active");
// // acc[0].nextElementSibling.style.display = "block";
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


