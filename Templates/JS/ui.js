const API_BASE = "http://localhost:3000";

// ================================
// Menu Hambúrguer
// ================================
export function inicializarMenu() {
  const toggle = document.querySelector(".menu-toggle i");
  const nav = document.querySelector("nav");
  const btn = document.querySelector(".menu-toggle");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("fa-bars");
    toggle.classList.toggle("fa-xmark");
    btn.setAttribute("aria-expanded", nav.classList.contains("active"));
  });

  // Fecha o menu quando clica em um link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.add("fa-bars");
      toggle.classList.remove("fa-xmark");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

// ================================
// Busca com sugestões
// ================================
export function inicializarBusca() {
  const input = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");
  if (!input || !suggestions) return;

  function mostrarSugestoes(resultados) {
    suggestions.innerHTML = "";

    if (resultados.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhum produto encontrado";
      li.classList.add("sem-resultado");
      suggestions.appendChild(li);
      suggestions.style.display = "block";
      return;
    }

    resultados.forEach((produto) => {
      const li = document.createElement("li");
      li.textContent = produto.Descricao;
      li.addEventListener("click", () => {
        window.location.href = `produto.html?id=${produto.ID}`;
      });
      suggestions.appendChild(li);
    });

    suggestions.style.display = "block";
  }

  async function buscarProdutos(query) {
    try {
      const resp = await fetch(
        `${API_BASE}/api/products?search=${encodeURIComponent(query)}`
      );
      const resultados = await resp.json();
      mostrarSugestoes(resultados);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      suggestions.style.display = "none";
    }
  }

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (query) {
      buscarProdutos(query);
    } else {
      suggestions.style.display = "none";
    }
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (e.target !== input) suggestions.style.display = "none";
  });
}

// ================================
// Dark Mode (com persistência)
// ================================
export function inicializarDarkMode() {
  const darkToggle = document.querySelector(".dark-mode-toggle");
  const logos = document.querySelectorAll(".logo"); // pega TODAS as logos
  if (!darkToggle || logos.length === 0) return;

  function atualizarLogo(isDark) {
    logos.forEach((logo) => {
      logo.src = isDark
        ? "Templates/Img/logolight.png" // logo para tema escuro
        : "Templates/Img/logodark.png"; // logo para tema claro
    });
  }

  const darkModeAtivo = localStorage.getItem("darkMode") === "enabled";
  if (darkModeAtivo) {
    document.body.classList.add("dark");
  }
  atualizarLogo(darkModeAtivo);

  darkToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    atualizarLogo(isDark);
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  });
}

// ================================
// Botão Voltar ao Topo
// ================================
export function inicializarBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
