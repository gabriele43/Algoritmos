//quando a contagem for par, mostra a mensagem tic
//quando for impar, mastra amensagem tac
//quando chegar a zero, mostra a mensagem 'booom'

let contagem = 10 
while(contagem <= 0){
    if(contagem % 2 === 0){
        console.log('tic')
    } else {
        console.log('tac')
    }
    contagem --
}
console.log ('boooom')

