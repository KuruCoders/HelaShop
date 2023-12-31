import React from 'react'
import logoDark from '../../logos/dark-logo.svg'
import logo from '../../logos/logoAll.svg'
import background from '../../logos/background.jpg'
export default function Login() {
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
                                        <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                                            <img src="../assets/images/svgs/google-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                                            <img src="../assets/images/svgs/facebook-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                                        </a>
                                    </div>
                                </div>
                                <div className="position-relative text-center my-4">
                                    <p className="mb-0 fs-4 px-3 d-inline-block text-bg-white text-dark z-index-5 position-relative">or sign
                                        in
                                        with</p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="form-check">
                                            <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                            <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                                                Remeber this Device
                                            </label>
                                        </div>
                                        <a className="text-primary fw-medium" href="../horizontal/authentication-forgot-password.html">Forgot Password ?</a>
                                    </div>
                                    <a href="../horizontal/index.html" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign In</a>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-medium">New to HelaShop?</p>
                                        <a className="text-primary fw-medium ms-2" href="../horizontal/authentication-register.html">Create an account</a>
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
