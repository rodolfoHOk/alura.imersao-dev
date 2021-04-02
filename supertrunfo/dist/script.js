// desafio Paulo: jogadas por turnos ok
// desafios Rafa: 
      // 1: super trunfo, mudei para: só quem tira com primeiro jogador esta carta ganha de imediato.
                                   // se não funciona com uma carta comum. ok
      // 2: quem ganha fica com a carta do perdedor até ganhar todas as cartas. ok

// cartas do baralho
var cartas = []

var mercurio = {
  nome: 'Mercúrio',
  imagem:'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2016/01/mi_1099657945253850.jpg',
  atributos: {
    gravidade: 3.7,
    orbital: 87.97,
    rotacao: 58.65,
    temperatura: 167
  }
}
cartas.push(mercurio)

var venus = {
  nome: 'Vênus',
  imagem:'https://exame.com/wp-content/uploads/2020/09/venus-planeta-exploracao.jpg',
  atributos: {
    gravidade: 8.87,
    orbital: 224.70,
    rotacao: 243.02,
    temperatura: 461
  }
}
cartas.push(venus)

var terra = {
  nome: 'Terra',
  imagem:'https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg',
  atributos: {
    gravidade: 9.81,
    orbital: 365.26,
    rotacao: 1.00,
    temperatura: 14
  }
}
cartas.push(terra)

var marte = {
  nome: 'Marte',
  imagem:'https://www.revide.com.br/media/upload/noticias/2016/05/30/destaque-marte-814-20160530.jpg',
  atributos: {
    gravidade: 3.72,
    orbital: 686.97,
    rotacao: 1.03,
    temperatura: -63
  }
}
cartas.push(marte)

var jupiter = {
  nome: 'Júpiter',
  imagem:'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2020/09/jupiter1a.jpg',
  atributos: {
    gravidade: 24.79,
    orbital: 4331.57,
    rotacao: 0.41,
    temperatura: -108
  }
}
cartas.push(jupiter)

var saturno = {
  nome: 'Saturno',
  imagem:'https://st3.depositphotos.com/1005844/12662/i/600/depositphotos_126625852-stock-photo-planet-saturn-with-nasa-textures.jpg',
  atributos: {
    gravidade: 10.44,
    orbital: 10759.22,
    rotacao: 0.44,
    temperatura: -139
  }
}
cartas.push(saturno)

var urano = {
  nome: 'Urano',
  imagem:'https://i.pinimg.com/originals/eb/a5/cb/eba5cbbc1bb27308c86df660da27f810.jpg',
  atributos: {
    gravidade: 8.69,
    orbital: 30799.1,
    rotacao: 0.72,
    temperatura: -220
  }
}
cartas.push(urano)

var netuno = {
  nome: 'Netuno',
  imagem:'https://www.infoescola.com/wp-content/uploads/2008/04/netuno.jpg',
  atributos: {
    gravidade: 11.15,
    orbital: 60190.03,
    rotacao: 0.67,
    temperatura: -223.15
  }
}
cartas.push(netuno)

var plutao = {
  nome: 'Plutão',
  imagem:'https://s2.glbimg.com/SG86hmxFiMh1J5M-QS7iPXsOHWs=/e.glbimg.com/og/ed/f/original/2019/08/27/800px-pluto_in_true_color_-_high-res.jpg',
  atributos: {
    gravidade: 0.62,
    orbital: 90613.31,
    rotacao: 6.39,
    temperatura: -229
  }
}
cartas.push(plutao)

var eris = {
  nome: 'Éris',
  imagem:'https://hypescience.com/wp-content/uploads/2011/11/eris-dwarf-planet-art.jpg',
  atributos: {
    gravidade: 0.82,
    orbital: 203500,
    rotacao: 1.08,
    temperatura: -243
  }
}
cartas.push(eris)

var ceres = {
  nome: 'Ceres',
  imagem:'https://super.abril.com.br/wp-content/uploads/2020/08/12-08_Ceres_SITE.jpg',
  atributos: {
    gravidade: 0.27,
    orbital: 1680.5,
    rotacao: 0.38,
    temperatura: -106
  }
}
cartas.push(ceres)

var haumea = {
  nome: 'Haumea',
  imagem:'https://imagens.brasil.elpais.com/resizer/C7y2VIl3fhi-HJsXeXcM0SAIzd8=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/CCGIXAACHMBTAO34BIKFADZ7KY.jpg',
  atributos: {
    gravidade: 0.4,
    orbital: 103397.2,
    rotacao: 0.16,
    temperatura: -223
  }
}
cartas.push(haumea)

