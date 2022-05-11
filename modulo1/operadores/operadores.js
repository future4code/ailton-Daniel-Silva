// Questão 1 

// a. false
// b. false
// c. true
// d. boolean

// Questão 2

// Será impresso os 2 valores que o usuário digitar concatenados, ou seja, se ele 
// digitar 10 e 20 será impresso 1020. O erro ocorre pois o prompt retorna strings e 
// é necessário transformar em number para que ocorra a soma corretamente.

// Questão 3

// let primeiroNumero = Number(prompt("Digite um número!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

// Escrita de Código
// Questão 1

let idade = Number(prompt("Qual a sua idade?"));
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu(sua) melhor amigo(a)?"));

let comparacao = idade > idadeMelhorAmigo

console.log("Sua idade é maior que a do seu melhor amigo?", comparacao);

console.log("A diferença de idade entre vocês é de", idade - idadeMelhorAmigo,
 "ano(s)");

// Questão 2

// a)
let numero = Number(prompt("Digite um número par"));
const resto = numero % 2;

//  b)
console.log(resto);

// c) O resto sempre vai dar 0, pois todo número par é divisivel por 2.

// d) Se o usuário inserir um número ímpar, o resto será 1, pois sempre que um número
// ímpar é divido por 2, o resto da divisão é 1.

// Questão 3

let idade2 = Number(prompt("Qual a sua idade?"));

// // a)
let idadeMeses = idade2 * 12;
console.log("A sua idade em meses é", idadeMeses, "meses");

// // b)
let idadeDias = idade * 365;
console.log("A sua idade em dias é", idadeDias, "dias");

// // c)
let idadeHoras = idade * 8760;
console.log("A sua idade em horas é", idadeHoras, "horas");

// Questão 4

let num1 = Number(prompt("Digite um número!"));
let num2 = Number(prompt("Digite outro número"));

let comp1 = num1 > num2;
let comp2 = num1 === num2;
let comp3 = (num1 % num2) === 0
let comp4 = (num2 % num1) === 0

console.log("O primeiro numero é maior que o segundo?", comp1);
console.log("O primeiro numero é igual ao segundo?", comp2);
console.log("O primeiro numero é divisivel pelo segundo?", comp3);
console.log("O segundo numero é divisivel pelo primeiro?", comp4);

// DESAFIO
// Questão 1 

// a)
let kelvinA = (77 - 32)*(5/9) + 273.15;
console.log(kelvinA, "K");

// b) 
let fahrenheitA = 80*(9/5) + 32;
console.log(fahrenheitA, "ºF");

// c)
let fanrenheitB = 30*(9/5) + 32;
let kelvinB = 30 + 273.15;

console.log(fanrenheitB, "ºF");
console.log(kelvinB, "K");

// d)

let celsius = Number(prompt("Digite um temperatura em celsius"));
let fanrenheitC = celsius*(9/5) + 32;
let kelvinC = celsius + 273.15;

console.log(fanrenheitC, "ºF");
console.log(kelvinC, "K");

// Questão 2 

// a)
let quilowattHora = 280;
let valorConta = quilowattHora*0.05;

console.log("O valor a ser pago é R$", valorConta, "reais");

// b)
let quilowattHora2 = 280;
let valorConta2 = quilowattHora2*0.05;
let valorContaDesconto = valorConta2*0.85;

console.log("O valor a ser pago é R$", valorContaDesconto, "reais");

// Questão 3

// a)
let lb = 20;
let valorKilo = lb*0.453592;

console.log("20lb equivalem a", valorKilo, "kg");

// b)
let oz = 10.5;
let valorKilo2 = oz*0.0283495;

console.log("10.5oz equivalem a", valorKilo2, "kg");

// c)
let mi = 100; 
let valorMetro = mi*1609.34;

console.log("100mi equivalem a", valorMetro, "m");

// d)
let ft = 50; 
let valorMetro2 = ft*0.3048;

console.log("50ft equivalem a", valorMetro2, "m");

// e)
let gal = 103.56;
let valorLitro = gal*3.78541;

console.log("103.56gal equivalem a", valorLitro, "l");

// f)
let xic = 450;
let valorLitro2 = xic*0.284131;

console.log("450xic equivalem a", valorLitro2, "l");

// g)

let valorFt = Number(prompt("Coloque uma medida em pés"));
let valorMetro3 = valorFt*0.3048;

console.log(valorFt, "ft equivalem a", valorMetro3, "m");

