//funçao para exibir  o menu de opçoes
function exibirMenu(){
    console.log('menu de opções:');
    console.log('1. Opção 1');
    console.log('2.Opção 2');
    console.log('3. Opção 3');
    console.log('4. sair');
}

const readline = require ('readline-sync');

// funçao para processar aescolha do usuario
function processarEscolha(opção){
    switch (opção) {
        case '1':
            console.log('voce escolheu a opção 1.');
            break;
        case '2':
            console.log('voce escolheu a opção 2.');
            break;
        case '3':
            console.log('voce escolheu a opção 3.');
            break;
        case '4':
            console.log('encerrando o programa ...');
            return true;// indica que o programa deve ser encerrado
        default:
            console.log('opção invalida. Por favor,escolha uma opção valida.');                 
    }
    return false;// indicaque o programanao deve ser encerrado
}

//função principal
function main(){
    let encerrar = false;

    while(!encerrar){
        exibirMenu();
        let opção = readline.question('digite o numero da opção desejada:');
        encerrar = processarEscolha(opção);
    }
}

//iniciar o programa
main();

//adicionar personagens

const readline = require ('readline-sync');
let array = []
function adicionarPersonagem() {
    let nomePersonagem = readline.question('digite onome do novo personagem:');
    let idadeDoPersonagem = readline.question('digite a idade do novo personagem:');


    array.push({nome:nomePersonagem, idade:idadeDoPersonagem});
}

adicionarPersonagem()
console.log(array)

    
