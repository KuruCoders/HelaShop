import mongoose from "mongoose";
import sriLankanProvinces from "../Utils/Constants/Address/Provinces.js";
import sriLankanDistricts from "../Utils/Constants/Address/District.js";

const addressSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique:true
        },
        district: {
            type: String,
            enum: sriLankanDistricts,
            required: true
        },
        province: {
            type: String,
            enum: sriLankanProvinces,
            required: true
        },
        country: {
            type: String,
            default: "sri lanka"
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        },
        zipCode:String
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Address = mongoose.model('Address', addressSchema)
export default Address