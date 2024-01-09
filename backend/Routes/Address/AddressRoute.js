import Express from "express";
import AddressController from "../../Controller/Billing/AddressController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";
import AddressYup from "../../Utils/Validation/AddressYup.js";

const router = Express.Router();

router.post("/add-address", validateToken, validateScehma(AddressYup.addAddress), AddressController.addAddress)

export default router