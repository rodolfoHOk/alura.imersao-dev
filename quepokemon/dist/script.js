var escolhaPokemon = prompt("Digite: \n1 para Squirtle  \n2 para Pidgeot \n3 para Charmander \n4 para Spearow \n5 para Outro")

if (escolhaPokemon == 1) {
  document.write("<h3>Errou!</h3>")
} else if (escolhaPokemon == 2) {
  document.write("<h3>Errou!</h3>")
} else if (escolhaPokemon == 3) {
  document.write("<h3>Errou!</h3>")
} else if (escolhaPokemon == 4) {
  document.write("<h3>Errou!</h3>")
} else if (escolhaPokemon == 5) {
  var outroNome = prompt("Digite o nome do Pokemon:")
  if (outroNome == 'Pidgey' || outroNome == 'pidgey') {
    document.write("<h3>Acertou!</h3>")
  } else {
    document.write("<h3>Errou!</h3>")
    var querSaber = prompt("Errou! \nQuer saber? Digite s para sim ou n para não")
    if (querSaber == 's') {
      document.write("<h4>É o Pidgey</h4>")
    }
  }
} else {
  document.write("<h3>Opção Inválida</h3>")
}