var makemake = {
  nome: 'Makemake',
  imagem:'https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2020/09/Makemake.jpg',
  atributos: {
    gravidade: 0.5,
    orbital: 113098.9,
    rotacao: 0.32,
    temperatura: -243
  }
}
cartas.push(makemake)

var cartaSuperTrunfo = {
  nome: "SuperTrunfo",
  imagem: "https://cdn1.techhq.com/wp-content/uploads/2020/10/shutterstock_1096975310-861x484.png",
  atributos: {
    gravidade: 10,
    orbital: 100000,
    rotacao: 1,
    temperatura: 1
  }
}
cartas.push(cartaSuperTrunfo); 

// cartas na mao do jogador e na mao da máquina
var cartasJogador = []
var cartasMaquina = []

// quantidade de cartas de cada uma
var qtdCartasJogador = 0
var gtdCartasMaquina = 0

// turno atual
var turno = 0
// quem manda na vez: resto da divisao por dois, se resto igual 1 jogador e se resto igual 0 maquina
var quemManda = turno % 2

// cartas atuais do jogador e da máquina
var cartaAtualJogador
var cartaAtualMaquina

// cartas atualmente no monte: cartas da rodada e cartas que empataram
var cartasNoMonte = []

// sorteia todas as cartas distribuindo igualmente
sorteiaCartas()
 
// atualiza o placar com a quantidade de cartas de cada um
atualizaPlacar()

function sorteiaCartas(){
  while (cartas.length > 1) {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartasMaquina.push(cartaMaquina)
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartasJogador.push(cartaJogador)
    cartas.splice(numeroCartaJogador, 1)
  }
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = `Turno ${turno}: Jogador ${cartasJogador.length} x ${cartasMaquina.length} Máquina`
  divPlacar.innerHTML = html
}

// inicia o turno: se quemManda for o jogador primeira carta é do jogador e a segunda é da máquina, e inversamente.
// quem chama é um botão na página (antigo sortear carta)
function iniciaTurno(){
  turno++
  atualizaPlacar()
  quemManda = turno % 2;
  if (quemManda == 1) { // jogador
    cartaAtualJogador = cartasJogador[0]
    cartasJogador.splice(0, 1)
    cartasNoMonte.push(cartaAtualJogador)
    exibeCartaJogador1(cartaAtualJogador)
    
    cartaAtualMaquina = cartasMaquina[0]
    cartasMaquina.splice(0, 1)
    cartasNoMonte.push(cartaAtualMaquina)
    
    document.getElementById('btnIniciaTurno').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    if (ehSuperTrunfo(cartaAtualJogador)) {
      superTrunfo();
    }
  } else { // maquina
    cartaAtualMaquina = cartasMaquina[0]
    cartasMaquina.splice(0, 1)
    cartasNoMonte.push(cartaAtualMaquina)
    exibeCartaJogador1(cartaAtualMaquina)
    
    cartaAtualJogador = cartasJogador[0]
    cartasJogador.splice(0, 1)
    cartasNoMonte.push(cartaAtualJogador)
    
    document.getElementById('btnIniciaTurno').disabled = true
    maquinaFazSuaJogada()
    
    if (ehSuperTrunfo(cartaAtualMaquina)) {
      superTrunfo();
    }
  }
}

function ehSuperTrunfo(carta){
  return carta.nome == "SuperTrunfo"
}

