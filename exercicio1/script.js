// os valores com seus tipos impressos facilita o entendimento do que é letra e numero.

// const nome =  (typeof nome)
// let idade =  (typeof idade)
// console.log (nome, idade)

const nome = prompt("qual o seu nome?")
let idade = Number (prompt("qual a sua idade?"))
//console.log (nome, idade)
console.log (typeof nome, nome)
console.log (typeof idade, idade)

console.log (`olá, meu nome é ${nome} e tenho ${idade} anos`)