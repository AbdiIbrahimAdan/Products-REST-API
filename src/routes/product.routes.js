import { Router } from "express";
import {productvalidation} from '../middleware/product.middleware.js'
import {getAllProducts, createProduct, getSingleProduct, updateProduct, updateAllProductInfo, deleteProduct} from '../controllers/product.controllers.js';
const router = Router();

router.get("", getAllProducts ).post("", createProduct).get("/:id", getSingleProduct).patch("/:id", productvalidation, updateProduct).put("/:id", productvalidation,updateAllProductInfo).delete("/:id", deleteProduct)


export default router;