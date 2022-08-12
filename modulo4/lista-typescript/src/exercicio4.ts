enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type worker = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
}

let arrayWorkers: worker[] = [
  { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true },
]

function filterMarketingWorkers(arrayWorkers: worker[]): worker[] {
    const marketingWorkers = arrayWorkers.filter((item) => {
          if (item.setor === SETORES.MARKETING && item.presencial === true)
          return item
    })
    return marketingWorkers
}

console.log(filterMarketingWorkers(arrayWorkers))