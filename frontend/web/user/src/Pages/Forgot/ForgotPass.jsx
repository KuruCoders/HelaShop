import React from 'react'

export default function ForgotPass() {
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
            <div className="position-relative z-index-5">
                <div className="row">
                    
                    <div className="col-lg-6 col-xl-4 col-xxl-3">
                        <div className="card mb-0 shadow-none rounded-0 min-vh-100 h-100">
                            <div className="d-flex align-items-center w-100 h-100">
                                <div className="card-body">
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
                                        <a href="javascript:void(0)" className="btn btn-primary w-100 py-8 mb-3">Forgot Password</a>
                                        <a href="./authentication-login.html" className="btn bg-primary-subtle text-primary w-100 py-8">Back to Login</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-8 col-xxl-9">
                       
                        <div className="d-none d-lg-flex align-items-center justify-content-center" style={{ height: 'calc(100vh - 80px)' }}>
                            <img src="../assets/images/backgrounds/login-security.svg" alt className="img-fluid" width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
