import { isTemplateExpression } from "typescript"

type client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

let arrayClients: client[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
]

function loan(arrayClients: client[]):client[] {
const arrClient = arrayClients.map((item) => {
    const debitValue:number = item.debitos.reduce((prev, curr) => prev + curr, 0)
    const newArray = []
    newArray.push(debitValue)
    item.debitos = newArray
    item.saldoTotal = item.saldoTotal - item.debitos[0]
    item.debitos = []
    return item
})
    let debtorClient = arrClient.filter((user) => {
        if (user.saldoTotal < 0)
        return user
    })
    return debtorClient
}

console.table(loan(arrayClients))
