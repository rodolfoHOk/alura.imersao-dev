// [/* e */] commentario de bloco,  [//] commentario de linha

/*
// testes do parseInt com random
vezes = 20
while (vezes > 0){
  var numeroSecreto = parseInt(Math.random() * 11 )
  console.log(numeroSecreto)
  vezes = vezes - 1
} 
// ok o 10 aparece e o 11 não 
*/

// var numeroSecreto = parseInt(Math.random() * 10) // de 0 a 9
// var numeroSecreto = parseInt(Math.random() * 21 ) // de 0 a 20
// var numeroSecreto = Math.round(Math.random() * 10) // de 0 a 10 (valor inteiro mais próximo) obs: chances de sair 0 e 10 é menor

var numeroSecreto = parseInt(Math.random() * 11 ) // de 0 a 10
// alert(numeroSecreto)

var tentativas = 3

var indiceH = 2
var pontos = 100

while(tentativas > 0) {

  var chute = parseInt(prompt("Chute um número entre 0 e 10"))

  if (chute == numeroSecreto) {
    document.write("<h" + indiceH +
                   ">Acertou!</h"
                   + indiceH + ">")
    // console.log("Acertou!")
    // break // opção ao break abaixo
    tentativas = 0
  } else if (chute > numeroSecreto) {
    document.write("<h" + indiceH + 
          ">O número secreto é menor que " + chute +
          "</h" + indiceH + ">")
    tentativas = tentativas - 1
    indiceH = indiceH + 1
  } else if (chute < numeroSecreto) {
    document.write("<h" + indiceH +
          ">O número secreto é maior que " + chute + 
          "</h" + indiceH + ">")
    tentativas = tentativas - 1
    indiceH = indiceH + 1
  }
}

// else {
// if (tentativas == 0) { // com a opção ao break condição não funciona mais com esperado.
if (chute != numeroSecreto) {
  document.write("<h" + indiceH +
                 ">Fim das tentativas! O número secreto era " + numeroSecreto + 
                 "</h" + indiceH + ">")
}

pontos = 100 - Math.round((indiceH - 2) * 33.33)
alert("Total de pontos: " + pontos);

// alert - document.write - console.log
