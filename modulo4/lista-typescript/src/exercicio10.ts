const cpf: string = "145.382.206-20"
let sum: number = 0
let sum2: number = 0
const validCpf = (cpf:string) => {
    
    const newCpf = cpf.replace(".", "").replace(".", "").replace("-", "")

    if(newCpf === "11111111111" || newCpf === "22222222222" || newCpf === "33333333333" || newCpf === "44444444444" || newCpf === "55555555555"
    || newCpf === "66666666666" || newCpf === "77777777777" || newCpf === "88888888888" || newCpf === "99999999999" || newCpf === "00000000000") {
        return false
    } else {
    for (let i = 0; i <= 8; i++) {
        sum = sum + parseInt(newCpf[i]) * (10 - i)
    }
    let dv = 11 - (sum % 11)
    if (dv >= 10) {
      dv = 0
    } else {
      dv = dv
    }

     for (let x = 0; x <= 9; x++) {
        sum2 = sum2 + parseInt(newCpf[x]) * (11 - x)
     }
    let dv2 = 11 - (sum2 % 11)
    if (dv2 >= 10) {
        dv2 = 0
    } else {
        dv2 = dv2
    }
    
    if (parseInt(newCpf[9]) === dv && parseInt(newCpf[10]) === dv2) {
        return true
    } else {
        return false
    }
}
}

console.log(validCpf(cpf))