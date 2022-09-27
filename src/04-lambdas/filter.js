const alunos =
[
    {
        nome: 'Aluno 1',
        nota: 1
    },
    {
        nome: 'Aluno 2',
        nota: 2
    },
    {
        nome: 'Aluno 3',
        nota: 3
    },
    {
        nome: 'Aluno 4',
        nota: 9
    },
    {
        nome: 'Aluno 5',
        nota: 6
    },
    {
        nome: 'Aluno 7',
        nota: 10
    },
];

/*Usanbdo o filter para filtragem em uma lista:*/
function pegaSoAprovados(alunoList) {
    return alunoList.filter(aluno => aluno.nota>7);
}

console.log(pegaSoAprovados(alunos));