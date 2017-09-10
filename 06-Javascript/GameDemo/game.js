window.addEventListener("load",init);

var move_x = 50;

function init(){
    game_board = document.getElementById("game_board");
    screen = document.getElementById("background");
    player = document.getElementById("player");
    game_board.addEventListener("keydown", check_key);
    game_board.addEventListener("keyup",change_image);
    game_board.addEventListener("keyup",check_key);
}

function check_key(event){
    if (event.keyCode == 39){
        player.style.transform = 'rotateY(0deg)';
        move_player();
        player.innerHTML = '<img src="assets/hulk5-18463.gif" alt="image"/>'
    }
    else if(event.keyCode == 37){
        change_player_direction()
        player.innerHTML = '<img src="assets/hulk5-18463.gif" alt="image"/>'
    }
    else if(event.keyCode == 32) {
        /*jump_image()*/
        player.innerHTML = '<img src="assets/hulksmash2.gif" alt="image"/>'
        setTimeout(function(){
            player.innerHTML = '<img src="assets/01-img.png" alt="image"/>';
        },2000)
    }

}

function change_image(){
    player.innerHTML = '<img src="assets/01-img.png" alt="image"/>';
}

function move_player(){
    /*screen.style.backgroundPositionX = -move_x+"px";*/
    screen.style.transform = 'translateX'+'('+-move_x+"px"+')';
    move_x += 50;
}

function change_player_direction(){
    player.style.transform = 'rotateY(180deg)';
    /*screen.style.backgroundPositionX = -move_x+"px";*/
    screen.style.transform = 'translateX'+'('+-move_x+"px"+')';
    move_x -= 50;
}

/*
function jump_image(){
    setTimeout(function(){
        player.innerHTML = '<img src="assets/hulksmash2.gif" alt="image"/>';
    },3000);
}*/
