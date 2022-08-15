// Exercício 1 
// a)
// const minhaString:string = 10 
// É avisado que não se pode atribiur um número ao tipo string.

// b)
// const meuNumero:number|string = "10"
// Utiliza-se o Union Type para que uma variável possa receber número ou string.

// c)
const person: {nome:string, idade:number, corFavorita:string } = {
    nome: "Daniel",
    idade: 30,
    corFavorita: "Preto"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome: "Mariana",
    idade: 29,
    corFavorita: "Amarelo"
}

const pessoa2: pessoa = {
    nome: "Priscila",
    idade: 26,
    corFavorita: "Azul"
}

const pessoa3 : pessoa = {
    nome: "Luciana",
    idade: 28,
    corFavorita: "Laranja"
}

// d)
enum CoresArcoIris {
    AMARELO = "Amarelo",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AZUL = "Azul",
    AZULESCURO = "Azul-escuro",
    VIOLETA = "Violeta"
}

const pessoa4: pessoa = {
    nome: "Mariana",
    idade: 29,
    corFavorita: CoresArcoIris.AMARELO
}

const pessoa5: pessoa = {
    nome: "Priscila",
    idade: 26,
    corFavorita: CoresArcoIris.AZUL
}

const pessoa6 : pessoa = {
    nome: "Luciana",
    idade: 28,
    corFavorita: CoresArcoIris.LARANJA
}

// Exercício 2 
// a / b)
function obterEstatisticas(numeros:number[]):object {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior:number, menor:number, media:number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// c)
type amostra = {
    numeros:number[],
    obterEstatisticas: {
        maiorNumero:number, 
        menorNumero:number,
        mediaNumeros:number
    }
}

// Exercício 3
// a)
type post = {
    autor: string,
    texto: string
}

const posts:{autor:string, texto:string}[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

// b)
function buscarPostsPorAutor(posts:{autor:string, texto:string}[], autorInformado:string):{autor:string, texto:string}[] {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

// Exercício 5 
// a) Existem diversas propriedade a mais. outDir, rootDir, removeComments, sourceMap, noImplicityAny vieram comentados.
// forceConsistentCasingInFileNames, esModuleInterop, strict não vieram comentados.

// DESAFIO =================================================================================================================

// Exercício 6
type consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}[]

const arrayConsultas: consultas = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function  ordenaConsultas (array:{nome:string, idade:number, dataDaConsulta:string}[]):{nome:string, idade:number, dataDaConsulta:string}[] {
const arrayOrdenado = array.sort((a:{nome:string, idade:number, dataDaConsulta:string},
    b:{nome:string, idade:number, dataDaConsulta:string}) => (a.nome > b.nome) ? 1 : -1)
    return arrayOrdenado
}
console.log(ordenaConsultas(arrayConsultas))

// Exercício 7 

enum IdadesHistoricas {
    PREHISTORIA = "Pré-História",
    IDADEANTIGA = "Idade Antiga",
    IDADEMEDIA = "Idade Média",
    IDADEMODERNA = "Idade Moderna",
    IDADECONTEMPORANEA = "Idade Contemporânea"
}

enum AcOuDc {
    AC = "AC",
    DC = "DC"
}

function idadeHistoricaDoAno (ano:number, cristo:string):string {
    let idadeHist
    if(cristo === AcOuDc.AC && ano > 4000) {
        idadeHist = IdadesHistoricas.PREHISTORIA
    } else if (cristo === AcOuDc.AC && ano < 4000 || cristo === AcOuDc.DC && ano < 476) {
        idadeHist = IdadesHistoricas.IDADEANTIGA
    } else if (cristo === AcOuDc.DC && ano >= 476 && ano < 1453) {
        idadeHist = IdadesHistoricas.IDADEMEDIA
    } else if (cristo === AcOuDc.DC && ano >= 1453 && ano < 1789) {
        idadeHist = IdadesHistoricas.IDADEMODERNA
    } else if (cristo === AcOuDc.DC && ano >= 1789) {
        idadeHist = IdadesHistoricas.IDADECONTEMPORANEA
    } 

    return idadeHist
}

console.log(idadeHistoricaDoAno(1000, "DC"))

// Exercício 8

type product = {
  name: string;
  price: number;
  classification: productClassification;
};

type newProduct = {
   name: string
   price: number
   classification: productClassification
   discountPrice: number
}

enum productClassification {
    VERAO = 0.95,
    INVERNO = 0.9,
    BANHO = 0.96,
    INTIMAS = 0.93
}

let arrayProducts: product[] = [
  { name: "Camisa", price: 10, classification: productClassification.VERAO },
  { name: "Blusa de frio", price: 10, classification: productClassification.INVERNO },
  { name: "Toalha", price: 10, classification: productClassification.BANHO },
];

let newArray: newProduct[] = []
let discountPrice: number
let newItem:{} = {}

function addPriceBf(arrayProducts: product[]): newProduct[] {
    for (let product of arrayProducts) {
        newArray.push(
            (newItem = {
                ...product,
                discountPrice: product.price * product.classification   
            })
        )
    }
    return newArray
}

console.table(addPriceBf(arrayProducts))

// Exercício 9

type dish = {
    name: string,
    cost: number,
    price: number,
    ingredients: string[]
}

let arrayDishes: dish[]  = []
  
function addNewDish( arrayDishes: dish[]) {
    arrayDishes.push(

    )
}