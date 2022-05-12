// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ==========================================

// [QUESTÃO 1]

// a) Vai ser impresso:
// 10
// 50

// b) Não apareceria nada no console, pois para aparecer deve-se usar o console.log 

// [QUESTÃO 2] 

// a) A função é utilizada para deixar todas letras da frase em letras minusculas 
// e procurar a palavra "cenoura" na mesma frase 

// b) i. eu gosto de cenoura  true
//    ii. cenoura é bom pra vista true
//    iii. cenouras crescem na terra true

// EXERCÍCIOS DE ESCRITA DE CÓDIGO ================================================

// [QUESTÃO 1]

// a)

function informacoes() {

console.log("Eu sou Daniel, tenho 30 anos, moro em Passos e sou engenheiro")

}

informacoes()

// b)

let nome1 = prompt("Digite seu nome");
let idade1 = Number(prompt("Digite sua idade"));
let endereco1 = prompt("Digite a cidade em que você mora");
let profissao1 = prompt("Digite sua profissão");

function informacoes2(nome, idade, endereco, profissao) {

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} 
e sou ${profissao} `)   


}

informacoes2(nome1, idade1, endereco1, profissao1)

// [QUESTÃO 2]

// a) 

const numero1 = 15
const numero2 = 10

function somar(num1, num2) {

    let soma = num1 + num2

    return soma
}

console.log(somar(numero1, numero2))

// b)

const numero3 = 20
const numero4 = 10

function comparar(num1, num2) {

    let comparacao = num1 >= num2

    return comparacao
}

console.log(comparar(numero3, numero4))

// c) 

const numero = 15

function parOuImpar(num) {

    let resultado = num % 2 === 0

    return resultado
}

console.log(parOuImpar(numero))

// d)

const fraseUsuario = prompt("Digite uma frase")

function formatar(frase) {

    frase = frase.toUpperCase()
    let comprimento = frase.length

    return [frase, comprimento]

}

console.log(formatar(fraseUsuario))

// [QUESTÃO 3]

const numero5 = Number(prompt("Digite um número"))
const numero6 = Number(prompt("Digite outro número"))

function calculos(num1, num2) {

    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2

    let resultado = `Números inseridos: ${num1} e ${num2}
    Soma: ${soma}
    Diferença: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}`

    return resultado
}

console.log(calculos(numero5, numero6))

// DESAFIOS ================================================================================================

// [QUESTÃO 1]

// a)

const a = 20

const funcao = (num) => {
    
    return num

}

console.log(funcao(a))

// b)






// [QUESTÃO 2]

const numero7 = 3
const numero8 = 4

function pitagoras(a, b) {

    let c = (a**2 + b**2)**(1/2)

    return c
}

console.log(pitagoras(numero7,numero8))
