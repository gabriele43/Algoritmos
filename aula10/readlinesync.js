//readline sync
//crie uma variavel que vai referenciar a biblioteca 
const readlineSinc = require('readline-sync')

//fazendo perguntas e armazenando  as respostas
const nome = readlineSync.question('qual o seu nome?')
const idade = readlineSync.question('qual sua idade?')
const cidade = readlineSync.question('qual a sua cidade?')

//exibindo respostas
console.log('nome'+ nome)
console.log('idade'+ idade)
console.log('cidade'+ cidade)