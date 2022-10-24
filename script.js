const gifs = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let baralho = [];
let contador = 0;
let countJogadas = 0;
let finalizador = 0;

let quant = Number(prompt("Digite o número de cartas que deseja(apenas números pares de 4 a 14):"));
while(quant % 2 !== 0 || quant<4 || quant>14){
    alert("Número inválido!");
    quant = Number(prompt("Digite o número de cartas que deseja(apenas números pares de 4 a 14):"));
}

gifs.sort(comparador);

for(let i=0;i<(quant/2);i++){
    baralho.push(gifs[i]);
    baralho.push(gifs[i]);
}
baralho.sort(comparador);


criarCartas();
function criarCartas() {
    const campo = document.querySelector(".jogo");
    for(let i=0;i<quant;i++){
        const li = ` 
            <li onclick="virar(this),contadorDeJogadas()">
                <img class="carta back" src="./imagens/back.png" />
                <img class="carta aberta" src="./imagens/${baralho[i]}.gif" />
            </li>
            `;
        campo.innerHTML += li;
    }
}

function virar(elemento) {
    if(elemento.classList.contains("acerto")){
        return;
    }
    elemento.classList.add('virada');
    contador++;
    let cartasselecionadas = document.querySelectorAll('.virada .aberta');
    if (contador == 2){
        contador = 0;
        // se as cartas forem diferentes
        if(!(cartasselecionadas[0].src == cartasselecionadas[1].src)){
            setTimeout(desvirar, 2000);
        }
        else{
            let batatinha = document.querySelectorAll('.virada');
            batatinha[0].classList.remove('virada');
            batatinha[1].classList.remove('virada');
            batatinha[0].classList.add('acerto');
            batatinha[1].classList.add('acerto');
            finalizador +=2;
        }
    }
  }
  function desvirar(){
    const cartas = document.querySelectorAll('.virada');
    for( let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada');
    }
  }

  function contadorDeJogadas(){
    countJogadas ++;
    if(finalizador == quant){
        alert("Você ganhou em "+ countJogadas +" jogadas!");
    }
  }
function comparador() { 
	return Math.random() - 0.5; 
}
