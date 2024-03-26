const a  = 1 // declaraçao variavel a no escopo global

function imprimevariavel (){
    const b = 2 // declaraçao varial b no escopo local
    console.log ('variavel a', a)
    console.log ( 'variavel b', b)
}

imprimevariavel()

console.log('variavel a', a)
console.log('variavel b', b)