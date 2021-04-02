function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (validarFilme(filmeFavorito)){
    var videoId = filmeFavorito.substring(filmeFavorito.indexOf("?v=") + 3, filmeFavorito.length)
    listarFilmesNaTela(videoId)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = ""
}

function validarFilme(linkFilme) {
  return linkFilme.includes('www.youtube.com/watch?v=')
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + filme + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

// testes: Ok
/*
var link = "https://www.youtube.com/watch?v=aJMfEz2cobI"
var video = link.substring(link.indexOf("?v=") + 3, link.length)
console.log(video)

var elemento = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
console.log(elemento)

listarFilmesNaTela(elemento)

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = filme
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
*/

/* para comparar com o original:
<iframe width="560" height="315" src="https://www.youtube.com/embed/aJMfEz2cobI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

// Entendendo a função listarFilmeNaTela(filme):
// 'filme' é o parâmentro que a função utilizará para adicionar o filme
// 1a linha da função: criamos a variável listaFilmes atribuindo a ela o elemento HTML com o id listaFilmes existente na página HTML, no caso é uma <div>.
// 2a linha da função: criamos a variável elementoFilme atribuindo a string HTML do novo elemento de filme que iremos adicionar a página é nesta linha que usamos o parametro filme.
// 3a linha da função: no elemento HTML <div id=listaFilmes>, a variável que criamos na 1a linha, atribuimos a ela mesma o que já tem dentro dela e adicionamos o novo elemento de filme, variável da 2a linha.
// obs: '.innerHTML' é o que está dentro do elemento HTML