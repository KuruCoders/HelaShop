import Express from "express";
import StaffController from "../../Controller/Staff/StaffController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";
import StaffYup from "../../Utils/Validation/StaffYup.js";

const router = Express.Router();

router.get("/get-allStaff",validateToken,StaffController.getAllStaffs)
router.post("/get-staff",validateToken,validateScehma(StaffYup.getStaff),StaffController.getStaff)
router.post("/add-staff",validateToken,validateScehma(StaffYup.addStaff),StaffController.addStaff)
router.put("/update-staff",validateToken,validateScehma(StaffYup.updateStaff),StaffController.updateStaff)
router.put("/pic-update-staff",validateToken,validateScehma(StaffYup.updatePictureStaff),StaffController.updatePictureStaff)
router.delete("/delete-staff",validateToken,validateScehma(StaffYup.deleteStaff),StaffController.deleteStuff)

export default router