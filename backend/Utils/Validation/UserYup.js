import yup from 'yup'
import sriLankanProvinces from "../../Utils/Constants/Address/Provinces.js";
import sriLankanDistricts from "../../Utils/Constants/Address/District.js";

const userType = ['user', 'admin']
class UserYup {
    getUser = yup.object({
        role: yup.string().oneOf(userType).required(),
        email: yup.string().email().required(),
    })
    createUser = yup.object({
        role: yup.string().oneOf(userType).required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        name: yup.string().required(),
    })
    deactivateUser = yup.object({
        email: yup.string().email().required()
    })
    updateUser = yup.object({
        role: yup.string().oneOf(userType).required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        photoUrl: yup.string().required(),
        name: yup.string().required(),
    })
    manipulateAddress = yup.object({
        email: yup.string().email().required(),
        address: yup.object().shape({
            district: yup.string().oneOf(sriLankanDistricts).required().lowercase(),
            province: yup.string().oneOf(sriLankanProvinces).required().lowercase(),
            country: yup.string().default('sri lanka'),
            city: yup.string().required(),
            street: yup.string().required(),
            postalCode: yup.number().required(),
            zipCode: yup.string(),
        })
    })
}
export default UserYup = new UserYup()