// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 return array.sort(function(a,b) {
      if (a > b) return 1
      if (a < b) return -1
      return 0
  }
)}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
   const novoArray = array.filter(item => item % 2 === 0)
   return novoArray
  } 
  
  

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter(item => item % 2 === 0)
    const outroArray = novoArray.map(item => item**2)
    return outroArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
    let elemento = array[i]
    if (elemento > maiorNumero) {
        maiorNumero = elemento
    }
}
 return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    } 

    maiorDivisivelporMenor = (maiorNumero % menorNumero === 0) 

    diferenca = maiorNumero - menorNumero

     obj = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelporMenor,
        diferenca: diferenca
    }
    return obj
    }



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayzinha = []
   for (let i = 0; i < n; i++)
   arrayzinha.push(i*2)

   return arrayzinha
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   novaPessoa = {...pessoa,
   nome: "ANÔNIMO" 
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}