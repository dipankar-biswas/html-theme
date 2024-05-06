let tabs = document.querySelectorAll('.gallery-tabs .tabs .tab');
let gellaries = document.querySelectorAll(`.gellaries .item`);

if(tabs){
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.addEventListener('click', function(e){
            document.querySelector('.gallery-tabs .tabs .tab.active').classList.remove("active");
            this.classList.add("active");
            let tab_name = this.getAttribute('data-name');
            
            
            gellaries.forEach(card => {
                if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
                    return card.classList.replace("hide", "show");
                }
                card.classList.add("hide");
            });
        });
    }
}