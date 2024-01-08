import mongoose from "mongoose";

const stockType = ['in stock', 'out of stock']

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            minlength: 50
        },
        stock: {
            type: String,
            enum: stockType,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        review: {
            type: [
                {
                    email: {
                        type: String,
                        required: true
                    },
                    text: {
                        type: String,
                        required: true
                    },
                    stars: {
                        type: Number,
                        required: true,
                        min: [1, 'should be from 1 to 5'],
                        max: [5, 'should be from 1 to 5'],
                    },
                    timestamps: { createdAt: "created_at"}
                }
            ]
        }
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Product = mongoose.model('Product', productSchema)
export default Product