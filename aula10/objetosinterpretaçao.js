// exercicios insterpretaçao de codigo filme 1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1])
//"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//"Virginia Cavendish[4]
console.log(filme.transmissoesHoje[2])// canal: telecine, Horario:21h; canal: canal brasil , horario: 19h


// 2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) 
//a)juca, juba, jubo
//b) a sintaxe dos 3 pontos antes do nome do objeto quer dizer que que esse tipo de codigo copia o array

//3)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false 

}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//nao vai mostrar a informaçao da pessoa  por 'backender' esta em string e altura mostrará erro pois tambem esta em string e nao tem uma varia vel com esse nome