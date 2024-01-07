import Express from "express";
const router = Express.Router();
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";
import signUp from "../../Controller/Auth/AuthController.js";

router.post('/', signUp)

export default router