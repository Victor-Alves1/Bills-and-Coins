var entrada = require('fs').readFileSync('./dev/stdin', 'utf8');
var input = parseFloat(entrada);

console.log("NOTAS:")
const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
for(let i =0; i<=5; i++){
    console.log(parseInt(input/notas[i]) + ' nota(s) de RS ' + notas[i].toFixed(2))
    input = input % notas[i]
}

console.log("MOEDAS:")
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
for(let j =0; j<=5; j++){
    console.log(parseInt(input/moedas[j]) + ' moeda(s) de RS ' + moedas[j].toFixed(2))
    input = input % moedas[j] + 0.00001
}