var childs = document.querySelectorAll('.gallery_child');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var gallery = document.querySelector('.gallery');
var currentIndex =3;

function showChildByNext() {
    if (currentIndex==0){
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
    childs[currentIndex].classList.remove('small');
    childs[currentIndex-1].classList.add('small');

    if (currentIndex != childs.length-1) {
        next.classList.remove('hide');
        childs[currentIndex+1].classList.add('small');
        childs[currentIndex+1].classList.remove('hide');
        childs[currentIndex-2].classList.add('hide');
        childs[currentIndex-2].classList.remove('small');
    } else {
        next.classList.add('hide');
    }
    
    
}
function showChildByPrev() {
    if (currentIndex==childs.length-1){
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    childs[currentIndex].classList.remove('small');
    childs[currentIndex+1].classList.add('small');

    if (currentIndex != 0) {
        prev.classList.remove('hide');
        childs[currentIndex-1].classList.add('small');
        childs[currentIndex-1].classList.remove('hide');
        childs[currentIndex+2].classList.remove('small');
        childs[currentIndex+2].classList.add('hide');
    } else {
        prev.classList.add('hide');
    }
}
next.addEventListener('click', function(){
    currentIndex++;
    showChildByNext();
});
prev.addEventListener('click', function(){
    currentIndex--;
    showChildByPrev();
});