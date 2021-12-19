    var images = document.querySelectorAll(".wrapper .image img");
    var gallery = document.querySelector(".gallery");
    var galleryImage = document.querySelector(".gallery-inner img");

    var btnclose = document.querySelector(".gallery .close");
    var next = document.querySelector(".gallery .next");
    var prev = document.querySelector(".gallery .prev");
    let currentIdx = 0;

    window.onload = main;
function main(){
    images.forEach((img, index) =>{
        img.addEventListener("click", ()=>{
            currentIdx = index;
            showGallery();
        });
    });
}

function showGallery(){
    currentIdx == images.length - 1 
    ? next.classList.add("hide")
    : next.classList.remove("hide");

    currentIdx == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");

    gallery.classList.add("show");
    galleryImage.src = images[currentIdx].src;
}

btnclose.addEventListener("click",()=>{
    gallery.classList.remove("show");
});

next.addEventListener("click",()=>{
    currentIdx != images.length-1
    ? currentIdx++
    :undefined;
    showGallery();
});

prev.addEventListener("click",()=>{
    currentIdx != 0
    ? currentIdx --
    :undefined;
    showGallery();
});
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 27) gallery.classList.remove("show");
});