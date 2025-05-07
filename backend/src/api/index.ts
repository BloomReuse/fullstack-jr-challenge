import { Router } from "express";
import { getBrandById, listBrands } from "./brand";

const router = Router();

router.get("/brand", listBrands);
router.get("/brand/:id", getBrandById);

export default router;
