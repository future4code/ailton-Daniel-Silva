/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const mensagemInicial = alert("Boas vindas ao jogo do Black Jack")
let jogoUsuario = []
let jogoComputador = []
let somaUsuario = 0
let somaComputador = 0
let cartasUsuario = ""
let cartasComputador = ""

function checkAs(usuario, computador) {

   while (usuario[0].texto.includes("A") && usuario[1].texto.includes("A") || 
   computador[0].texto.includes("A") && computador[1].texto.includes("A")) {
   
         cartasUsuario = ""
         somaUsuario = 0
      for (i = 0; i < 2; i++) {
         const carta = comprarCarta() 
         usuario.push(carta)
         cartasUsuario = cartasUsuario + " " + carta.texto
         somaUsuario = somaUsuario + carta.valor  
   } 
         cartasComputador = ""
         somaComputador = 0
      for (i = 0; i < 2; i++) {
         const carta = comprarCarta()
         computador.push(carta)
         cartasComputador = cartasComputador + " " + carta.texto
         somaComputador = somaComputador + carta.valor
  }
 }
}

const inicioJogo = confirm("Quer iniciar uma nova rodada?")
if (inicioJogo === false) {

   console.log("O jogo acabou")

} else { (inicioJogo === true) 

   for (i = 0; i < 2; i++) {
      const carta = comprarCarta() 
      jogoUsuario.push(carta)
      cartasUsuario = cartasUsuario + " " + carta.texto
      somaUsuario = somaUsuario + carta.valor   
      
 }

   for (i = 0; i < 2; i++) {
      const carta = comprarCarta()
      jogoComputador.push(carta)
      cartasComputador = cartasComputador + " " + carta.texto
      somaComputador = somaComputador + carta.valor

 }
   
   checkAs(jogoUsuario, jogoComputador)
   console.log(jogoComputador)
   
   confirm(`Suas cartas sâo: ${cartasUsuario}. A carta revelada do computador
   é ${jogoComputador[0]}

   Deseja comprar mais uma carta?`)
   
   if (somaComputador > somaUsuario) {
      console.log("O computador ganhou!")
   } else if (somaUsuario > somaComputador) {
      console.log("O usuário ganhou!")
   } else {
      console.log("Empate!")
   }
}