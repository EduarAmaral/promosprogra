import express from "express";
import { getAll, getById, getRecommended } from "../controllers/productsController.js";

const router = express.Router();

router.get("/recommended/list", getRecommended);
router.get("/", getAll);
router.get("/:id", getById);

export default router;
