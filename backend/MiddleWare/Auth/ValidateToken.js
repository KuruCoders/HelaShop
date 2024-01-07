import HttpError from "http-errors";
import Jwt, { decode }  from "jsonwebtoken";
import  errors  from "../../Utils/Constants/ResTypes.js";
import User from "../../Model/User.js";

const validateToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return errors.missing_token; 
    }
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if (err) {
            return errors.invalid_token
        }
        const user = await User.findOne({ _id: decode.id })
        if (!user) {
            return errors.no_user
        }
        req.user = user
        next();
    })
}
export default validateToken