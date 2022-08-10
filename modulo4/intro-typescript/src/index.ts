//Exercício1

function checarTriangulo(a:number, b:number, c:number):string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

console.log(checarTriangulo(5, 5, 5))

// Exercício 2

function imprimeTresCoresFavorites():any {
    const cor1:string = "Azul"/*prompt("Insira sua primeira cor favorita")*/
    const cor2:string = "Vermelho"/*prompt("Insira sua segunda cor favorita")*/
    const cor3:string = "Amarelo"/*prompt("Insira sua terceira cor favorita")*/
    console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavorites()

//Exercício 3 

function checaAnoBissexto(ano:number):boolean {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log(checaAnoBissexto(2021))

// Exercício 4 

function comparaDoisNumeros(num1:number, num2:number):number {
  let maiorNumero:number
  let menorNumero:number

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaDoisNumeros(20, 5))

// Exercício 5 

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number):string {
 let idade:number = anoAtual - anoNascimento
 let tempoCarteira:number = anoAtual - anoEmissao

  if(idade <= 20 ) {
      return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
    
   }else if(idade >= 20 || idade <= 50) {
      return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
    
   }else if(idade > 50) {
      return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
    
    }else {
        return "error"
    }
}

console.log(checaRenovacaoRG(2022, 1992, 2012))

// Exercício 6 

function calculos(x:number, y:number):number[]{
    let soma:number = x + y
    let sub:number = x - y
    let mult:number = x * y
    let maiorNumero:number 

    if (x > y) {
        maiorNumero = x
    } else {
        maiorNumero = y
    }

    return [soma, sub, mult, maiorNumero]
}

console.log(calculos(10, 5))

// Exercício 7 

function dnaToRna(dna:string):string {
    let rna:string 
    for(let i = 0; i <dna.length; i++) {
        if (dna[i] === "A") {
            rna += "U"
        } else if (dna[i] === "T") {
            rna += "A"
        } else if (dna[i] === "G") {
            rna += "C"
        } else if (dna[i] === "C") {
            rna += "G"
        } else {
            rna += dna[i]
        }
    }
    return rna
}

console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))

// Exercício 8 

function inverteString(letras:string):string {
    let inversa:string = letras.split("").reverse().join("")
    return inversa
}

console.log(inverteString("abcd"))

// Exercício 9 

function estudarNaLabenu(idade:number, ensinoMedio:boolean, horasDisponiveis:number, turno:string):string {
    if (idade >= 18 && ensinoMedio === true && turno === "integral" && horasDisponiveis >=40) {
        return ("Você pode estudar na labenu!")
    } else if 
    (idade >= 18 && ensinoMedio === true && turno === "noturno" && horasDisponiveis >=20) {
        return ("Você pode estudar na labenu!")
    } else {
        return ("Você não pode estudar na labenu!")
    }
}

console.log(estudarNaLabenu(19, true, 45, "integral"))