const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('digite o primeiro numero:', (numero1) =>{
    rl.question('digite o segundo numero:', (numero2) => {
        // calculando soma
        const resultado = numero1 + numero2;

        //exibindo o resultado
        console.log (` a soma de ${ numero1} e ${numero2} é ${resultado}`);

        rl.close();
    })
})
