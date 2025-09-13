import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// rotas da API
app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
