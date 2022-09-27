const user = 
{
    name: 'Nome',
    lastName: 'Sobrenome'
};

function adicionaNomeCompleto(user) {
    /* os 3 pontos recuperam todos os dados do usuário */
    /* O que tem depois é concatenação especial */
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const nomeCompleto = adicionaNomeCompleto(user);
console.log(nomeCompleto)