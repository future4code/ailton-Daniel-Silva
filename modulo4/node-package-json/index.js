// EXERCÍCIO 1 ==========================================================================
// a) Utilizando a propriedade process.argv
// b)
const name = process.argv[2]
const age = process.argv[3]
const agePlusSeven = Number(process.argv[3]) + 7

if (name === undefined || age === undefined) {
    console.log("Esperava 2 parâmetros e recebi apenas um. Favor inserir nome e idade!")
} else {
    console.log(`Olá, ${name}! Você tem ${age} anos.`)
    console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${agePlusSeven}.`)
}

// EXERCÍCIO 2 =============================================================================
const operation = process.argv[2]
const x = Number(process.argv[3])
const y = Number(process.argv[4])

if(process.argv.length === 5) {
switch(operation) {
    case "soma":
        const resultAdd = x + y
        console.log(`O resultado é ${resultAdd}`)
    break;
    case "sub":
        const resultSub = x - y
        console.log(`O resultado é ${resultSub}`)
    break;
    case "mult":
        const resultMult = x * y
        console.log(`O resultado é ${resultMult}`)
    break;
    case "div":
        const resultDiv = x / y
        console.log(`O resultado é ${resultDiv}`)
    break;
}
} else {
    console.log("Passe os parâmetros corretamente!")
}

// EXERCÍCIO 3 ==================================================================================
const toDoList = [
    'Arrumar a cama ',
    'Alimentar o cachorro '
]

toDoList.push(process.argv[2])

console.log("Lista de tarefas:", toDoList)
