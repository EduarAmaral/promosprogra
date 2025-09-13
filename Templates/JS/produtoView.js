const API_BASE = "http://localhost:3000";

// ================================
// Inicialização de produto (detalhe + recomendados)
// ================================
  function inicializarProdutoView() {
  const url = window.location.pathname;

  // Só executa se estiver na página de detalhe
  if (!url.endsWith("produto.html")) return;

  const params = new URLSearchParams(window.location.search);
  const idAtual = parseInt(params.get("id"));

  if (isNaN(idAtual)) return;

  renderizarDetalheProduto(idAtual);
  renderizarRecomendados(idAtual);
}

// ================================
// Renderização da página de detalhe
// ================================
async function renderizarDetalheProduto(idAtual) {
  const container = document.getElementById("detalhe-produto");
  if (!container) return;

  try {
    const resp = await fetch(`${API_BASE}/api/products/${idAtual}`);
    if (!resp.ok) {
      container.innerHTML = "<p>Produto não encontrado.</p>";
      return;
    }

    const produto = await resp.json();

    // Atualizar título e meta
    document.title = `${produto.Descricao} | Promos do Programador`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `Compre ${produto.Descricao} com desconto no Pix e cartão. Aproveite já!`
      );
    }
    const breadcrumb = document.getElementById("breadcrumb-produto");
    if (breadcrumb) breadcrumb.textContent = produto.Descricao;

    container.innerHTML = `
      <div class="produto-detalhe-card">
        <!-- Imagem -->
        <div class="produto-detalhe-imagem">
          <img src="Templates/Img/${produto.Imagem}" alt="${produto.Descricao}">
        </div>

        <!-- Informações -->
        <div class="produto-detalhe-info">
          <h2>${produto.Descricao}</h2>
          
          <div class="produto-precos">
            <p class="preco-original">De: <span>${produto.PrecoOriginal}</span></p>
            <p class="preco-pix">Por: <span>${produto.PrecoPromocaoPix}</span> <span class="pix">no Pix</span></p>
            <p class="preco-cartao">Ou: <span>${produto.PrecoPromocaoCartao}</span> no cartão</p>
            <h3>Informações do Produto:</h3>
            <p class="informações"><span>${produto.info}</span></p>
          </div>

          <a href="${produto.link}" target="_blank" class="btn-comprar">
            <i class="fa-solid fa-cart-shopping"></i> Comprar Agora
          </a>
        </div>
      </div>
    `;
  } catch (err) {
    console.error("Erro ao carregar produto:", err);
    container.innerHTML = "<p>Erro ao carregar produto.</p>";
  }
}

// ================================
// Renderizar Produtos Recomendados
// ================================
async function renderizarRecomendados(idAtual) {
  const container = document.getElementById("recomendados-container");
  if (!container) return;

  try {
    const resp = await fetch(
      `${API_BASE}/api/products/recommended/list?excludeId=${idAtual}&limit=3`
    );
    if (!resp.ok) {
      container.innerHTML = "<p>Erro ao carregar recomendados.</p>";
      return;
    }

    const recomendados = await resp.json();

    container.innerHTML = recomendados
      .map(
        (produto) => `
      <div class="card-produto">
        <div class="card-imagem">
          <a href="produto.html?id=${produto.ID}">
            <img src="Templates/Img/${produto.Imagem}" 
                 alt="${produto.Descricao}" 
                 loading="lazy"
                 onerror="this.src='Templates/Img/fallback.webp'">
          </a>
        </div>
        <p class="marca">${produto.Descricao}</p>
        <p class="previous-price">${produto.PrecoOriginal}</p>
        <p class="actual-price">${produto.PrecoPromocaoPix} <span class="pix">no Pix</span></p>
        <p class="cartao">${produto.PrecoPromocaoCartao} no cartão</p>
        <a href="produto.html?id=${produto.ID}" class="btn-oferta">
          <i class="fa-solid fa-cart-shopping"></i>
          Ver Detalhes
        </a>
      </div>
    `
      )
      .join("");
  } catch (err) {
    console.error("Erro ao carregar recomendados:", err);
    container.innerHTML = "<p>Erro ao carregar recomendados.</p>";
  }
}

export {
  renderizarDetalheProduto,
  renderizarRecomendados,
  inicializarProdutoView,
};
