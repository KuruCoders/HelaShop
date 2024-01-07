import HttpError from "http-errors";
import User from "../../Model/User.js";
import  response  from "../../Utils/Constants/Response.js";

//create SignUp
const signUp = async (req, res) => {
    return response(res,201,"created","Done")
} 

export default signUp