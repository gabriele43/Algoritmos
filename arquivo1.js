//importando o modulo redline
const readline = require('redline')

// criando uma instancia de interface de de leitura e de escrita 
const rl = readline.createInterface({
    input: Process.stdin,
    output: Process.stdout
})

//solicitando ao usuario que insira sua idade
rl. question('qual é a sua idade', ( idade) =>{
    //exibindo a idade inserido pelo usuario
    console.log ('sua idade é:', idade);

    //fechando a interface de leitura
    rl.close();
})