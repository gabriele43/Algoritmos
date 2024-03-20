/*verificando a idade:
peça ao usiario sua idade e em seguida, exiba uma mensagem dizendo se ele é maior de idade oumenor de idade*/ 

const readline = require('redline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual a sua idade?', (idade) =>{
    if ( idade => 18) {
        console.log ('voce é maior de idade.');
    } else {
        console.log ('voce é menor de idade.');
    }
    rl.close()
})
