// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// [QUESTÃO 1]

// a) Ele faz um teste para ver se o número digitado é 
// divisivel por 2

// b) Pares 

// c) Impares 

// [QUESTÃO 2]

// a) Para buscar o preço da fruta digitada pelo usuário

// b) O preço da fruta Maçã é R$ 2.25 

// c) O preço da fruta Pêra é $ 5, pois ele imprimiria
// o valor do default, por ter tirado o break

// [QUESTÃO 3]

// a) Pedindo um número ao usuário 

// b) Se for 10, será "Esse número passou no teste", se for
// -10 não exibirá no console 

// c) Sim, pois a variável mensagem nao foi determinada no 
// "escopo pai", apenas dentro da função 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO 

// [QUESTÃO 1]

// a/b)

// let idade = Number(prompt("Digite a sua idade"));

// // c)

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else if (idade < 18) {
//     console.log("Você não pode dirigir")
// } else {
//     console.log("Deu ruim")
// }

// [QUESTÃO 2]

// let horario = prompt(`Em que horário você estuda? Digite:
// M - Matutino
// V - Vespertino
// N - Noturno`)

// if (horario === "M") {
//     console.log("Bom dia!")
// } else if (horario === "V") {
//     console.log("Boa tarde!")
// } else if (horario === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Digite M, V ou N para que sua resposta seja considerada!")
// }

// [QUESTÃO 3]

// let horario = prompt(`Em que horário você estuda? Digite:
// M - Matutino
// V - Vespertino
// N - Noturno`)

// switch (horario) {

// case "M":
// console.log("Bom dia!")
// break
// case "V":
// console.log("Boa tarde!")
// break
// case 'N':
// console.log("Boa noite!")
// break
// default:
// console.log("Digite M, V ou N para que sua resposta seja considerada!")
// break
// }

// [QUESTÃO 4]

// let generoFilme = prompt("Qual o genêro do filme?")
// let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme.toLowerCase() === "fantasia" && valorIngresso <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// [DESAFIO 1]


// let generoFilme = prompt("Qual o genêro do filme?")
// let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme.toLowerCase() === "fantasia" && valorIngresso <= 15) {
//     let lanchinho = prompt("Qual lanchinho você vai comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// [DESAFIO 2]

let nome = prompt("Digite seu nume completo")
let tipoJogo = prompt(`Digite o tipo de jogo:
IN - Internacional
DO - Doméstico`)
let etapaJogo = prompt(`Digite a etapa do jogo:
SF - Semi-final
DT - Disputa de terceiro lugar
FI - Final`)
let categoria = prompt("Digite a categoria do ingresso: 1, 2, 3 ou 4")
let quantidadeIngressos = prompt("Digite a quantidade de ingressos")

