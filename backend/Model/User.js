import mongoose from "mongoose";

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
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        isVerfied: {
            type: boolean,
            default: false
        },
        isActive: {
            type: boolean,
            default: true
        },
        photoUrl: {
            type: String,
            default: getRandomDefaultpic
        }
    },
    {
        versionKey: '__v',
        timestamps: { createdAt, updatedAt }
    }
);
const User = mongoose.model('User', userSchema);
export default User;