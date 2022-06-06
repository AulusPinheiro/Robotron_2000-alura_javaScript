const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  },
}

controle.forEach ( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca)
  })
})


function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");
  
    if(operacao === "-") {
      peca.value = parseInt(peca.value) - 1
  } else {
      peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach((elemento) =>{
  elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
  }) 
}

function corAmarelo() {
    document.querySelector('.robo').src="Robotron-Amarelo.png";
}

function corAzul() {
  document.querySelector('.robo').src="Robotron-Azul.png";
}

function corBranco() {
  document.querySelector('.robo').src="robotron.png";
}

function corPreto() {
  document.querySelector('.robo').src="Robotron-Preto.png";
}

function corRosa() {
  document.querySelector('.robo').src="Robotron-Rosa.png";
}

function corVermelho() {
  document.querySelector('.robo').src="Robotron-Vermelho.png";
}