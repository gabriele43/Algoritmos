const readlineSinc = require('readline-sync')
function calcularSomaDosNumero(){
    let soma = 0
    let input
    console.log("digite os numeros (digite '0' para parar):")
    while (input !== 0) {
        input = Numeber( readlineSync.question("numero:"))
        soma += input
    }
    return soma
}

constsomaTotal = calcularSomaDosNumeros()
console.log ("A soma dos numeros é :", somaTotal)



