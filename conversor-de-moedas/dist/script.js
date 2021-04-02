var valorEmDolarTexto = prompt("Qual o valor em dollar que você deseja converter?")

// var valorEmDolarNumero = parseInt(valorEmDolarTexto) // sem centavos
var valorEmDolarNumero = parseFloat(valorEmDolarTexto); // ok
// alert(valorEmDolarNumero)
var valorEmReal = valorEmDolarNumero * 5.50
// alert(valorEmReal) // três casas decimais
var valorEmRealDuasCasas = valorEmReal.toFixed(2)

alert(valorEmRealDuasCasas)

// Revisão:
// variaveis: var [tipos: int, float e string]
// funcões converção: parseInt(), parseFloat() e .toFixed()
// operacões: somar = '+', multiplicar = '*', igual = '='
// funcões janela: alert() e prompt()
// comentários: '//'