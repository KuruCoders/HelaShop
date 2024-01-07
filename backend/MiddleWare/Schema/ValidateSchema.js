import HttpStatus from "../../Utils/Constants/HttpType.js";
import response from "../../Utils/Constants/Response.js";


function validateScehma(schema){
    return async function(req,res,next){
        try {
            const body = req.body
            await schema.validate(body)
            next();
        } catch (error) {
            return response(res,400, HttpStatus.getStatus(400) ,{message:error.message})
        }
    }
}
export default validateScehma;