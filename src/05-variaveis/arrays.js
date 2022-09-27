const users = ['usuario', 'atuador', 'criador'];

/* forma de fazer um ENUM: */
const compass = {
    NORTH: Symbol('N'),
    SOUTH: Symbol('S'),
    EAST: Symbol('E'),
    WEST: Symbol('W')
}

const nations = [
    {
        name: 'Fire Nation',
        element: 'Fire',
        location: compass.EAST
    },
    {
        name: 'Earth Nation',
        element: 'Earth',
        location: compass.SOUTH
    },
    {
        name: 'Water Nation',
        element: 'Water',
        location: compass.NORTH
    },
    {
        name: 'Wind Nation',
        element: 'Wind',
        location: compass.NORTH
    },
];

/* Retornar a quantidade: */
console.log('Quantidade de itens:', nations.length);

/*Verifica se é um array: */
console.log('A variável nations é um array?', Array.isArray(nations));

/* Iterando itens do array: */
nations.forEach((nation, index, arr) => {
    console.log(`Nome: ${nation.name} | index: ${index}`, arr)
});

/* Filtrando array */
const eastCountries =  nations.filter(nation => nation.location === compass.EAST);
console.log('\nNova lista de nações do Leste: ', eastCountries);

/* Modificar o array em um novo: */
const nationsWithAvatars = nations.map( nation => {
    nation.avatar = true;
});

/* Calcular um valor dentro de um array: */
/* Usa-se o reduce */