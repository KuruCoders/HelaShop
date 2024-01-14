import response from "../../Utils/Constants/Response.js";
import HttpStatus from "../../Utils/Constants/HttpType.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import Staff from "../../Model/Staff.js";

class StaffController{
    //getAllStaffs
    getAllStaffs = async (req, res) => {
        try {
            const staffs = await Staff.find({})
            if (!staffs) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_staff)
            return response(res,200,HttpStatus.getStatus(200),{...ResTypes.successMessages.data_retrieved,staffs})
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //getStaff
    getStaff = async (req, res) => {
        const { email } = req.body
        try {
            const staff = await Staff.findOne({ email })
            if (!staff) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_staff)
            return response(res,200,HttpStatus.getStatus(200),{...ResTypes.successMessages.data_retrieved,staff})
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //createStaff
    addStaff = async (req, res) => {
        const { email, name, role, age, gender, salary,telephone } = req.body
        try {
            const staffExist = await Staff.findOne({ email })
            if (staffExist) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.staff_exists)

            const staff = new Staff({ email, name, role, age, gender, salary,telephone })
            const result = await staff.save()
            if (result) {
                return response(res, 201, HttpStatus.getStatus(201), {...ResTypes.successMessages.staff_added,staff })
            } else {
                return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.staff_failed)
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //updateStuff
    updateStaff = async (req, res) => {
        const { email, name, role, age, gender, salary,telephone } = req.body
        try {
            const staffExist = await Staff.findOne({ email })
            if (!staffExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_staff)
            
            const result = await Staff.updateOne(
                { email },
                { $set: { name, role, age, gender, salary,telephone }}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.staff_failed)
            return response(res,200,HttpStatus.getStatus(200),ResTypes.successMessages.staff_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //update staff propic
    updatePictureStaff = async (req, res) => {
        const { email,url } = req.body
        try {
            const staffexist = await Staff.findOne({ email })
            if (!staffexist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_staff)
            
            const result = await Staff.updateOne(
                { email },
                {$set:{url}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.staff_pic_fail)
            return response(res,200,HttpStatus.getStatus(200),ResTypes.successMessages.staff_pic_uploaded)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //deleteStuff
    deleteStuff = async (req, res) => {
        const { email } = req.body
        try {
            const staffExist = await Staff.findOne({ email })
            if (!staffExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_staff)

            const result = await Staff.deleteOne({ email })
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.staff_failed)
            return response(res,200,HttpStatus.getStatus(200),ResTypes.successMessages.staff_deleted)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    
}
export default StaffController = new StaffController()