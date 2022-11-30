var input = document.querySelector('.container form input');
var btn = document.querySelector('.container form button');
var form = document.querySelector('.container form');
var todos = document.querySelector('.todos')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let val = input.value.trim();
    if (val) {
        addToDoElement({
            text:val,
            
        });
        saveTodoList();
    }
    input.value='';
})
function addToDoElement(todo) {
    var li = document.createElement('li');
    li.innerHTML = `
                    <span>${todo.text}</span>
                    <i class='bx bx-trash'></i>
    `;
    if (todo.status == 'complete') {
        li.setAttribute('class','complete');
    }
    li.addEventListener('click', function() {
        this.classList.toggle('complete');
        saveTodoList();
    })
    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove();
        saveTodoList();
    })
    todos.appendChild(li);
}
function saveTodoList() {
    let list = document.querySelectorAll('li');
    let storage = [];
    list.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');
        console.log(status);
        storage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList',JSON.stringify(storage));
}
function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item){
        addToDoElement(item);
    })
}
init();