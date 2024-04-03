// arrays - listas de elementos
const listaDeCompras = ['batata', 'alface', 'queijo']
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]

const listaDeCompras1 = ['batata', 'alface', 'queijo']
console.log(listaDeCompras[2])//alface

//propriedade length - nos diz a quantidade de itens de um array
 const pokemon = ['bulbassauro','squirtle', 'charmander']
 console.log(pokemon.length)//3

 //metodo includes (elemento) - determinase se um array contem um determinado elemento
  const seriesBoas = ['breaking bad', 'brooklin nine-nine']
  console.log(seriesBoas.includes('breaking bad'))//true
  console.log(seriesBoas.includes('game of thrones'))//false

//metodo push (elemnto) - adiciona um ou mais elementos ao final de uma array
const numeros = [1, 2, 3]
numeros.push(4)
console.log (numeros)//[1, 2, 3, 4]
numeros.push(5, 6, 7)
console.log(numeros)//[1, 2, 3, 4, 5, 6, 7]

//metodo pop() - remove o ultimo elemento de um array
const meusPeixes = ['palhaço', 'mandarin', 'esturjao']
meusPeixes.pop(meusPeixes)// ira ficar o ['palhaço', 'mandarim']

// metodo splice (i, n) remove n elementos à partir da posiçao i do array
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
//indices(1)   0   1    2     3    4    5   6     7

letras.splice(2,1)
//letras = ['A', 'B', 'D', 'E', 'F', 'G', 'H']
//indices(1)   0   1    2    3    4    5   6     

letras.splice(3,2)// letras = ['A', 'B', 'D', 'G', 'H']

//math.floor(math.random()......)
