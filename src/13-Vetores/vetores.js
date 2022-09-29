/**Criando: */
const arr = [1,2,3];
const arr2 = new Array(1,2,3);
const arr3 = Array.of(1,2,3);
const arraySoComAsPosicoesAlocadas = Array(3);
const arrayCopiado = Array.from(arr3);

/** Inserindo elementos no final: */
console.log(arr)
arr.push(4);
console.log("arr depois de adicionado com push: ", arr);

/**Inserindo no início: */
arr.unshift(0);

/** Removendo elementos do final*/
console.log(arr2);
let elementoRemovido = arr2.pop();
console.log("arr depois de removido com pop:", arr2);
console.log("Elemento removido:", elementoRemovido);

/** Removendo elementos do início: */
arr3.shift();

/** Concatenando 2 ou mais arrays: */
let arr4 = arr.concat(arr2);
console.log("Array concatenado:", arr4);

/** Separa uma parte do array*/
console.log("Array usando slice:");
let arrayTeste = [1,2,3,4,5];
console.log(arrayTeste.slice(0,2));
console.log(arrayTeste.slice(2));
console.log(arrayTeste.slice(-1));
console.log(arrayTeste.slice(-3));

/** Dividindo um array em 2: O ARRAY É ALTERADO */
console.log("Funcionamento do splice:");
console.log(arrayTeste.splice(2));
console.log(arrayTeste);
console.log(arrayTeste.splice(0, 0, "first"));
console.log(arrayTeste);