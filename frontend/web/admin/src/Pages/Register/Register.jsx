import React from 'react'
import logo from '../../logos/logoAll.svg'

export default function Register() {
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6 col-xxl-3">
                        <div className="card mb-0">
                            <div className="card-body">
                                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                    <img src={logo} width={180} alt="logo" />
                                </a>
                                <p className="text-center">Admin Register</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputtext1" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <a href="./index.html" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</a>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                                        <a className="text-primary fw-bold ms-2" href="./authentication-login.html">Sign In</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
