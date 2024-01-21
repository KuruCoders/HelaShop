import mongoose from "mongoose";
import sriLankanProvinces from "../Utils/Constants/Address/Provinces.js";
import sriLankanDistricts from "../Utils/Constants/Address/District.js";
import gender from "../Utils/Constants/Gender.js";

const urlPic = [
    "https://avatars.githubusercontent.com/u/54225118?v=4",
    "https://avatars.githubusercontent.com/u/22358125?v=4",
    "https://avatars.githubusercontent.com/u/98579886?v=4",
    "https://avatars.githubusercontent.com/u/17646305?v=4"
]
const getRandomDefaultpic = () => {
    const randomIndex = Math.floor(Math.random() * urlPic.length);
    return urlPic[randomIndex];
}
const roleType = ['admin', 'user']

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        telephone: {
            type: Number,
            required:true
        },
        gender: {
            type: String,
            lowercase: true,
            required: true,
            enum:gender
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        age: {
            type: Number,
            min:[0,'age is positive'],
            required:true
        },
        isVerfied: {
            type: Boolean,
            default: false
        },
        verifyRegisterToken: String,
        registerExpire: Date,
        isActive: {
            type: Boolean,
            default: true
        },
        photoUrl: {
            type: String,
            default: getRandomDefaultpic
        },
        role: {
            type: String,
            enum: roleType,
            default:'user'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
        address: {
            district: {
                type: String,
                enum: sriLankanDistricts,
                lowercase: true,
            },
            province: {
                type: String,
                enum: sriLankanProvinces,
                lowercase: true,
            },
            country: {
                type: String,
                default:'sri lanka'
            },
            city: {
                type: String,
            },
            street: {
                type: String,
            },
            postalCode: {
                type: Number,
            },
            zipCode: String,
        }
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
);
const User = mongoose.model('User', userSchema);
export default User;