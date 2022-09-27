/* var tem escopo geral e de função*/
var variavel = 'variavel';
/* Variáveis de bloco:*/
let deixada = 'deixada';
/*const é uma que não pode ser alterada, precisaria copiar em uma nova variável*/
const constante = 'constante';

/*Escopo de bloco é tudo dentro de if, for, etc. */

/* Escopo global é de todo o arquivo */

/* Escopo de função é autodescritivo*/

/* */

var variavelGlobal = 'variavelGlobal';
(()=> {
        console.log(`valor dentro da arrow function: "${test}"`);
        if (true) {
            var test = 'example';
            console.log(`Valor dentro do if: "${test}"`);
        }

        console.log(`valor após o if: "${test}"`);
    }
)();