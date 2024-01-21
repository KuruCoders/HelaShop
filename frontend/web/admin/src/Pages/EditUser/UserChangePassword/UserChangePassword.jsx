import React, { useState } from 'react'
import UserService from '../../../Services/User/UserService'
import Toaster from '../../../Utils/Constants/Toaster'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler'
import { useFormik } from 'formik'
import UserYup from '../../../Validation/User/UserYup'

export default function UserChangePassword({ data }) {
    const email = data.email
    const [showEye, setShowEye] = useState(false)
    const handleShowPassword = () => {
        if (showEye) setShowEye(false)
        if (!showEye) setShowEye(true)
    }
    const initValues = {
        password: '',
        conPass: ''
    }
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initValues,
        validationSchema: UserYup.updatePassword,
        onSubmit: async (values) => {
            Toaster.loadingToast("Changing Password .......")
            try {
                const result = await UserService.updatePassword(email, values.password)
                if (result.data.code === 200) Toaster.justToast('success', result.data.data.message, () => { })
            } catch (error) {
                ResponseHandler.handleResponse(error)
            } finally {
                Toaster.dismissLoadingToast()
                
            }
        }

    })
    return (
        <div className="col-lg-12 d-flex align-items-stretch mt-0">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4 py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title fw-bolder fs-6">Change Password</h5>
                        <i className="ti ti-lock fs-6" />
                        {/* <h5 className="card-title fw-bolder fs-6 text-danger"></h5> */}
                    </div>
                    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                        <div className="row my-2">
                            <div className="col-12 col-md-6 mb-3 m-md-0">
                                <div className="input-group">
                                    <input
                                        type={showEye?'text':'password'}
                                        placeholder='Enter New Password'
                                        onChange={handleChange}
                                        className={`form-control ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                        name='password'
                                        id="InputPassword"
                                        aria-describedby="emailHelp"
                                        value={values.password}
                                    />
                                    <span className="input-group-text">
                                        <i className="ti ti-settings fs-6" />
                                    </span>
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-group">
                                    <input
                                        placeholder='Enter Confirm Passsword'
                                        type={showEye?'text':'password'}
                                        name='conPass'
                                        value={values.conPass}
                                        onChange={handleChange}
                                        className={`form-control ${(errors.conPass && touched.conPass) ? 'is-invalid' : ''}`}
                                        id="InputConPass"
                                    />
                                    <span className="input-group-text" >
                                        <i className="ti ti-settings fs-6" />
                                    </span>
                                    <div className="invalid-feedback">
                                        {errors.conPass}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-0">
                            <button type='button' className='btn btn-info mx-2' onClick={handleShowPassword}>{showEye?'Hide':'Show' }</button>
                            <button type="submit" className="btn btn-warning">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
