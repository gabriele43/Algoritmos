const bool1 = true 
const bool2 = false 
const bool3 = !bool2
let resultado = bool1 && bool2 
console.log ('a', resultado)
//esse comando vai ficar false pq tem sinal de exclamaçao
resultado = bool1 && bool2 && bool3 
console.log ('b',resultado)
// esse comando ira dar  false
resultado = !resultado && (bool1 || bool2) 
console.log ('c',resultado)
// esse comando ira dar true
console.log ('d',typeof resultado)
//o comando ira dar boolean

let primeiroNumero = '100' 
let segundoNumero = '43'
const soma = primeiroNumero + segundoNumero
console.log (soma)
//10043, uma concatenaçao
