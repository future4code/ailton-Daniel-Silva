const name = process.argv[2]
const age = process.argv[3]
const agePlusSeven = Number(process.argv[3]) + 7

const red = '\u001b[31m'
const blue = '\u001b[34m'

if (name === undefined || age === undefined) {
    console.log(red+"Esperava 2 parâmetros e recebi apenas um. Favor inserir nome e idade!")
} else {
    console.log(blue+`Olá, ${name}! Você tem ${age} anos.`)
    console.log(blue+`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${agePlusSeven}.`)
}
