
/**
 * FACTORY - Cria um objeto para ser usado, chamando a classe ou método
 */
function Pessoa() {
    return {
        name: 'Ariel',
        lastname: 'Gonçalvez'
    }
}
const p = Pessoa();

/**
 * SINGLETON -  Cria uma instãncia de um construtor para ser usado sempre que necessário, como o JQuery
 */

function Singleton(){
    if (!Singleton.instance){
        Singleton.instance = this;
    }
    return Singleton.instance;
}

/**
 *  DECORATOR - Anotação para controlar comportamento
 * Abaixo, um exemplo com função para fingir ser um decorator:
 * Normalmente é um @
*/
let loggedIn = false;
function callIfAuthenticated(fn){return !!loggedIn && fn();}
function sum(a,b){return a + b;}
console.log(callIfAuthenticated(() => sum(2,3)));

/**
 * OBSERVER - Executa um comando em segundo plano até que seja executado o estado esperado.
 * A estrutura é listada abaixo:
 */
class Observable {
    constructor(){ this.observers = []; }
    subscribe(f) { this.observers.push(f); }
    unsubscribe(f) { this.observers = this.observers.filter(subscriber => subscriber != f); }
    notify(data){ this.observers.forEach(observer => observer(data)); }
}