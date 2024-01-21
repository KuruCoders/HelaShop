import response from "../../Utils/Constants/Response.js";
import Product from "../../Model/Product.js";
import HttpStatus from "../../Utils/Constants/HttpType.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";

class ProductController {
    //get product
    getProduct = async (req, res) => {
        const { pid } = req.body;
        try {
            const product = await Product.findOne({ pid })
            if (!product) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)
            if (product.deleted === false)
                return response(res, 200, HttpStatus.getStatus(200), { ...ResTypes.successMessages.success,product })
            else if (product.deleted === true)
                return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)
                
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
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
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //add reviews
    addReviews = async(req, res) => {
        const {review,pid} = req.body;
        try {
            const productExist = await Product.findOne({pid})
            if (!productExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)
            
            const result = await Product.updateOne(
                { pid },
                {$push:{review:review}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.review_added)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //delete product
    deleteProduct = async (req, res) => {
        const { pid } = req.body;
        try {
            const productExist = await Product.findOne({ pid })
            if (!productExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)
            if (productExist.deleted === true) return response(res, 403, HttpStatus.getStatus(403), ResTypes.successMessages.product_already_deleted)
            
            const result = await Product.updateOne(
                { pid },
                {$set:{deleted:true}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.product_deleted)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //update product
    updateProduct = async (req, res) => {
        const { pid, name, imgUrl, price, color, discount, description, stock, pieces, category } = req.body
        try {
            const productExist = await Product.findOne({ pid })
            if (!productExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_product)

            const result = await Product.updateOne(
                { pid },
                {$set:{name,imgUrl,price,color,discount,description,stock,pieces,category}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.product_updated)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //upload product pic
}
export default ProductController = new ProductController()