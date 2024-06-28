// ativar links do Menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

//ativar itens do orçamento

const paramentros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  if (paramentros) {
    const elemento = document.getElementById(parametro);
    elemento.checked = true;
  }
}
paramentros.forEach(ativarProduto);

//perguntas frequente

const perguntas = document.querySelectorAll('.perguntas button');
function ativaerPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);

  console.log(pergunta);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativaerPergunta);
}
perguntas.forEach(eventoPerguntas);
