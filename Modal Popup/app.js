var open_modal = document.querySelector('.open_modal_btn');
var close_icon = document.querySelector('.bx-x');
var close_btn = document.querySelector('.footer button');
var modal = document.querySelector('.modal');
function addClassModal(){
    modal.classList.toggle('hide');
}
open_modal.addEventListener('click', addClassModal);
modal.addEventListener('click',function(e){
    if (e.target == e.currentTarget) {
        addClassModal();
    }
})
close_btn.addEventListener('click',addClassModal);
close_icon.addEventListener('click',addClassModal);