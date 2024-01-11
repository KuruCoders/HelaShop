import * as yup from 'yup'

const staffRole = ['cleaner','security','sales','trainee']
class StaffYup{
    addStaff = yup.object({
        email: yup.string().email().required(),
        name:yup.string().required(),
        role:yup.string().oneOf(staffRole).required(),
        age: yup.number().typeError('Must be a number').min(18, "should be a adult").required(),
        gender: yup.string().required(),
        telephone:yup.string().matches(/^[0-9]+$/, 'Must be a number').length(9, 'Must be 9 digits').required(),
        salary:yup.string().matches(/^[0-9]+$/,'Must be a number').max(12,'only 12 digit').required()
    })
}
export default StaffYup = new StaffYup()