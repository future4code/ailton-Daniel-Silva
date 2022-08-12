enum ROLE {
    USER = "user",
    ADMIN = "admin"
}

type person = {
    name: string,
    email: string,
    role: ROLE
}

let arrayPerson: person[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER},
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
  { name: "Aline", email: "aline@email.com", role: ROLE.USER},
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER},
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN},
]

function returnEmail(arrayPerson: person[]): string[] {
    const admin = arrayPerson.filter((person) =>{
        if (person.role === ROLE.ADMIN)
        return person
    }).map((item) => {
        return item.email
    })
    return admin
}

console.log(returnEmail(arrayPerson))