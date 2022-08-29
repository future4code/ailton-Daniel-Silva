const nameUser:string = "Daniel"
const birthDate:string = "21/01/1992"

function separateDate(name:string, date:string) {
    const array = date.split("/");
    return (`Olá me chamo ${name}, nasci dia ${array[0]} do mês ${array[1]} do ano de ${array[2]}.`);
}

console.log(separateDate(nameUser, birthDate))

