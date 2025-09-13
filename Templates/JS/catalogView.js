const API_BASE = "http://localhost:3000";

// ================================
// Renderização da lista de produtos
// ================================
export async function renderizarCatalogo() {
  const container = document.getElementById('container-produto');
  if (!container) return;


  const resp = await fetch(`${API_BASE}/api/products`);
  const catalogo = await resp.json();

  container.innerHTML = '';
  catalogo.forEach((produto, index) => {
    const card = `
      <div class="card-produto" style="animation-delay:${index * 0.1}s">
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
        <a href="${produto.link}" target="_blank" class="btn-oferta">
          <i class="fa-solid fa-cart-shopping"></i> Ver Oferta
        </a>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}
