window.addEventListener("load", init);
var box_1;
var box_2;
var box_3;
var box_4;
function init(){
    box_1 = document.getElementById("box_1");
    box_2 = document.getElementById("box_2");
    box_3 = document.getElementById("box_3");
    box_4 = document.getElementById("box_4");
    
    document.getElementById("create").addEventListener("click", addItem);
}

function addItem(){
    var ul = document.getElementById("itemList");
    var li = document.createElement('li');
    li.innerHTML = box_1.value + box_2.value + box_3.value + box_4.value;
    ul.appendChild(li);
    li.addEventListener("click", markItem);
}

function markItem(){
    event.srcElement.classList.toggle("select");
}