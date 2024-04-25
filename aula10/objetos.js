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

//funçoes dentro de objetos sao chamadas de método

//array dentro de objetos
 const curso = {
    nome:'noturno frontend',
    linguagem:['js','css','html']
 }

 console.log(curso.linguagem[0])

 //array de objetos :temos uma array contendo tres objeto

 const professores = [
    {nome: 'andrei', modulo: 1 },
    {nome: 'vitor', modulo: 2 },
    {nome: 'mina', modulo: 3 },
 ]

 console.log(professor[1].nome)

 //adicionar propriedades
 // notaçao de ponto
 curso.numeroEstudantes = 30

 // spread copiamos o usuario e sobreescrevemos as propriedades nome e idade com novos valores
 
 const usuario = {
    nome:'prof',
    idade: 25,
    email: profsenacrs.com.br ,
    cidade: 'sao paulo',
    
 }

 const novoUsuario = {
    ...usuario,
    nome:'joão',
    idade: 28,
 }

 //copiando arrays

 const listaDeNome = ['mika', 'paula','vitor']
 const copiaListaDeNomes = [...listaDeNomes]

 console.log(copiaListaDeNomes)//['mika','paula','vitor']
 
