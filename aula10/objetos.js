//é um 'armario grandao' que podem guardar varias variaveis 
// abaixou temos um objeto com duas propriedades nome e idade
const professor = {
    nome: 'vitor',
    idade:27,
    tarefa:['dar aula','responder duvidas'],//tambem podeser arrays
    contarPiada: function() { // pode ser funçao
        console.log('é pa ve ou pa come')
    }
}
 //notaçao de ponto . 
 console.log(professor.idade)
 console.log(professor.contarPiada())
console.log(professor.nome,professor.idade)

//notaçao de colchetes
console.log(professor['nome'])

//alterando valor
professor.nome = 'mika'
professor['email'] = 'profmika@gmail.com'

// acesando objetos dentro de objetos
const donoDoPet = {
    nome:'vitor hugo',
    pet: {
        nomeDoPet:'wanda',
        raça: 'vira - lata',
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)
