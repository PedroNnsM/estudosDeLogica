var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var cores = ['blue', 'red', 'green', 'orange', 'violet', 'pink', 'white', 'black', 'darkorange']
var indiceCorAtual = 0; // começa com blue

  var raio = 10;
// funções anonimas associadas diretamente a uma variavel 
function desenhaCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
  
    
    // if (evento.shiftKey && evento.altKey) {

    //     alert('Só aperte uma tecla por vez, por favor!');

    // } else if(evento.shiftKey && raio + 10 <= 40) {
    //     raio = raio + 10;

    // } else if(evento.altKey && raio - 5 >= 10) {
    //     raio = raio - 5;

    // }
    if(desenha) {
        pincel.fillStyle = cores[indiceCorAtual];
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);
    }
}

tela.onclick = desenhaCirculo;

function mudaCor() {

    indiceCorAtual++;
    if(indiceCorAtual >= cores.length) {
        indiceCorAtual = 0;
    }

    return false;
}

tela.oncontextmenu = mudaCor;

tela.onmousemove = desenhaCirculo;

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;
