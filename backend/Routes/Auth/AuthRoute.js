import Express from "express";
const router = Express.Router();
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";
import AuthController from "../../Controller/Auth/AuthController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import AuthYup from "../../Utils/Validation/AuthYup.js";

router.post("/register", validateScehma(AuthYup.registerSchema) ,AuthController.signUp)
router.post("/mobileRegister", validateScehma(AuthYup.registerSchema) ,AuthController.mobileSignUp)
router.get("/verifyEmail/:token",AuthController.verifyEmail)
router.post("/login", validateScehma(AuthYup.loginSchema), AuthController.signIn)
router.post("/reset-password",validateScehma(AuthYup.passwordReset),AuthController.resetPassword)
router.post("/verify-reset-password/:token",validateScehma(AuthYup.verifyPasswordReset),AuthController.verifyResetPassword)

export default router