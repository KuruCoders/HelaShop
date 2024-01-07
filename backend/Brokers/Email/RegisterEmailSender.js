import nodemailer from 'nodemailer';
import registerEmailTemplate from './RegisterTemplate.js';
import HttpStatus from "../../Utils/Constants/HttpType.js";
import response from "../../Utils/Constants/Response.js";

class RegisterEmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVER,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        })
    }
    sendVerificationEmail(user, token, res) {
        const message = {
            from: "qwwerrrty11@gmail.com",
            to: user.email,
            subject: "Email verification",
            html: registerEmailTemplate(token),
        };
        this.transporter.sendMail(message, (err, info) => {
            if (err)
                this.handleEmailError(res, err)
            else
                this.handleEmailSuccess(res,user)
        })
    }
    async handleEmailSuccess(res,user) {
        await user.save()
        return response(res,200,HttpStatus.getStatus(200),{message:"Email Sent to "+user.email})
    }
    handleEmailError(err, res) {
        console.log(err)
        return response(res, 404, HttpStatus.getStatus(404), { message: err })
    }
}
export default RegisterEmailSender = new RegisterEmailSender()