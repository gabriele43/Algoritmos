const arrayPalavras = ['oi', 'sumido', 'tudo', 'bem', 'saudades']

function imprimirMensagem(arraypalavras){
    let mensagem = ''
    // para cada item do meu array, ele faz algo
    for( let palavra of arrayPalavras){
        mensagem += palavra + '';
    }
    console.log(mensagem)
}
imprimirMensagem(arrayPalavras);