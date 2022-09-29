/*variaveis precisam ser declaradas antes de usadas*/
'use strict';

/* Criando um construtor de objeto com atributo interno: */
function Animal() {
    this.qtdPatas = 4;
}
const cachorro = new Animal();
console.log(cachorro);

/** Herança: */
function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}
const pug = new Cachorro(false);
console.log(pug);

