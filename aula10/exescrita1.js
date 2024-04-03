const readlineSync = require('readline-sync')

const email = readlineSync.question('qual o seu email?')
const nome =  readlineSync.question('qual o seu nome?')

console.log('o email da '  + email + ' foi cadastrado com sucesso. Seja bem vindo '  + nome)