import HttpStatus from "../../Utils/Constants/HttpType.js";
import User from "../../Model/User.js";
import  response  from "../../Utils/Constants/Response.js";
import ResTypes  from "../../Utils/Constants/ResTypes.js";

//create SignUp
const signUp = async (req, res) => {
    return response(res,401,HttpStatus.getStatus(401) ,ResTypes.errors.cancelled_token)
} 

export default signUp