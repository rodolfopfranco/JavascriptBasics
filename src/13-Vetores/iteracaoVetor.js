
/** FOREACH: */
const arr = [1,2,3,4,5];
const arr2 = [1,2,3,4,5];
arr.forEach((value, index)=> {
    console.log(`${index}: ${value}`);
});

/** MAP 
 * Mapeia e modifica um vetor
*/
let arraymapeado = arr.map(value => value*2);

/**FLAT
 * Retorna um array de 1 nível só com todo o conteúdo de um mapa, planeado
 */
const arrDesnivelado = [1,2,[3,4],5];
arr2.flat();

/**FLATMAP
 * Retorna um novo array modificado, com 1 nível
 */
arr2.flatMap(value => [value*2]);

/**KEYS
 * Retorna um objeto iterável a partir de método com os itens de um vetor:
 */
const keysDoArray = arr.keys();
console.log("Usando a função de keys para iterar o array:");
console.log(keysDoArray.next());
console.log(keysDoArray.next());

/**FIND
 * Buscando elementos no array
 */
arr.find(value => value <2);

/**
 * FILTER
 * Retorna um resultado a partir do filtro. Não altera o array original.
 */
const pets = [
    {name:'rex',type:"dino",age:2000},
    {name:'tompetti',type:"bird",age:20},
    {name:'mike',type:"turtle",age:76},
];
let petsjovens = pets.filter((pet)=>{
    return pet.age<50;
});
console.log(petsjovens.forEach(pet => console.log(pet)));