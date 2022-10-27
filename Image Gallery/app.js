var imgs = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var gallery = document.querySelector('.gallery');
var close = document.querySelector('.bx-x');
var gallery_img = document.querySelector('.gallery_inner img');
var currentIndex =0;
function show_gallery() {
    if (currentIndex==0){
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
    if (currentIndex==imgs.length-1){
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    gallery_img.src = imgs[currentIndex].src;
    gallery.classList.add('show');
    
}
next.addEventListener('click', function(){
    currentIndex++;
    show_gallery();
});
prev.addEventListener('click', function(){
    currentIndex--;
    show_gallery();
});
imgs.forEach((item,index)=>{
    item.addEventListener('click',function() {
        currentIndex = index;
        show_gallery();
    });
});
close.addEventListener('click',function(){
    gallery.classList.remove('show');
});
