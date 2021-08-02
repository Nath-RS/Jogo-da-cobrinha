let canvas = document.getElementById("fundo");
let context = canvas.getContext("2d");
let borda = canvas.getContext("2d");
let box = 32;
let tamCobrinha = [];
tamCobrinha[0] = {
   x: 8 * box,
   y: 8 * box 
};

//direçoes
let direction;

//comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

// cores
let fundo = "#8470FF";
let corCobrinha = "#8A2BE2";
let corBordaCobrinha = "#FFF";

//fundo do jogo
function criarBG() {
    borda.fillStyle = "#333";
    borda.fillRect(0,0, 18 * box, 18 * box);
    context.fillStyle = fundo;
    context.fillRect(4,4, 16 * box , 16 * box);

}

//Cobrinha do jogo
let cobrinha = () => {
    for(i=0 ; i < tamCobrinha.length; i++){
        context.fillStyle = corCobrinha;
        context.fillRect(tamCobrinha[i].x, tamCobrinha[i].y, box, box);
    }
    
};

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x,food.y, box, box);
}

document.addEventListener('keydown',update);

function update(event){
    if(event.keyCode == 37 && direction != "right"){ direction = "left";}
    if(event.keyCode == 38 && direction != "down"){ direction = "up";}
    if(event.keyCode == 39 && direction != "left"){ direction = "right";}
    if(event.keyCode == 40 && direction != "up"){ direction = "down";}
    
    
};


let iniciarjogo = () =>{


    if(tamCobrinha[0].x > 15 * box && direction == "right")
    { tamCobrinha[0].x = 0;}
    
    if(tamCobrinha[0].x < 0 && direction == "left")
    { tamCobrinha[0].x = 16 * box;}
    
    if(tamCobrinha[0].y > 15 * box && direction == "down")
    { tamCobrinha[0].y = 0;}
    
    if(tamCobrinha[0].y < 0 && direction == "up")
    { tamCobrinha[0].y = 16 * box;}
    
    for(i = 1; i < tamCobrinha.length; i++){
        if(tamCobrinha[0].x == tamCobrinha[i].x  && tamCobrinha[0].y == tamCobrinha[i].y){
            clearInterval(jogo);
            alert("Game over :(")
        }
    }
       

    criarBG();
    cobrinha();
    drawFood();

    let cobrinhaX = tamCobrinha[0].x;
    let cobrinhaY = tamCobrinha[0].y;

    if(direction == "right"){ cobrinhaX += box;}
    if(direction == "left"){ cobrinhaX -= box;}
    if(direction == "up"){ cobrinhaY -= box;}
    if(direction == "down"){ cobrinhaY += box;}


    if(cobrinhaX != food.x || cobrinhaY != food.y){
        tamCobrinha.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box 
    }

    let newHead = {
        x: cobrinhaX,
        y: cobrinhaY
    }

    tamCobrinha.unshift(newHead);


};
/*
let  velocidade = prompt("escolha sua velocidade");
*/

let jogo = setInterval(iniciarjogo,100);

 