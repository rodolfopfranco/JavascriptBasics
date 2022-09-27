let user = {
    name: 'Ariel'
};

/* Mudando propriedades: */
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

/* Criando uma propriedade: */
user.lastName = 'da Silva';

console.log("Antes de remover: ", user);
/* Removendo uma propriedade:*/
delete user.name;

console.log("Depois de remover: ", user);