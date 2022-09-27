/*Hoisting é o içamento de variáveis para ter algo antes de exibi-la*/

function variavelNaoHoista(){
    console.log(text);
    var text = 'Antes deu Undefined pq não tinha nada, mas agora aparecerá algo';
    console.log(text);
}

variavelNaoHoista();

function funcaoHoistada(){
    // Evitar isso:
    log('É possível chamar um método antes de ele ser declarado. E veja, só: funciona.');
    function log(value) {
        console.log(value);
    }
}

funcaoHoistada();