function superTrunfo(){
  document.getElementById('btnJogar').disabled = true
  var divResultado = document.getElementById('resultado')
  if (quemManda == 1) { // jogador
    var html = '<p class="resultado-final">Venceu Super Trunfo!</p>'
    Array.prototype.push.apply(cartasJogador, cartasNoMonte)
    cartasNoMonte = []
    exibeCartaJogador2(cartaAtualMaquina)
  } else { // maquina
    var html = '<p class="resultado-final">Pedeu Super Trunfo!</p>'
    Array.prototype.push.apply(cartasMaquina, cartasNoMonte)
    cartasNoMonte = []
    exibeCartaJogador2(cartaAtualJogador)
  }
  
  atualizaPlacar()
  
  if (cartasJogador.length == 0 || cartasMaquina.length == 0) {
    alert("Fim de Jogo")
    if (cartasMaquina.lenght == 0) {
      htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResultado.innerHTML = html
}

function exibeCartaJogador1(carta) {
  var divCartaJogador1 = document.getElementById("carta-jogador1")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador1.style.backgroundImage = `url(${carta.imagem})`
  var nome = `<p class="carta-subtitle">${carta.nome}</p>`
  var opcoesTexto = ""
  var indiceAtributo = 0;
  for (var atributo in carta.atributos) {
    if(quemManda == 1){
      opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo}: ${carta.atributos[atributo]}`
    } else {
      opcoesTexto += `<p>${atributo}: ${carta.atributos[atributo]}`
    }
    if (indiceAtributo == 0) {
      opcoesTexto += ' m/s2'
    } else if (indiceAtributo == 3) {
      opcoesTexto += ' oC'
    } else {
      opcoesTexto += ' dias'
    }
    if(quemManda == 1){
      opcoesTexto += '<br />'
    } else {
      opcoesTexto += '</p>'
    }
    indiceAtributo++
  }
  var html = "<div id='opcoes' class='carta-status'>"
  divCartaJogador1.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function maquinaFazSuaJogada(){
  jogar()
}

// joga com o atributo selecionado pelo jogador ou a máquina joga com o abrtibuto que ela escolheu
function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
  if (cartaAtualJogador.atributos[atributoSelecionado] > cartaAtualMaquina.atributos[atributoSelecionado]) {
    htmlResultado = `<p class="resultado-final">Venceu com o atributo: ${atributoSelecionado}</p>`
    Array.prototype.push.apply(cartasJogador, cartasNoMonte)
    cartasNoMonte = []
  } else if (cartaAtualJogador.atributos[atributoSelecionado] < cartaAtualMaquina.atributos[atributoSelecionado]) {
    htmlResultado = `<p class="resultado-final">Perdeu com o atributo: ${atributoSelecionado}</p>`
    Array.prototype.push.apply(cartasMaquina, cartasNoMonte)
    cartasNoMonte = []
  } else {
    htmlResultado = `<p class="resultado-final">Empatou com o atributo: ${atributoSelecionado}</p>`
  }
  if (quemManda == 1) { // jogador
    exibeCartaJogador2(cartaAtualMaquina)
  } else { // maquina
    exibeCartaJogador2(cartaAtualJogador)
  }
  
  atualizaPlacar()
  
  document.getElementById('btnJogar').disabled = true

  if (cartasJogador.length == 0 || cartasMaquina.length == 0) {
    alert("Fim de Jogo")
    if (cartasMaquina.lenght == 0) {
      htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }

  divResultado.innerHTML = htmlResultado
}

function obtemAtributoSelecionado() {
  if (quemManda == 1) { // jogador
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value
      }
    }
  } else { // maquina
    if (cartaAtualMaquina.atributos.temperatura > 1){
      return "temperatura"
    }
    if (cartaAtualMaquina.atributos.gravidade > 10){
      return "gravidade"
    }
    if (cartaAtualMaquina.atributos.rotacao > 1){
      return "rotacao"
    }
    if (cartaAtualMaquina.atributos.orbital > 100000){
      return "orbital"
    }
    var index = parseInt(Math.random() * 4)
    var atributosKeys = Object.keys(cartaAtualMaquina.atributos)
    return atributosKeys[index]
  }
}

function exibeCartaJogador2(carta){
  var divCartaJogador2 = document.getElementById("carta-jogador2")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador2.style.backgroundImage = `url(${carta.imagem})`
  var nome = `<p class="carta-subtitle">${carta.nome}`
  var opcoesTexto = ""
  var indiceAtributo = 0;
  for (var atributo in carta.atributos) {
    opcoesTexto += `<p>${atributo}: ${carta.atributos[atributo]}`
    if (indiceAtributo == 0) {
      opcoesTexto += ' m/s2 <p/>'
    } else if (indiceAtributo == 3) {
      opcoesTexto += ' oC <p/>'
    } else {
      opcoesTexto += ' dias <p/>'
    }
    indiceAtributo++
  }
  var html = "<div id='opcoes' class='carta-status --spacing'>"

  divCartaJogador2.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

// vai para a próxima rodada que chama é um botao da página
function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador1" class="carta"></div><div id="carta-jogador2" class="carta"></div>`

  document.getElementById('btnIniciaTurno').disabled = false
  document.getElementById('btnProximaRodada').disabled = true

  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = ""
}