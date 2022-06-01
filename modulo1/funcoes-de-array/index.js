// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// [QUESTÃO 1]

// { nome: "Amanda Rangel", apelido: "Mandi" }
// 0
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }]


// { nome: "Laís Petra", apelido: "Laura" }
// 1
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }]

// { nome: "Letícia Chijo", apelido: "Chijo" }
// 2
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }]

// [QUESTÃO 2]

// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// [QUESTÃO 3]

// [{nome: 'Amanda Rangel', apelido: 'Mandi'}, 
// {nome: 'Laís Petra', apelido: 'Laura'}]

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// [QUESTÃO 1]

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// // a)
// const nomeDoguinhos = pets.map((pets) => {
//     return pets.nome
// })

// console.log(nomeDoguinhos)

// // b)
// const doguinhosSalsicha = pets.filter((pets) => {
//     if (pets.raca === "Salsicha")
//     return pets.nome
// })

// console.log(doguinhosSalsicha)

// // c)
// const doguinhosPoodle = pets.filter((pets) => {
//     return pets.raca === "Poodle"
// }).map((pets) => {
//    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
// })

// console.log(doguinhosPoodle)

// // [QUESTÃO 2]

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// // a)
// const nomeProdutos = produtos.map((produtos) => {
//     return produtos.nome
// })

// console.log(nomeProdutos)

// // b)
// const nomeProdutos2 = produtos.map((produtos) => {
//         return [(produtos.nome), (produtos.preco*0.95)]
//     })
    
//     console.log(nomeProdutos2)

// // c)
// const nomeProdutos3 = produtos.filter((produtos) => {
//       if (produtos.categoria === "Bebidas")
//       return produtos.nome
// })

// console.log(nomeProdutos3)

// // d)
// const nomeProdutos4 = produtos.filter((produtos) => {
//     if (produtos.nome.includes("Ypê"))
//     return produtos.nome
// })

// console.log(nomeProdutos4)

// // e)
// const nomeProdutos5 = produtos.filter((produtos) => {
//         if (produtos.nome.includes("Ypê"))
//         return produtos.nome
// }).map((produtos) => {
//     return `Compre ${produtos.nome} por ${produtos.preco}`
// })       

// console.log(nomeProdutos5)

// // [DESAFIO 1]

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// //  a)
//  const nomePokemons = pokemons.map((pokemons) => {
//      return pokemons.nome
//  }).sort()

//  console.log(nomePokemons)

// // b)

// const nomePokemons2 = pokemons.map((pokemons) => {

//     return pokemons.tipo
// })

// const arrayTipo = nomePokemons2
// const novoArray = [...new Set (arrayTipo)]
// console.log(novoArray)
