//definindo o genero do filme eo preço do ingresso
let generoFilme = 'fantasia'; // genero do filme
let preçoIngresso = 10; // preço do ingresso
let lanchincho = 'pipoca'; //lanchinho que será comprado

// verificando se o amigo ou amiga irá assistir ao filme e selecionando o lanchinho
if (generoFilme === 'fantasia' && preçoIngresso < 15){
    console.log ( 'bom filme')
    console.log ('aproveite o seu', lanchincho)
    console.log (`aproveite o seu ${ lanchincho}`)
}else {
    console.log('escolha outro filme')
}