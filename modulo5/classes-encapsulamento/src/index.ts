class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age
  }

  public getBalance(): number {
    return this.balance
  }

  public getTransactions(): Transaction[] {
    return this.transactions;
  }
}

// type Transaction = {
//   description: string;
//   value: number;
//   date: string;
// }

//Exercício 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.date = date;
    (this.value = value), (this.description = description);
  }
}

// Exercício 1)
// a) O construtor serve para que se passe os parâmetros que serão inseridos.
// Deve-se chamá-lo utilizando o this.(parametro) = (parametro) e assim passá-lo.

// b) Uma vez

// c) Utilizando funções de get colocadas dentro da classe, como essa:
// public getCpf(): string {
// 	return this.cpf
// }

// Exercício 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts

  }
}

const newClient: UserAccount = new UserAccount("10210210230", "Jô", 34)
const newClient2: UserAccount = new UserAccount("10310310350", "Leila", 23)
const bankAccount: Bank = new Bank([newClient, newClient2])
console.log(bankAccount)