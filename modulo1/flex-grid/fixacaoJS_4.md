```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let cont = 0
   
   for(const numero of arrayDeNumeros) {
     if (numero === numeroEscolhido){
       cont = cont + 1
     }
   }
   if (cont === 0) {
     return "Número não encontrado"
   }
   return `O número ${numeroEscolhido} aparece ${cont}x`
}
```