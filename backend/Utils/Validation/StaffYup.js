import yup from 'yup'
import staffRole from '../Constants/StaffType.js'

class StaffYup{
    getStaff = yup.object({
        email:yup.string().email().required(),
    })
    addStaff = yup.object({
        email:yup.string().email().required(),
        name:yup.string().required(),
        role:yup.string().oneOf(staffRole).required(),
        age: yup.number().min(18, "should be a adult"),
        gender: yup.string().required(),
        salary:yup.number().min(0,'salary should be positive')
    })
    updateStaff = yup.object({
        email:yup.string().email().required(),
        name:yup.string().required(),
        role:yup.string().oneOf(staffRole).required(),
        age: yup.number().min(18, "should be a adult").required(),
        gender: yup.string().required(),
        salary:yup.number().min(0,'salary should be positive')
    })
    updatePictureStaff = yup.object({
        email:yup.string().email().required(),
        url:yup.string().required()
    })
    deleteStaff = yup.object({
        email:yup.string().email().required(),
    })
}
export default StaffYup = new StaffYup()