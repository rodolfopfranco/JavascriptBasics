/*Sem Currying:*/
function soma (a, b){
    return a+b;
}

soma(1,2);

/*com Currying:*/
function somaCurrying(a) {
    return function(b) {
        return a+b;
    }
}
/* Ao armazenar uma variável com a primeira declaração, as próximas utilizarão ela para executar o retorno a partir da segunda: */
const somaCurry = somaCurrying(2)

// Vai dar, respectivamente: 3 e 6:
console.log(somaCurry(1));
console.log(somaCurry(4));