// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// [QUESTÃO 1]

//  É uma repetição que roda até i = 4. O valor impresso é 10, pois 1+2+3+4 = 10

// [QUESTÃO 2]

// a) 
// 19
// 21
// 23
// 25
// 27
// 30

// b) Sim. Tirando o if (numero > 18) ele mostraria todos os números.
// Para ver o indice usa-se: console.log(lista.indexOf(numero))

// [QUESTÃO 3]

// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO 

// [QUESTÃO 1]

const numeroPets = Number(prompt("Quantos bixinhos você tem?"))
let bixinhos = []

// a)
if (numeroPets === 0) {
    console.log("Que pena, você pode adotar um pet!")

// b)
} else {
    for (let i = 0; i < numeroPets; i++)

    bixinhos.push(prompt(`Qual o nome do seu ${i+1}º bixinho?`)) 
}

// c)
console.log(bixinhos)

// [QUESTÃO 2]

// a)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function funcao1 (array) {

    for (let i = 0; i < array.length; i++)
    console.log(array[i])
}

funcao1(arrayOriginal)

// b)

function funcao2 (array) {

    for (let i = 0; i < array.length; i++)
    console.log(array[i]/10)
}

// funcao2(arrayOriginal)

// c)

const arrayNovo = []

function funcao3 (array) {
 
    for (let i = 0; i < array.length; i++)
    if (array[i] % 2 === 0) {
    arrayNovo.push(array[i])

    } 
}
    funcao3(arrayOriginal)
    console.log(arrayNovo)

// d)

let arrayString = []

function funcao4 (array) {

    for (let i = 0; i < array.length; i++) {
    
    arrayString.push(array[i])

    console.log(`O elemento do índex ${i} é ${array[i]}`)
}
}

funcao4(arrayOriginal)

// e)

function funcao5(array) {

    let maiorNumero = 0
    let menorNumero = 1000
    for (let i = 0; i < array.length; i++) {
    const elemento = array[i]
    if (elemento > maiorNumero) {
        maiorNumero = elemento
    }
    const elemento2 = array[i]
    if (elemento2 < menorNumero) {
        menorNumero = elemento2
}
}
console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)
}

// funcao5(arrayOriginal)

// [DESAFIO 1]

// a)

const joguinho = () => {
let numeroTentativas = 0

    const mensagemInicial = confirm("Vamos jogar!")
    if (mensagemInicial === true) {

     let primeiroNumero = Number(prompt("Digite o numero que você pensou"))
     let segundoNumero = primeiroNumero + 1

     while (primeiroNumero !== segundoNumero) {

        segundoNumero = Number(prompt("Tente adivinhar o numero"))

        if (primeiroNumero > segundoNumero){
            console.log(`O número que você escolheu foi ${segundoNumero}
            Ele é menor que o número do jogo`)
        } else if (primeiroNumero < segundoNumero) {
            console.log(`O número que você escolheu foi ${primeiroNumero}
            Ele é maior que o número do jogo`)
        } else {
            console.log("Você acertou!")
        }
        numeroTentativas = numeroTentativas + 1
     }
    }
    console.log(`O número de tentativas foi ${numeroTentativas}`)
}
joguinho()

// [DESAFIO 2]

const joguinho2 = () => {
    let numeroTentativas = 0
    
        const mensagemInicial = confirm("Vamos jogar!")
        if (mensagemInicial === true) {
    
         let primeiroNumero = Math.floor((Math.random() * 100) + 1)
         let segundoNumero = primeiroNumero + 1
    
         while (primeiroNumero !== segundoNumero) {
    
            segundoNumero = Number(prompt("Tente adivinhar o numero"))
    
            if (primeiroNumero > segundoNumero){
                console.log(`O número que você escolheu foi ${segundoNumero}
                Ele é menor que o número do jogo`)
            } else if (primeiroNumero < segundoNumero) {
                console.log(`O número que você escolheu foi ${primeiroNumero}
                Ele é maior que o número do jogo`)
            } else {
                console.log("Você acertou!")
            }
            numeroTentativas = numeroTentativas + 1
         }
        }
        console.log(`O número de tentativas foi ${numeroTentativas}`)
    }
    joguinho2()


