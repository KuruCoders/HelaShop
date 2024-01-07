import HttpStatus from "../../Utils/Constants/HttpType.js";
import User from "../../Model/User.js";
import response from "../../Utils/Constants/Response.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import bcrypt from "bcryptjs";

class AuthController {
    //create SignUp
    signUp = async (req, res) => {
        const { name,email,password,role,picUrl } = req.body;
        try {
            const existing = await User.findOne({ email })
            if (existing) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)
            
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({name,email,password:hashedPassword,role,picUrl })
            await user.save();
            return response(res, 201, HttpStatus.getStatus(201), ResTypes.successMessages.user_created);
 
        } catch (error) {
            return response(res,500,HttpStatus.getStatus(500))
        }
    }

    //create SignIn
    signIn = async (req, res) => {
        return response(res, 401, HttpStatus.getStatus(401), ResTypes.successMessages.data_retrieved)
    }
}

export default AuthController = new AuthController()