import React from 'react'
import logoDark from '../../logos/dark-logo.svg'
import logo from '../../logos/logoAll.svg'
import background from '../../logos/background.jpg'
import { useNavigate } from 'react-router-dom'


export default function ForgotPass() {

    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
            <div className="position-relative z-index-5">
                <div className="row">

                    <div className="col-xl-3 px-2 bg-white">
                        <div className="card mb-0 shadow-none rounded-0 min-vh-100 h-100">
                            <div className="d-flex align-items-center w-100 h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center align-items-center  mb-5">
                                        <img src={logo} className="light-logo  w-75" alt="Logo-light" />
                                    </div>
                                    <div className="mb-5">
                                        <h2 className="fw-bolder fs-7 mb-3">Forgot your password?</h2>
                                        <p className="mb-0 ">
                                            Please enter the email address associated with your account and We will email you a link to reset your password.
                                        </p>
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <button type='button' className="btn btn-primary w-100 py-8 mb-3">Forgot Password</button>
                                        <button type='button' onClick={handleBack} className="btn bg-primary-subtle text-primary w-100 py-8">Back to Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-xl-9 px-0">
                        <img src={logoDark} className="position-absolute" alt="Logo-light" style={{ right: 15, bottom: 10 }} width={100} />
                        <img src={background} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>

    )
}
