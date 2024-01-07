import HttpStatus from "../../Utils/Constants/HttpType.js";
import User from "../../Model/User.js";
import response from "../../Utils/Constants/Response.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import registerEmailTemplate from "../../Brokers/Email/RegisterTemplate.js";
import successEmailTemplate from "../../Brokers/Email/SuccessRegister.js";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
class AuthController {

    //create SignUp
    signUp = async (req, res) => {
        const { name,email,password,role,picUrl } = req.body;
        try {
            const existing = await User.findOne({ email })
            if (existing) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)
            
            const hashedPassword = await bcrypt.hash(password, 10);
            //send the mail
            const token = Math.random().toString(36).slice(-8)
            const verifyRegisterToken = token
            const registerExpire = Date.now() + 360000

            const user = new User({name,email,password:hashedPassword,role,picUrl,verifyRegisterToken,registerExpire })

            const transporter = nodemailer.createTransport({
                service: process.env.MAIL_SERVER,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                }
            })
            const msg = {
                from: "qwwerrrty11@gmail.com",
                to: email,
                subject: "Email verification",
                html: registerEmailTemplate(token),
            }
            transporter.sendMail(msg, async(err, info) => {
                if (err) {
                    console.log(err)
                    return response(res, 404, HttpStatus.getStatus(404), { message: err })
                }
                //save the user
                await user.save();
                return response(res,200,HttpStatus.getStatus(200),{message:"Email Sent to "+email})
            })
        } catch (error) {
            return response(res,500,HttpStatus.getStatus(500))
        }
    }
    //email verify endpoint
    verifyEmail = async (req, res) => {
        
        const { token } = req.params
        let user = await User.findOne({ verifyRegisterToken:token })
        if (!user) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.invalid_token);
        if(new Date(user.registerExpire)<new Date()) return response(res,403,HttpStatus.getStatus(403),ResTypes.errors.cancelled_token)
        
        const result = await User.updateOne(
            { verifyRegisterToken: token },
            {$set:{isVerfied:true,verifyRegisterToken:''}}
        )
        if (result) {
            // return response(res, 201, HttpStatus.getStatus(201), ResTypes.successMessages.user_created)
            return res.status(201).send(successEmailTemplate())
        } else {
            return response(res,403,HttpStatus.getStatus(403),ResTypes.errors.unverified_user)
        }
    }
    //create SignIn
    signIn = async (req, res) => {
        return response(res, 401, HttpStatus.getStatus(401), ResTypes.successMessages.data_retrieved)
    }
}

export default AuthController = new AuthController()