var sizeWidth = window.innerWidth - 200;
var sizeHeight = window.innerHeight - 150;
const test = document.getElementById("no");
const yes = document.getElementById("yes");
var y = window.innerHeight/2;
var x = window.innerWidth/2;

window.addEventListener('resize', function(){
    sizeWidth = window.innerWidth - 200;
    sizeHeight = window.innerHeight - 100;
})

test.addEventListener('mouseover', function(){
    test.style.left = (Math.floor(Math.random() * sizeWidth) + 10) +"px"
    test.style.top = (Math.floor(Math.random() * sizeHeight) + 10) +"px"
})

test.addEventListener('click', function(){
    test.style.left = (Math.floor(Math.random() * sizeWidth) + 10) +"px"
    test.style.top = (Math.floor(Math.random() * sizeHeight) + 10) +"px"
})

var mouse_monitor = function(e) {
    x = e.pageX - 50;
    y = e.pageY - 75;
}

window.addEventListener("mousemove", mouse_monitor);
yes.addEventListener("click", click)


function click(){
    alert("Anh biết em yêu anh mà ❤");
}