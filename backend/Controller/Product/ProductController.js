import response from "../../Utils/Constants/Response.js";
import Product from "../../Model/Product.js";
import HttpStatus from "../../Utils/Constants/HttpType.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";

class ProductController {
    //create prooduct
    addProduct = async (req, res) => {
        const { name, imgUrl, price, discount, description, stock, category, color, review, pieces,deleted } = req.body;
        try {
            const product = new Product({ name, imgUrl, price, discount, description, stock, category, color, review, pieces,deleted })
            const result = await product.save();
            if (result) {
                return response(res, 201, HttpStatus.getStatus(201), { product, ...ResTypes.successMessages.product_added })
            } else {
                return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.product_failed)
            }
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //add rating
    //delete product
    //update product
}
export default ProductController = new ProductController()