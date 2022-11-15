var ul = document.querySelector('ul');
var input = document.querySelector('input');
var btn = document.querySelector('.remove_all');
let tags = ['Manchester United','EPL'];

function render() {
    ul.innerHTML='';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        ul.innerHTML +=`
                        <li>
                            ${tag}
                            <i class='bx bx-x' onclick='removeTag(${i})'></i>
                        </li> 
        `
    }
    ul.appendChild(input);
    input.focus();
}
function removeTag(e) {
    tags.splice(e,1);
    render();
}
render();
input.addEventListener('keydown',function(e){
    if (e.key=='Enter'){
        tags.push(input.value.trim());
        render();
        input.value='';
    }
})
btn.addEventListener('click',function() {
    tags= [];
    render();
})