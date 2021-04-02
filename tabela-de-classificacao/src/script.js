classificacaoPontos = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

corredores = []

paulo = {
  nome: "Paulo",
  imagem: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg",
  posicoesFinais: [1, 2, 3],
  pontos: 0
}
corredores.push(paulo)

rafa = {
  nome: "Rafa",
  imagem: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg",
  posicoesFinais: [2, 3, 1],
  pontos: 0
}
corredores.push(rafa)

guilherme = {
  nome: "Guilherme",
  imagem: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg",
  posicoesFinais: [3, 1, 2],
  pontos: 0
}
corredores.push(guilherme)

exibirCorredores(corredores)

function calcularPontos(corredor){
  var pontos = 0
  for(i = 0; i < corredor.posicoesFinais.length; i++){
    pontos += classificacaoPontos[corredor.posicoesFinais[i] - 1]
  }
  return pontos
}

function exibirCorredores(corredores){
  var html = ""
  for(j = 0; j < corredores.length; j++){
    corredores[j].pontos = calcularPontos(corredores[j])
    html += '<tr><td><img src="' + corredores[j].imagem + '" width="50" height="50"></td>'
    html += "<td>" + corredores[j].nome + "</td>"
    html += "<td>" + corredores[j].posicoesFinais + "</td>"
    html += "<td>" + corredores[j].pontos + "</td>"
    html += '<td><input type="text" id="posicao' + j + '" name="posicao' + j + '" placeholder="Digite a posição"/>'
    html += "<button onClick='adicionarPosicaoTermino(" + j + ")'> + Posicao Alcançada</button></td></tr>"
  }
  var elementoCorpoTabela = document.getElementById("tabelaCorredores")
  elementoCorpoTabela.innerHTML = html
}

function adicionarPosicaoTermino(indice){
  var campoPosicao = document.querySelector('#posicao' + indice)
  var posicao = campoPosicao.value
  if (posicao < 25 && posicao > 0) {
    corredores[indice].posicoesFinais.push(posicao)
    exibirCorredores(corredores)
  } else {
    alert("Número de posição inválida")
  }
}

function adicionarCorredor(){
  var campoNovoCorredor = document.querySelector('#novo-corredor')
  var nome = campoNovoCorredor.value
  var campoImagemCorredor = document.querySelector('#imagem-corredor')
  var imagem = campoImagemCorredor.value
  if(nome.length > 0){
    if(imagem.endsWith(".jpg")){
      var novo = {
        nome: nome,
        imagem: imagem,
        posicoesFinais: [],
        pontos: 0
      }
      corredores.push(novo)
      campoNovoCorredor.value = ""
      campoImagemCorredor.value = ""
      exibirCorredores(corredores)
    } else {
      alert("Formato da imagem não é .jpg!")
    }
  } else {
      alert("Campo nome não pode estar vazio!")
  }
}
