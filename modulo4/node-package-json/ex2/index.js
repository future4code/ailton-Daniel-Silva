const operation = process.argv[2]
const x = Number(process.argv[3])
const y = Number(process.argv[4])

const red = '\u001b[31m'
const blue = '\u001b[34m'

if (process.argv.length === 5) {
switch(operation) {
    case "soma":
        const resultAdd = x + y
        console.log(blue+`O resultado é ${resultAdd}`)
        break;
    case "sub":
        const resultSub = x - y
        console.log(blue+`O resultado é ${resultSub}`)
        break;
    case "mult":
        const resultMult = x * y
        console.log(blue+`O resultado é ${resultMult}`)
        break;
    case "div":
        const resultDiv = x / y
        console.log(blue+`O resultado é ${resultDiv}`)
        break;
}
} else {
    console.log(red+"Passe os parâmetros corretamente!")
}