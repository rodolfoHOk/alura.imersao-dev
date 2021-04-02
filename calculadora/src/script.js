// var primeiroValor = prompt("Digite o primeiro valor:")
// var primeiroValorInt = parseInt(primeiroValor)
var primeiroValor = parseInt(prompt("Digite o primeiro número inteiro:"))
var segundoValor = parseInt(prompt("Digite o segundo número inteiro:"))

var operacao = prompt("Digite:\n 1 para fazer uma divisão\n 2 para multiplicação\n 3 para subtração\n 4 para adição")

//var resultado = primeiroValor * segundoValor

//document.write("<h2>" + resultado + "</h2>")
//document.write("<h2>" + primeiroValor + " x " + segundoValor  +  " = " + resultado + "</h2>")

var sinal;

if (operacao == 1) {
  sinal = " / "
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + sinal + segundoValor  +  " = " + resultado + "</h2>")
} else if (operacao == 2) {
  sinal = " x "
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + sinal + segundoValor  +  " = " + resultado + "</h2>")
} else if (operacao == 3) {
  sinal = " - "
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + sinal + segundoValor  +  " = " + resultado + "</h2>")
} else if (operacao == 4) {
  sinal = " + "
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + sinal + segundoValor  +  " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção Inválida</h2>")
}

// if = se
// else = senão
// else if = senão se

// escrevendo na tela: document.write()
// concatenação: (juntar palavras e variáveis com + e "") ex: ("palavra" + variável)
// comparação: ==
// atribuição: =
// operações: + - * /

