const readline = require('readline');

const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function verificaNumero(numero1) {
    if(numero1 % 2 === 0) {
        console.log(`o numero ${numero1} é par.`)
    }else {
        console.log (`o numero ${numero1} é impar`)
    }
    rl.close()
}
rl.question('digite um numero:', (numero)=>{
    verificaNumero(numero)
})