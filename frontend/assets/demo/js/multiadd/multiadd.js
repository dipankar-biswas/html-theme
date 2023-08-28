let imageSelect = document.querySelectorAll('.thumbnail .imageSelect');
let fileOpen = document.querySelectorAll('.thumbnail .fileOpen');
let ImageRemove = document.querySelectorAll('.thumbnail .ImageRemove');

imageSelect.forEach((select,index) => {
    select.addEventListener('click', function(){
        this.closest('.thumbnail').querySelector('.fileOpen').click();
    })
});


fileOpen.forEach((file,index) => {
    file.addEventListener('change', function(event){
        let isThis = this;
        let reader = new FileReader();
        reader.onload = function(){
            ImageRemove[index].style.display = "block";
            isThis.closest('.thumbnail').querySelector('.imagePreview').style.display = "block";
            let imagePreview = isThis.closest('.thumbnail').querySelector('.imagePreview');
            imagePreview.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]); 
    })
});

ImageRemove.forEach((remove,index) => { 
    remove.addEventListener('click', function(){
        remove.style.display = "none";
        this.closest('.thumbnail').querySelector('.fileOpen').value = null;
        this.closest('.thumbnail').querySelector('.imagePreview').src = null;
        this.closest('.thumbnail').querySelector('.imagePreview').style.display = "none";
    })
});
