import HttpStatus from "../../Utils/Constants/HttpType.js";
import User from "../../Model/User.js";
import response from "../../Utils/Constants/Response.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import registerEmailTemplate from "../../Brokers/Email/RegisterTemplate.js";
import successEmailTemplate from "../../Brokers/Email/SuccessRegister.js";
import generateToken from "../../Utils/Auth/Token.js";
import EmailSender from '../../Brokers/Email/EmailSender.js'
import passwordReset from "../../Brokers/Email/PasswordTemplate.js";


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
class AuthController {

    //create SignUp
    signUp = async (req, res) => {
        const { name, email, password, role, picUrl } = req.body;
        try {
            const existing = await User.findOne({ email })
            if (existing) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)

            const hashedPassword = await bcrypt.hash(password, 10);

            const token = Math.random().toString(36).slice(-8)
            const verifyRegisterToken = token
            const registerExpire = Date.now() + 360000

            const user = new User({ name, email, password: hashedPassword, role, picUrl, verifyRegisterToken, registerExpire })
            //send the mail
            EmailSender.sendVerificationEmail(user, token, registerEmailTemplate(token), "Email Verification", async() => {
                await user.save()
            }, res)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500),error)
        }
    }
    //email verify endpoint
    verifyEmail = async (req, res) => {

        const { token } = req.params
        let user = await User.findOne({ verifyRegisterToken: token })
        if (!user) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.invalid_token);
        if (new Date(user.registerExpire) < new Date()) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.cancelled_token)

        const result = await User.updateOne(
            { verifyRegisterToken: token },
            { $set: { isVerfied: true, verifyRegisterToken: "verified", registerExpire: "" } }
        )
        if (result) {
            return res.status(201).send(successEmailTemplate())
        } else {
            return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.unverified_user)
        }
    }
    // signUp for the mobile
    mobileSignUp = async (req, res) => {
        const { name, email, password, role, picUrl } = req.body
        try {
            const existing = await User.findOne({ email })
            if (existing) {
                return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)
            }
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = new User({ name, email, password: hashedPassword, role, picUrl })
            await user.save()
            return response(res, 201, HttpStatus.getStatus(201), ResTypes.successMessages.user_created)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), { message: error })
        }
    }
    //create SignIn
    signIn = async (req, res) => {
        const { email, password, role } = req.body;
        
        try {
            const user = await User.findOne({ email,role })
            if (!user) {
                return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user);
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.invalid_password)
            }
            const token = generateToken(user)
            return response(res, 200, HttpStatus.getStatus(200), { token, ...ResTypes.successMessages.login_successful })
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    // create reset-password
    resetPassword = async (req, res) => {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email })
            if (!user) {
                return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)
            }
            const token = Math.random().toString(36).slice(-8)
            const expireDate = Date.now() + 360000
            EmailSender.sendVerificationEmail(user, token, passwordReset(token), "Password Reset", async() => {
                const result = await User.updateOne(
                    { email },
                    { $set: { resetPasswordToken: token, resetPasswordExpire: expireDate } }
                )
                if (!result) {
                    return response(res, 500, HttpStatus.getStatus(500), ResTypes.errors.failed_operation)
                }
            }, res)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), { message: error })
        }
    }
    // verify reset-password with token
    verifyResetPassword = async (req, res) => {
        const { token } = req.params
        const { password } = req.body 
        try {
            if(!token) return response(res,404,HttpStatus.getStatus(404),ResTypes.errors.missing_token)

            const user = await User.findOne({ resetPasswordToken: token })
            if (!user) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.invalid_token)
    
            const tokenExpire = await User.findOne({ resetPasswordExpire: { $gt: Date.now() } })
            if(!tokenExpire) return response(res,404,HttpStatus.getStatus(404),ResTypes.errors.token_expired)
    
            const hashedPasswod = await bcrypt.hash(password, 10)
            const result = await User.updateOne(
                { resetPasswordToken:token },
                {$set:{resetPasswordToken:"",resetPasswordExpire:"",password:hashedPasswod}}
            )
            if (result.modifiedCount===0) {
                return response(res, 500, HttpStatus.getStatus(500), ResTypes.errors.failed_operation)
            }
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.password_reseted)
        } catch (error) {
            return response(res, 500, HttpStatus.getStatus(500), { message: error })
        }
    }
}

export default AuthController = new AuthController()