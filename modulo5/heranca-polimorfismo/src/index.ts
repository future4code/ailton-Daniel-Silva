// // === HERANÇA ===

// class User {
//   private id: string;
//   private email: string;
//   private name: string;
//   private password: string;

//   constructor(id: string, email: string, name: string, password: string) {
//     console.log("Chamando o construtor da classe User");
//     this.id = id;
//     this.email = email;
//     this.name = name;
//     this.password = password;
//   }

//   public getId(): string {
//     return this.id;
//   }

//   public getEmail(): string {
//     return this.email;
//   }

//   public getName(): string {
//     return this.name;
//   }

//   public getPassword(): string {
//     return this.password;
//   }

//   public introduceYourself(): void {
//     console.log(`Olá, sou o(a) ${this.name}. Bom dia!`);
//   }
// }

// const user1 = new User("001", "tay@gmail.com", "Taynã", "123456")

// // Exercicio 1
// // a) Sim, adicionando um metodo getPassword
// // b) 1 vez

// class Customer extends User {
//   public purchaseTotal: number = 0;
//   private creditCard: string;

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password);
//     console.log("Chamando o construtor da classe Customer");
//     this.creditCard = creditCard;
//   }

//   public getCreditCard(): string {
//     return this.creditCard;
//   }
// }

// const customer1 = new Customer("002", "leila@gmail.com", "Leila", "654321", "1234.5678.1234.0987")

// // Exercício 2
// // a) 1 vez
// // b) 2 vezes. Porque a 1ª vez é relativa a vez que está chamando a estância user1, do
// // primeiro exercício e a 2ª vez é chamando a estância customer1.

// // Exercício 3
// // a) Sim, adicionando um método get

// console.log(customer1.purchaseTotal)

// // Exercício 4 e 5

// customer1.introduceYourself()

// // === POLIMORFISMO ===

// // Exercício 1
///// a) Todos foram imprimidos, pois todos são públicos

// export interface Client {
//   name: string;
//   registrationNumber: number;
//   consumedEnergy: number;
//   calculateBill(): number;
// }

// const client: Client = {
//     name: "Daniel",
//     registrationNumber: 1,
//     consumedEnergy: 300,

//     calculateBill: () => {
//         return 2
//     }
// }

// console.log(client.consumedEnergy)
// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.calculateBill())

//  Exercício 2
// a) Não é possível criar instância de uma classa abstrata
abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// const place1 = new Place("8390824098409")

// b) Criar uma classa filha pra ela

class newPlace extends Place {
  constructor(protected cep: string) {
    super(cep);
  }
}
