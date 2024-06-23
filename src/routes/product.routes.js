import { Router } from "express";
import {getAllProducts, createProduct, getSingleProduct, updateProduct, updateAllProductInfo, deleteProduct} from '../controllers/product.controllers.js';
const router = Router();

router.get("", getAllProducts ).post("", createProduct).get("/:id", getSingleProduct).patch("/:id", updateProduct).put("/:id", updateAllProductInfo).delete("/:id", deleteProduct)


export default router;