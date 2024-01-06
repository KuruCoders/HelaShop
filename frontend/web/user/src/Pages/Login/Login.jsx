import React, { useState } from 'react'
import logoDark from '../../logos/dark-logo.svg'
import logo from '../../logos/logoAll.svg'
import background from '../../logos/background.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginValidator from '../../Validation/LoginValidator'

export default function Login() {

    const navigate = useNavigate();
    const errorsInit = {
        email: { required: false, message: null },
        password: { required: false, message: null },
    }
    const errApiMsg = { required: false, message: null }
    const initValues = {
        email: "",
        password: ""
    }
    const [values, setValues] = useState(initValues)
    const [errors, setErrors] = useState(errorsInit);
    const [loading, setLoading] = useState(false);
    const [errApiRes, setApiRes] = useState(errApiMsg)
    const handleInputs = (e) => {
        const changeOgj = { ...values, [e.target.name]: e.target.value };
        setValues(changeOgj);
        setErrors(LoginValidator.validateLogin(values))
        setApiRes(errApiMsg);
    }
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
            <div className="position-relative z-index-5">
                <div className="row">
                    <div className="col-xl-5 col-xxl-4">
                        <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                            <div className="col-sm-8 col-md-6 col-xl-9">
                                <div className="d-flex justify-content-center align-items-center  mb-5">
                                    <img src={logo} className="light-logo  w-75" alt="Logo-light" />
                                </div>
                                {/* <p className="mt-4 mb-9">Lets Login In </p> */}
                                <div className="row">
                                    <div className="col-6 mb-2 mb-sm-0">
                                        <NavLink className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"  >
                                            <img src="../assets/images/svgs/google-icon.svg" alt='google' className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                                        </NavLink>
                                    </div>
                                    <div className="col-6">
                                        <NavLink className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"  >
                                            <img src="../assets/images/svgs/facebook-icon.svg" alt='fblogo' className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="position-relative text-center my-4">
                                    <p className="mb-0 fs-4 px-3 d-inline-block text-bg-white text-dark z-index-5 position-relative">or sign
                                        in
                                        with</p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                {/* was-validated needs-validation */}
                                <form className='needs-validation' noValidate autoComplete='off'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input onChange={handleInputs}
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            className={`form-control ${errors.email.required ? 'is-invalid' : ''}`}
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            required />
                                        <div class="invalid-feedback">
                                            {errors.email.message}
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onChange={handleInputs}
                                            name='password'
                                            type="password"
                                            value={values.password}
                                            className={`form-control ${errors.password.required ? 'is-invalid' : ''}`}
                                            id="exampleInputPassword1"
                                            required />
                                        <div class="invalid-feedback">
                                            {errors.password.message}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end mb-4">
                                        <NavLink to={'/forgot'} className="text-primary fs-2">Forgot Password ?</NavLink>
                                    </div>
                                    <button type='button' className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign In</button>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-medium">New to HelaShop?</p>
                                        <NavLink to={'/register'} className="text-primary fw-medium ms-2">Create an account</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-xl-7 col-xxl-8 px-0">
                        <img src={logoDark} className="position-absolute" alt="Logo-light" style={{ right: 15, bottom: 10 }} width={100} />
                        <img src={background} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>

                </div>
            </div>
        </div>

    )
}
