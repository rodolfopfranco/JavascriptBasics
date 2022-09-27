
/* Tamanho da String:*/
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

/* Array quebrando a string por delimitador: */
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

/* Busca um valor e substitui por outro:
Aceita regex no primeiro valor*/
const replacedText = 'Texto'.replace('Text', 'Trocado');
console.log('\nSubstituição de valor:', replacedText)

/* retorna uma fatia do texto */
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondTillEnd = 'Texto'.slice(1);
console.log('\nValor da segunda letra até o final:', secondTillEnd);

/* Retorna N caracteres a partir de uma posição */
const twoCharsBeforeFirstPos = 'Texto'.substring(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);
