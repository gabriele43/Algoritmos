const numeros = [14, 6, 8, 15]
let maiorNumero = 0

function calculMaior(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array [i]
        }
    }
    return maiorNumero
}
calculaMaior(numeros)
console.log(maiorNumero)