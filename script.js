let quant = Number(prompt("Digite o número de cartas que deseja(apenas números pares de 4 a 14):"));
while(quant % 2 !== 0 || quant<4 || quant>14){
    alert("Número inválido!");
    quant = Number(prompt("Digite o número de cartas que deseja(apenas números pares de 4 a 14):"));
}