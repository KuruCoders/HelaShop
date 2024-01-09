import yup from 'yup'

class AddressYup {
    addAddress = yup.object({
        email: yup.string().email().required(),
        district: yup.string().required(),
        province: yup.string().required(),
        country: yup.string().required(),
        postalCode: yup.number().required(),
        zipCode: yup.string(),
        street: yup.string().required(),
        city: yup.string().required(),
    })
}
export default AddressYup = new AddressYup()