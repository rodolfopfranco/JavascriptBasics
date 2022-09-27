/*  */
const myNumber = 12.4032;

/* número para String: */
const numberAsString = myNumber.toString();
console.log('Número como String: ', typeof numberAsString);

/* número com casas decimais: */
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com 2 casas decimais:', fixedTwoDecimals);

/* Transforma String em float: */
console.log('\nString transformada em Float:', parseFloat('13.22'));

/* Transforma String em int: */
console.log('\nString transformada em int: ', parseInt('13.20'));