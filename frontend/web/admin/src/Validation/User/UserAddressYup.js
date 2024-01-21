import * as yup from 'yup'
import sriLankanDistricts from '../../Utils/Constants/Address/District'
import sriLankanProvinces from '../../Utils/Constants/Address/Provinces'

class UserAddressYup{
    addAddress = yup.object({
        district: yup.string().lowercase().required().oneOf(sriLankanDistricts),
        province: yup.string().lowercase().required().oneOf(sriLankanProvinces),
        postalCode: yup.number().required('required'),
        street: yup.string().required(),
        city: yup.string().required(),
    })
}
export default UserAddressYup = new UserAddressYup()