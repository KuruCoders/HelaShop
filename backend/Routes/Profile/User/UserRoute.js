import Express from "express";
import UserController from "../../../Controller/Profile/User/UserController.js";
import validateScehma from "../../../MiddleWare/Schema/ValidateSchema.js";
import validateToken from "../../../MiddleWare/Auth/ValidateToken.js";
import UserYup from "../../../Utils/Validation/UserYup.js";

const router = Express.Router()

router.get("/get-users",validateToken,UserController.getAllUsers)
router.post("/get-user",validateToken,validateScehma(UserYup.getUser),UserController.getUserByEmail)
router.post("/create-user",validateToken,validateScehma(UserYup.createUser),UserController.createUser)
router.post("/deactivate-user",validateToken,validateScehma(UserYup.deactivateUser),UserController.deactivateUser)
router.put("/update-user", validateToken, validateScehma(UserYup.updateUser), UserController.updateUser)
router.put("/pic-update",validateToken,validateScehma(UserYup.updatePictureUser),UserController.updateUserPic)
router.put("/update-password",validateToken,validateScehma(UserYup.updatePassword),UserController.updatePassword)
router.put("/manipulate-user-address",validateToken,validateScehma(UserYup.manipulateAddress),UserController.manipulateAddress)

export default router