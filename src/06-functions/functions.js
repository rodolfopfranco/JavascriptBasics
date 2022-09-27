function fn() {
    return 'Essa é uma declaração padrão de função';
}

const arrowFn = () => 'Essa é uma arrow function';
const arrowFn2 = () => {
    return 'Essa é outra forma de usar a arrow function, onde permite que se execute mais comandos antes de retornar';
}

// funções também são objetos
fn.prop = 'Posso criar propriedades;'

console.log(fn());
console.log(fn.prop);

// Funções com declaração de parametros:
const lovgValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

/* handle functions: */
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); /* Executa  função fn */
handleFnExecution(); /* não executa a funçãofn */

/* controlExec como função antiga: */
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}

/* é possível usar o this dentro da Arrowfunction, mas vai se referir ao próprio escopo da função */