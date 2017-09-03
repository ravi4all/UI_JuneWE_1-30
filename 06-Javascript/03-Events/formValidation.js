window.addEventListener("load", init)

var box_1;
var box_2;
var box_3;

function init(){
    box_1 = document.getElementById("box_1");
    box_2 = document.getElementById("box_2");
    box_3 = document.getElementById("box_3");
    
    box_1.addEventListener("blur", blankCheck);
    box_2.addEventListener("change", checkPwdLength);
    box_3.addEventListener("change", confirmPassword);
}

function blankCheck(){
    var err_1 = document.getElementById("err1")
    if (box_1.value.length == 0){
        err_1.innerHTML = "Please fill this field";
    }
    else {
        err_1.innerHTML = "";
    }
}

function checkPwdLength(){
    var err_2 = document.getElementById("err2");
    if (box_2.value.length == 0){
        err_2.innerHTML = "Please fill this field";
    }
    else if(box_2.value.length <= 4 && box_2.value.length > 0){
        err_2.innerHTML = "Weak";
    }
    else if(box_2.value.length <= 8 && box_2.value.length > 4){
        err_2.innerHTML = "Good";
    }
    else {
        err_2.innerHTML = "Strong";
    }
}

function confirmPassword(){
    var err_3 = document.getElementById("err3");
    
    if(box_2.value == box_3.value){
        err_3.innerHTML = "Password Match";
    }
    else {
        err_3.innerHTML = "Password do not match";
    }
    
}