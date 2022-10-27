var btn = document.querySelector('.btn');
var box = document.querySelector('.search_box');

btn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
})