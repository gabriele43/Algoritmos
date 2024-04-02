// concatenaçao 
const palavra = 'leo'
const palvra2 = 'nardo'
console.log ( palavra + palavra2)

const nome =' leonardo'
const idade = 29
//console.log('meu nome é'+nome+'eu tenho'+idade+ 'idade')//contatemaçao

console.log(`meu nome é ${nome}, eu tenho ${idade} anos.`)// template string

//propriedade length(mostra o numero de caracteres - inclindo espaços)
const nome1 = 'vitor hugo'
console.log(nome.length)//13

// lower case - transforma todas as letras da sua string em minuscula
const frase = oieeEeEee
console.log ( frase.toLowerCase())
// fraseMinuscula = oieeeeeee

// upper case trasforma em minuscula
const fraseMaiscula =( frase.toUpperCase())
// fraseMaiuscula = OIEEEE

//metodo trim
const email = '   mika@gmail.com  '
console.log(email.trim())
//'mika@gmail.com'

// metodo includes
let frase1 = 'hoje eu comi cenoura'
 console.log (frase.includes('cenoura'))//true
console.log(frase.includes('batata'))// false

//metodo replaceAll(chars1,chars2)
let frase2 = 'hoje comi cenoura, adoro cenoura'
let novaFrase = frase.replaceAll('cenoura','batata')
//novaFrase = hoje comi batata, adoro batata




