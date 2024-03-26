let textoUsuario = prompt('insira um texto')

const outraFunçao = function(texto) {
    return texto.toLowerCase().includes('cenoura')
}
const resposta = outraFunçao(textoDoUsuario)
console.log(resposta)
//tolowercase converte a strig pra minusculo e o includes manda incluir a palavra na frase
// a saida será a primeira: eu gosto de cenoura 