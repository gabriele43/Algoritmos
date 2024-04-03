let array
console.log('a. ', array)
// irá dar undefined

array = null
console.log('b. ', array)
//irá dar null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//ira dar  11 pois o comando diz o numero de elementos do array

let i = 0
console.log('d. ', array[i])
//ira dar erro por o array nao esta definido

array[i+1] = 19
console.log('e. ', array)
//irá dar erro pois o array nao esta definido

const valor = array[i+6]
console.log('f. ', valor)
//irá dar erro pois o array nao esta definido

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NO ONIBUS EM MIRROCOS


