let idade = 29
//se idade for maior ou igual a 18, executa o codigo

// else = senao executa o outro codigo
if(idade <= 18) {
    console.log ('voce é maior de idade')
} else{
    console.log ('voceé menor de idade')
}

const meuTime = 'gremio'
if(meuTime === 'gremio'){
    console.log ('sougremista')
} else if(meuTime === 'inter'){
    console.log('sou colorado')
} else{
    console.log('sou de outro time')
}
//if vai condiçao 
//else if vai condiçao
//else nao precisa de condição

let paisDeorigem = 'brasil'
if (paisDeorigem ==='brasil'){
    console.log ('brasileiros')
}else if (paisDeorigem === 'EUA'){
    console.log ('norte americano')
}else if (paisDeorigem === 'canada'){
    console.log('canadense')
}else{
    console.log('nacionalidade nao mencionada')
}


let paisDeorigem2 = 'brasil'
switch (paisDeorigem ) {
    case 'brasil':
    console.log ('brasileiro')
    break
    case 'EUA':
    console.log ('norte americano')
    break
    case 'canada':
    console.log ('canadense')
    default:
        console.log ('nacionalidade não mencionada')
        break;
}

