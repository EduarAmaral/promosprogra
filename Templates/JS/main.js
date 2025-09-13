import { renderizarCatalogo } from './catalogView.js';
import { inicializarProdutoView } from './produtoView.js';
import { inicializarMenu, inicializarBusca, inicializarDarkMode, inicializarBackToTop } from './ui.js';


// ================================
// Inicialização global
// ================================
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();
  inicializarMenu();
  inicializarBusca();
  inicializarDarkMode();
  inicializarProdutoView();
  inicializarBackToTop();
});
