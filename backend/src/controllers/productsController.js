import pool from "../db.js";

function toProduct(row) {
  return {
    ID: row.id,
    Descricao: row.descricao,
    Imagem: row.imagem,
    PrecoOriginal: row.preco_original,
    PrecoPromocaoPix: row.preco_pix,
    PrecoPromocaoCartao: row.preco_cartao,
    link: row.link,
    info: row.info,
  };
}

export async function getAll(req, res) {
  const { search } = req.query;
  try {
    const result = search
      ? await pool.query(
          "SELECT * FROM products WHERE LOWER(descricao) LIKE $1 ORDER BY id",
          [`%${search.toLowerCase()}%`]
        )
      : await pool.query("SELECT * FROM products ORDER BY id");

    res.json(result.rows.map(toProduct));
  } catch (err) {
    console.error("Erro em getAll:", err); // 🔥 log do erro real
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
}

export async function getById(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [req.params.id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json(toProduct(result.rows[0]));
  } catch (err) {
    console.error("Erro em getById:", err); // 🔥 log do erro real
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
}

export async function getRecommended(req, res) {
  const excludeId = Number(req.query.excludeId || 0);
  const limit = Number(req.query.limit || 3);
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE id != $1 ORDER BY RANDOM() LIMIT $2::int",
      [excludeId, limit]
    );
    res.json(result.rows.map(toProduct));
  } catch (err) {
    console.error("Erro em getRecommended:", err); // 🔥 log do erro real
    res.status(500).json({ error: "Erro ao buscar recomendados" });
  }
}
