const gifs = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let baralho = [];

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
            <li>
                <img class="back" src="./imagens/back.png" />
                <img class="aberta escondido" src="./imagens/${baralho[i]}.gif" />
            </li>
            `;
        campo.innerHTML += li;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}