import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const stockType = ['in stock', 'out of stock']

const productSchema = new mongoose.Schema(
    {
        pid: {
            type: String,
            default: uuidv4,
            unique:true
        },
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
        color: {
            type: String,
            default:'red'
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
        pieces: {
            type: Number,
           required:true 
        },
        category: {
            type: String,
            required: true
        },
        review: [
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
                    min: [1, 'star must be at least 1'],
                    max: [5, 'star must be at most 5'],
                },
                created_at: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        deleted: {
            type: Boolean,
            required: true,
            default:false
        },
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Product = mongoose.model('Product', productSchema)
export default Product