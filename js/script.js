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
