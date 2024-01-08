import nodemailer from 'nodemailer';
import registerEmailTemplate from './RegisterTemplate.js';
import HttpStatus from "../../Utils/Constants/HttpType.js";
import response from "../../Utils/Constants/Response.js";

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVER,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        })
    }
    sendVerificationEmail(user, token,emailTemplateFunction,subject,saveOrUpdate ,res) {
        const message = {
            from: "qwwerrrty11@gmail.com",
            to: user.email,
            subject: subject,
            html: emailTemplateFunction,
        };
        this.transporter.sendMail(message, (err, info) => {
            if (err)
                this.handleEmailError(res, err)
            else
                this.handleEmailSuccess(res,user,saveOrUpdate)
        })
    }
    async handleEmailSuccess(res, user, saveOrUpdate) {
        saveOrUpdate()
        return response(res,200,HttpStatus.getStatus(200),{message:"Email Sent to "+user.email})
    }
    handleEmailError(err, res) {
        console.log(err)
        return response(res, 404, HttpStatus.getStatus(404), { message: err })
    }
}
export default EmailSender = new EmailSender()