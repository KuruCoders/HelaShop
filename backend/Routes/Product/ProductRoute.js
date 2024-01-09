import Express from "express";
import ProductController from "../../Controller/Product/ProductController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import ProductYup from "../../Utils/Validation/ProductYup.js";
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";

const router = Express.Router();

router.post("/add-product", validateToken ,validateScehma(ProductYup.addProduct), ProductController.addProduct)
router.post("/add-product-review", validateToken ,validateScehma(ProductYup.addReviews), ProductController.addReviews)
router.post("/delete-product", validateToken ,validateScehma(ProductYup.deleteProduct), ProductController.deleteProduct)

export default router