import React from 'react'
import logo from '../../logos/logoAll.svg'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6 col-xxl-3">
                        <div className="card mb-0">
                            <div className="card-body">
                                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                    <img src={logo} width={180} alt="loogo" />
                                </a>
                                <p className="text-center">Admin Login</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end mb-4">
                                        
                                        <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                                    </div>
                                    <button type='button' className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-bold">Admin SignUp</p>
                                        <NavLink to={'/register'} className="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</NavLink>
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
