import * as yup from 'yup'
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_])[a-zA-Z\d!@#$%^&*()-_]{8,}$/;


const userRole = ['admin', 'user']
const gender = ['male','female']
class UserYup {
    createUser = yup.object({
        email: yup.string().email().required(),
        name: yup.string().required(),
        password: yup.string().matches(password_regex, 'ex:-Amma12345').min(8, 'al least 8 letters').required(),
        telephone: yup.string().matches(/^[0-9]+$/, 'Number only').length(9).required(),
        gender: yup.string().oneOf(gender,'choose one').required(),
        role: yup.string().oneOf(userRole,'choose one').required(),
        age:yup.number().typeError('Must be a number').min(0,'age is positive').required()
    })
    updatePassword = yup.object({
        password: yup.string().matches(password_regex, 'ex:-Amma12345').min(8, 'al least 8 letters').required(),
        conPass: yup.string().oneOf([yup.ref('password')],'Passwords must match').required(),
    })
}
export default UserYup = new UserYup()
