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
    //add reviews
    addReviews = async(req, res) => {
        const {review,_id} = req.body;
        try {
            if (!_id) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.missing_productId)
            const productExist = await Product.findOne({ _id })
            if (!productExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)
            
            const result = await Product.updateOne(
                { _id },
                {$push:{review:review}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.review_added)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //delete product
    //update product
}
export default ProductController = new ProductController()