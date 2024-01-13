
import Jwt  from "jsonwebtoken";
import User from "../../Model/User.js";
import response from "../../Utils/Constants/Response.js";
import HttpStatus from "../../Utils/Constants/HttpType.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";

const validateToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader) {
        return response(res,401,HttpStatus.getStatus(401),ResTypes.errors.missing_token)
    }
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if (err) {
            return response(res,401,HttpStatus.getStatus(401),err)
        }
        const user = await User.findOne({ _id: decode.id })
        if (!user) {
            return response(res,401,HttpStatus.getStatus(401),ResTypes.errors.no_user)
        }
        req.user = user
        next();
    })
}
export default validateToken