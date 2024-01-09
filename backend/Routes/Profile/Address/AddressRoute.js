import Express from "express";
import AddressController from "../../../Controller/Profile/Billing/AddressController.js";
import validateScehma from "../../../MiddleWare/Schema/ValidateSchema.js";
import validateToken from "../../../MiddleWare/Auth/ValidateToken.js";
import AddressYup from "../../../Utils/Validation/AddressYup.js";

const router = Express.Router();

router.post("/get-address", validateToken, validateScehma(AddressYup.getAddress), AddressController.getAddress)
router.post("/add-address", validateToken, validateScehma(AddressYup.addAddress), AddressController.addAddress)
router.post("/update-address", validateToken, validateScehma(AddressYup.updateAddress), AddressController.updateAddress)

export default router