// QUESTÃO 1

// Imprime 10

// Imprime 10, 5

// QUESTÃO 2

// Imprime 10, 10, 10 

// QUESTÃO 3 

// horasDia
// salarioDia
// salarioHora

// QUESTÃO 1

let nome;
let idade;

console.log(typeof nome, idade);

// // // Apareceu no console undefined undefined, pois ainda não foi dado nenhum valor às 
// // // variáveis, sendo assim, não é possível identificar o tipo destas.

let nome1 = prompt("Qual o seu nome?");

console.log(nome1);

let idade1 = prompt("Qual a sua idade?");

console.log(idade1);

console.log(typeof nome1, typeof idade1);

// // Apareceu string string, pois todas informações dadas pelo usuário vem no tipo
// // string

console.log("Olá", nome1, "você tem", idade1, "anos");

// // Questão 2

let pais = prompt("Você mora no Brasil?");
let estado = prompt("Você mora em Minas Gerais");
let cidade = prompt("Você mora em Passos?");

console.log("Você mora no Brasil? -", pais);
console.log("Você mora em Minas Gerais? -", estado);
console.log("Você mora em Passos? -", cidade);

// // Questão 3 

let a = 10
let b = 25
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

// DESAFIO

let num1 = prompt("Digite um número");
let num1a = Number(num1);

let num2 = prompt("Digite outro número");
let num2a = Number(num2);

let x = num1a + num2a;
console.log(x);

let y = num1a * num2a;
console.log(y);





