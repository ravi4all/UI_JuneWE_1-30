
document.getElementById("btn").addEventListener("click", function(){
    num_1 = parseInt(document.getElementById("num1").value);
    num_2 = parseInt(document.getElementById("num2").value);
    result = num_1 + num_2;
    document.getElementById("result").innerHTML = result;
})

/*function add(){
    num_1 = parseInt(document.getElementById("num1").value);
    num_2 = parseInt(document.getElementById("num2").value);
    result = num_1 + num_2;
    document.getElementById("result").innerHTML = result;
}*/