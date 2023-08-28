let imageSelect = document.querySelector('.thumbnail .imageSelect');
let fileOpen = document.querySelector('.thumbnail .fileOpen');
let ImageRemove = document.querySelector('.thumbnail .ImageRemove');

imageSelect.addEventListener('click', function(){
    this.closest('.thumbnail').querySelector('.fileOpen').click();
})

fileOpen.addEventListener('change', function(event){
    let isThis = this;
    let reader = new FileReader();
    reader.onload = function(){
        ImageRemove.style.display = "block";
        isThis.closest('.thumbnail').querySelector('.imagePreview').style.display = "block";
        let imagePreview = isThis.closest('.thumbnail').querySelector('.imagePreview');
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]); 
})

ImageRemove.addEventListener('click', function(){
    ImageRemove.style.display = "none";
    this.closest('.thumbnail').querySelector('.fileOpen').value = null;
    this.closest('.thumbnail').querySelector('.imagePreview').src = null;
    this.closest('.thumbnail').querySelector('.imagePreview').style.display = "none";
})
