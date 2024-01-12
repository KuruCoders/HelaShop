import React, { useState } from 'react'
import logo from '../../logos/logoAll.svg'
import logoBlack from '../../logos/light-logo.svg'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import LoginValidation from '../../Validation/Authentication/LoginValidation'
import Toaster from '../../Utils/Constants/Toaster'
import AuthService from '../../Services/Auth/AuthService'
import LocalStore from '../../Store/LocalStore'
import { ToastContainer } from 'react-toastify'
import Authenticate from '../../Store/Authenticate'
import CusSwal from '../../Utils/CustomSwal/CusSwal'

export default function Login() {
    const navigate = useNavigate()
    const errorsInit = {
        email: { required: false, message: null },
        password: { required: false, message: null }
    }
    const initStateValues = {
        email: "",
        password: ""
    };
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState(initStateValues)
    const [errors, setErrors] = useState(errorsInit)

    const handleInputs = (e) => {
        const changeObj = { ...values, [e.target.name]: e.target.value }
        setValues(changeObj)
        setErrors(LoginValidation.validateLogin(values))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const captureError = LoginValidation.validateLogin(values)
        setErrors(captureError)
        if (JSON.stringify(captureError) === JSON.stringify(errorsInit)) {
            setLoading(true)
            Toaster.loadingToast("Validating Credentials ......")
            try {
                const response = await AuthService.authLogin(values)
                LocalStore.storeToken(response.data.data.token)
                if (response.data.code === 200) {
                    navigate('/main/dashboard')
                }
            } catch (error) {
                if (error.response.data.code === 404) {
                    Toaster.updateLoadingToast('error', error.response.data.data.message)
                } else if (error.response.data.code === 403) {
                    Toaster.updateLoadingToast('error', error.response.data.data.message)
                }
            } finally {
                setLoading(false)
            }
        }
    }

    const makeSwal = () => {
        CusSwal.customMessageConfirmation("Ooops", "Still Under Development 😥📌,Please Be With Us Until We are Back", () => {
            //do anything
        })
    }

    if (Authenticate.isAuthenticated()) {
        return <Navigate to={"/main/dashboard"} />
    }
    return (
        <>

            <div className="position-relative overflow-hidden bg-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow-none">
                                <div className="card-body">
                                    <NavLink to={'/login'} className="text-nowrap logo-img text-center d-block py-3 pb-5 w-100">
                                        <img src={logo} width={180} alt="loogo" />
                                    </NavLink>
                                    <p className="text-center">Admin Login</p>
                                    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                            <input
                                                onChange={handleInputs}
                                                value={values.email}
                                                type="email"
                                                name='email'
                                                className={`form-control ${errors.email.required ? 'is-invalid' : ''}`}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                {errors.email.message}
                                            </div>
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                onChange={handleInputs}
                                                value={values.password}
                                                name='password'
                                                type="password"
                                                className={`form-control ${errors.password.required ? 'is-invalid' : ''}`}
                                                id="exampleInputPassword1"
                                                required />
                                            <div className="invalid-feedback">
                                                {errors.password.message}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end mb-4">

                                            <NavLink onClick={makeSwal} className="text-primary fw-bold" >Forgot Password ?</NavLink>
                                        </div>
                                        <button type='submit' disabled={loading} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">Admin SignUp</p>
                                            <NavLink to={'/register'} className="text-primary fw-bold ms-2">Create an account</NavLink>
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
