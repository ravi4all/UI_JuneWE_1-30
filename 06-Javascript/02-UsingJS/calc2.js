window.addEventListener("load", init)

var num_1;
var num_2;

var result = 0;

function init(){
    num_1 = document.getElementById("num1");
    num_2 = document.getElementById("num2");
    /*document.getElementById("add").addEventListener("click", calc);
    document.getElementById("sub").addEventListener("click", calc);
    document.getElementById("div").addEventListener("click", calc);
    document.getElementById("mul").addEventListener("click", calc);*/
    
    var buttons = document.getElementsByTagName("button");
    
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
    
}

function calc(){
    opr = event.srcElement.innerHTML;
    console.log(opr);
    /*console.log(event.srcElement);*/
    expression = num_1.value + opr + num_2.value;
    document.getElementById("result").innerHTML = eval(expression);
    
}



/*function add(){
    result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}

function sub(){
    result = parseInt(num_1.value) - parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}

function div(){
    result = parseInt(num_1.value) / parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}

function mul(){
    result = parseInt(num_1.value) * parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}*/