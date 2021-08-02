let canvas = document.getElementById("fundo");
let context = canvas.getContext("2d");
let box = 32;
let tamCobrinha = [];
tamCobrinha[0] = {
   x: 8 * box,
   y: 8 * box 
}

// cores
let fundo = "#8470FF";
let corCobrinha = "#8A2BE2";
let corBordaCobrinha = "#FFF";

//fundo do jogo
function criarBG() {
    context.fillStyle = fundo;
    context.fillRect(4,4, 16 * box , 16 * box);
}

//Cobrinha do jogo
var cobrinha = () => {
    for(i=0 ; i < tamCobrinha.length; i++){
        context.fillStyle = corCobrinha;
        context.fillRect(tamCobrinha[i].x, tamCobrinha[i].y, box, box);
    }
};

criarBG();
cobrinha();