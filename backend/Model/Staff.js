import mongoose from "mongoose";
import gender from "../Utils/Constants/Gender.js";
import staffRole from "../Utils/Constants/StaffType.js";

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

const staffSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique:true
        },
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: staffRole,
            required: true,
            default: 'sales',
            lowercase:true,
        },
        age: {
            type: Number,
            min: [18, 'should be a adult'],
            required:true,
        },
        gender: {
            type: String,
            lowercase:true,
            required: true,
            enum: gender
        },
        salary: {
            type: Number,
            default: 20000,
            min: [0, 'salary is greater than 0'],
            required:true,
        },
        url: {
            type: String,
            default:getRandomDefaultpic
        },
        telephone: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Staff = mongoose.model("Staff", staffSchema)
export default Staff