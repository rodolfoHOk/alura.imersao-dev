var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg"
]

var nomeFilmes = [
  "Star Wars IV: Uma nova esperança",
  "Toy Story",
  "InterEstelar",
  "Procurando Nemo",
  "Mama Mia",
  "Homem-Aranha: De volta ao lar"
]

var linkFilmes = [
  "https://www.imdb.com/title/tt0076759/",
  "https://www.imdb.com/title/tt0114709/",
  "https://www.imdb.com/title/tt0816692/",
  "https://www.imdb.com/title/tt0266543/",
  "https://www.imdb.com/title/tt0795421/",
  "https://www.imdb.com/title/tt2250912/"
]

var mensagem = "Quais filmes você tem interesse?\n" +
               "Digite os números separandos por vírgula:"

for (var i = 0; i < nomeFilmes.length; i++) {
  mensagem = mensagem + "\n" + i + " - " + nomeFilmes[i]
}

var filmesEscolhidos = prompt(mensagem).split(',')
// obs: .split() cria um array de uma string com o separador que foi colocado dentro do parenteses, no caso uma virgula.

for (var i = 0; i < listaFilmes.length; i++) {
  if (filmesEscolhidos.includes(i.toString())) {
    document.write("<figure>")
    document.write("<a href=" + linkFilmes[i] + ">")
    document.write("<img src=" + listaFilmes[i] + "></a>")
    document.write("<figcaption>" + nomeFilmes[i] + "</figcaption>")
    document.write("</figure>")
  }
}
// obs: array.includes(string) retorna verdadeiro ou falso se o array contém ou não a string informada respectivamente.



//historico de códigos da aula:

//var filme1 = "Star Wars"
//var filme2 = "Toy Story"
//var filme3 = "Interestelar"
//console.log(filme1)
//console.log(filme2)
//console.log(filme3)

//var filmes = ["Star Wars", "Toy Story", "Interestelar"]
//console.log(filmes)

//var filmes = []
//filmes.push("Star Wars")
//filmes.push("Toy Story")
//console.log(filmes)

//var filmes = ["Star Wars", "Toy Story", "Interestelar"]
//console.log(filmes[0])
//console.log(filmes[1])
//console.log(filmes[2])
//console.log(filmes.length)

/* para comparar com o for
var tentativas = 3
while (tentativas > 0) {
  ...
  tentativas = tentativas - 1
}
*/

/*
var filmes = ["Star Wars", "Toy Story", "Interestelar"]

for (var i = 3; i > 0; i--) {
  // console.log(i)
  console.log(filmes[i])
} // deu erro filmes[3] não definido
*/

/*
var filmes = ["Star Wars", "Toy Story", "Interestelar"]

for (var i = 2; i >= 0; i--) {
  console.log(filmes[i])
} // assim ok mas está de trás para frente
*/

/*
var filmes = ["Star Wars", "Toy Story", "Interestelar", "Esqueceram de mim"]

for (var i = 0; i <= 2; i++) {
  console.log(filmes[i])
} // ok agora mas se inserir mais filme não aparece
*/

/*
var filmes = ["Star Wars", "Toy Story", "Interestelar", "Esqueceram de mim", "Marley e eu"]

for (var i = 0; i < filmes.length; i++) {
  console.log(filmes[i])
} // ok
*/