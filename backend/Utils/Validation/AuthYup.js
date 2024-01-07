import yup from 'yup'

class AuthYup {
    registerSchema = yup.object({
        role: yup.string().oneOf(['admin', 'user']).required(),
        picUrl: yup.string(),
        name: yup.string().required(),
        password: yup.string().required(),
        email: yup.string().required(),
    })
}


export default AuthYup = new AuthYup();