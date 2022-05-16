// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// [QUESTÃO 1]

// a) 
// Matheus Nachtergaele
// Virginia Cavendish
// canal:'Globo', horario: '14h'

// [QUESTÃO 2]

// a)
// nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD'

// b) Serve para espelhar um objeto, ou seja, trazer
// as informações de um objeto para um novo objeto 

// [QUESTÃO 3]

// EXERCÍCIOS DE ESCRITA CÓDIGO 

// [QUESTÃO 1]

// a)

const pessoa = {

    nome: "Daniel",
    apelidos: ["Casca", "Turtle", "Big"]

}

function informacao(obj) {
    
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:
${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

informacao(pessoa)


// // b)

const novaPessoa = {

    ...pessoa,
    apelidos: ["Dani", "Raniel", "034"]

}

console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de:
${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`)


informacao(novaPessoa)

// [QUESTÃO 2]

// a)

const pessoa1 = {

    nome: "Daniel",
    idade: 30,
    profissao: "Engenheiro"
}

const pessoa2 = {

    nome: "Priscila",
    idade: 26,
    profissao: "Psicologa"

}

function variasInformacoes(pessoa) {

return [pessoa.nome, pessoa.nome.length, pessoa.idade, 
    pessoa.profissao, pessoa.profissao.length] 
}

console.log(variasInformacoes(pessoa1))
console.log(variasInformacoes(pessoa2))

// [QUESTÃO 3]

// a)
const carrinho = []

// b)
const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "Mamão",
    disponibilidade: true
}

// c)
function inserir(fruta) {
    carrinho.push(fruta)
}

// d)
inserir(fruta1)
inserir(fruta2)
inserir(fruta3)

console.log(carrinho)
