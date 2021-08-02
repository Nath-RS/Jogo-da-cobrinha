let canvas = document.getElementById("fundo");
let context = canvas.getContext("2d");
let box = 32;

let fundo = "#8470FF";


function criarBG() {
    context.fillStyle = fundo;
    context.fillRect(4,4, 16 * box , 16 * box);
}

criarBG();