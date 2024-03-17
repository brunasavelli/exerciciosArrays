//O método reduce executa uma função redutora sobre cada um dos elemento do array, resultando em um único valor de saída.

let array = [1, 2, 3, 4];
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  //saida: 10