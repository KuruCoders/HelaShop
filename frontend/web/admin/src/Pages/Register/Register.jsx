import React, { useState } from 'react'
import logo from '../../logos/logoAll.svg'
import logoBlack from '../../logos/light-logo.svg'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Authenticate from '../../Store/Authenticate'
import RegisterValidation from '../../Validation/Authentication/RegisterValidation'
import AuthService from '../../Services/Auth/AuthService'
import { ToastContainer } from 'react-toastify'
import Toaster from '../../Utils/Constants/Toaster'
export default function Register() {
    const navigate = useNavigate()

    const errorsInit = {
        email: { required: false, message: null },
        password: { required: false, message: null },
        username: { required: false, message: null },
    }
    const initStateValues = {
        email: "",
        password: "",
        username: "",
    };
    const [values, setValues] = useState(initStateValues)
    const [errors, setErrors] = useState(errorsInit)
    const [loading, setLoading] = useState(false)

    const handleInputs = (e) => {
        const changeObj = { ...values, [e.target.name]: e.target.value }
        setValues(changeObj)
        setErrors(RegisterValidation.validateRegister(values))
        //whenever values changed rollbacks to init state
        // setApiRes(errApiMsg)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const captureError = RegisterValidation.validateRegister(values)
        setErrors(captureError)

        if (JSON.stringify(captureError) === JSON.stringify(errorsInit)) {
            Toaster.loadingToast("Please Wait.....")
            setLoading(true)
            try {
                const response = await AuthService.authRegister(values)
                Toaster.updateLoadingToast("success", response.data.data.message, () => { navigate('/login') })
            } catch (error) {
                if (error.response.data.code === 403) {
                    Toaster.updateLoadingToast("error", error.response.data.data.message, () => { navigate('/login') })
                } else if (error.response.data.code === 500) {
                    Toaster.updateLoadingToast("server error", error.response.data.data.message)
                }
            }
            finally {
                // Close the loading toast in the finally block
                // Toaster.dismissLoadingToast()
                setLoading(false)
            }
        }
    }
    if (Authenticate.isAuthenticated()) {
        return <Navigate to={"/main/dashboard"} replace={ true} />
    }
    return (
        <>
            <div className="position-relative overflow-hidden bg-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow-none">
                                <div className="card-body">
                                    <NavLink to={'/register'} className="text-nowrap logo-img text-center d-block py-3 pb-5 w-100">
                                        <img src={logo} width={180} alt="logo" />
                                    </NavLink>
                                    <p className="text-center">Admin Register</p>
                                    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputtext1" className="form-label">Name</label>
                                            <input
                                                onChange={handleInputs}
                                                type="text"
                                                name="username"
                                                value={values.username}
                                                className={`form-control ${errors.username.required ? 'is-invalid' : ''}`}
                                                id="exampleInputtext1"
                                                aria-describedby="textHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                {errors.username.message}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                            <input
                                                onChange={handleInputs}
                                                type="email"
                                                name='email'
                                                value={values.email}
                                                className={`form-control ${errors.email.required ? 'is-invalid' : ''}`}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                {errors.email.message}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                onChange={handleInputs}
                                                type="password"
                                                name='password'
                                                className={`form-control ${errors.password.required ? 'is-invalid' : ''}`}
                                                id="exampleInputPassword1"
                                                required />
                                            <div className="invalid-feedback">
                                                {errors.password.message}
                                            </div>
                                        </div>
                                        <button type='submit' disabled={loading} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</button>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                                            <NavLink className="text-primary fw-bold ms-2" to={'/login'}>Sign In</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <img src={logoBlack} width={70} style={{ right: 10, bottom: 10 }} className='position-absolute' alt="logo" />

        </>


    )
}
