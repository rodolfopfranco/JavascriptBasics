'use strict';
class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

/**
 * Na versão 12 do javascript ele não tem acesso público e privado
 * Onde pode, é assim:
 */

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name){
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

/**
 * Com a configuração de encapsulamento:
 */
class EncapsulatedPerson {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    set name(name){
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
       
}

/**
 * static serve para dar métodos à uma classe sem precisar instanciar
 */

class PersonComMetodoInstanciado{
    static walk(){
        console.log('Walking...');
    }
}
console.log(PersonComMetodoInstanciado.walk());