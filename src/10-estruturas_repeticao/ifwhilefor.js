
/** Sobre o if: */
let condicao = true;
if (condicao) {
    console.log("é verdadeiro");
} else if (!condicao) {
    console.log("é falso");
} else {
    console.log("nem booleano é");
}

/* Sobre switch: */
const fruit = 'banana';
switch (fruit) {
    case 'banana':
        console.log('achou a banana');
        break;
    case 'mamão':
        console.log('achou o mamão');
        break;
    default:
        console.log('não achou a fruta');
}

/* Estrutura for:*/
const array = ['one', 'two', 'three'];
for (let index= 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element #${index} : ${element}.`)
}

/* Estrutura While: */
var n = 0;
var o = 0;
while (n<3) {
    n++;
    o +=n;
}
console.log(o);

/* do while*/
var i = 0;
do {
    i+=1;
    console.log(i);
} while (i <5);

/* For in itera todos os valores, inclusive propriedades do array*/
for (let i in array) {
    console.log(i);
}

/* of só itera os valores */
for (let i of array) {
    console.log(i);
}