var valorAnosLuz = parseFloat(prompt("Qual o valor em anos luz que você deseja converter para km?"))

var valorkm = (valorAnosLuz * 9460730472580.8).toFixed(0) + ' km'

document.write(`<h2>${valorkm}</h2>`)
