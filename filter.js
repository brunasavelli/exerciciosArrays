//O método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

let array = [1, 2, 3, '3', 4, 5];
let newArray = array.filter(element => element == 3);
console.log(newArray); //saida: 3, '3'