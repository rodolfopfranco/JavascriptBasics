const user = {
    name: 'Ariel',
    lastName: 'da Silva'
};

/* Lista chaves dop objeto:*/
console.log('Propriedades do objeto user:', Object.keys(user));

/* Recupera os valores das chaves do objeto: */
console.log('\nValores das propriedades do objeto user:', Object.values(user));

/* Retorna um array de arrays com [nome, valor] */
console.log('\nLista de propriedades e valores:', Object.entries(user));

/* adicionar propriedades em um objeto com assign: */
console.log('Objeto antes do assign:', user);
Object.assign(user, {fullName: 'Ariel da Silva'});
console.log('Objeto depois do assign:', user);
console.log('Novo objeto com novas propriedades:', Object.assign({}, user, {age:21}));
console.log('Objeto que não foi alterado:', user);

/* Bloqueia um objeto para não permitir edições: */
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
console.log('O objeto não alterou o foo por "changes"', newObj);

/* Permite editar o conteúdo dos atributos mas não  adicionar novos*/
Object.seal(newObj)