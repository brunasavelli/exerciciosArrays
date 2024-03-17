//O método splice altera o conteúdo de um array removendo elementos existentes e/ou adicionando novos elementos.

let array = [1, 2, 3];
array.splice(1, 1, 4); // Remove 1 elemento a partir do índice 1 e adiciona o número 4
console.log(array); // Saída: [1, 4, 3]