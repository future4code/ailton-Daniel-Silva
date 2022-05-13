// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = Number(prompt("Digite a altura do retangulo"));
  const largura = Number(prompt("Digite a largura do retangulo"));

  const area = altura * largura;

  console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const ano = Number(prompt("Digite o ano em que estamos"));
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento"));

  const idade = ano - anoNascimento;

  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let imc = peso / (altura**2);

  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt("Digite seu nome");
  const idade = prompt("Digite sua idade");
  const email = prompt("Digite seu email");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const cor1 = prompt("Digite uma de suas cores favoritas");
  const cor2 = prompt("Digite outra de suas cores favoritas");
  const cor3 = prompt("Digite mais uma de suas cores favoritas");

  console.log([cor1, cor2, cor3]);
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  string = string.toUpperCase()

  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 
  let numeroIngressos = custo / valorIngresso

  return numeroIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let resultado = string1.length === string2.length

  return resultado

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  let elementoExcluido = array.pop()

  return elementoExcluido

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
   
  let primeiroElemento = array[0];
  let ultimoElemento = array.pop();

  array.push(primeiroElemento);
  array[0] = ultimoElemento;

  return array 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let comparacao = string1 === string2;

  return comparacao;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  const anoAtual = Number(prompt("Digite em que ano estamos"));
  const anoNasc = Number(prompt("Digite em que ano você nasceu"));
  const anoRg = Number(prompt("Digite em que ano voce emitiu sua identidade"));

  const idadeUsuario = anoAtual - anoNasc;
  const tempoRg = anoAtual - anoRg;

  if (idadeUsuario <= 20 && tempoRg >=5) {
    console.log(true);
  }
  else {
    if(idadeUsuario > 20 && idadeUsuario <= 50 && tempoRg >= 10) {
      console.log(true);
    }
    else {
      if (idadeUsuario > 50 && tempoRg >= 15) {
        console.log(true);
      } 
      else {
        console.log(false);
      }
      }
    }
  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
    if(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
      return true
    }
        else {
          return false
        
      }
    }


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  const resp1 = prompt("Você tem mais de 18 anos?");
  const resp2 = prompt("Você possui ensino médio completo?");
  const resp3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if (resp1 === resp2 === resp3) {
    console.log(true)
  }
  else {
    console.log(false)
  }

}