//O método every testa se todos os elementos do array passam no teste implementado pela função fornecida

let array = [2, 4, 6];
let allEven = array.every(element => element % 2 == 0);
console.log(allEven); //saida: true