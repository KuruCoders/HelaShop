import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import propic from '../../logos/user-1.jpg'
import Authenticate from '../../Store/Authenticate';
import Toaster from '../../Utils/Constants/Toaster';
import { ToastContainer } from 'react-toastify'

export default function Header() {
    const navigate = useNavigate()
    return (
        <header className="app-header w-100 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light mw-100 ">
                <ul className="navbar-nav d-inline d-xl-none">
                    <li className="nav-item">
                        <NavLink className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" >
                            <i className="ti ti-menu-2" />
                        </NavLink>
                    </li>
                </ul>
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-icon-hover" >
                                <i className="ti ti-bell-ringing" />
                                <div className="notification bg-primary rounded-circle" />
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link nav-icon-hover" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={propic} alt='prologo' width={35} height={35} className="rounded-circle" />
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" style={{ backgroundColor: "white" }} aria-labelledby="drop2">
                                <div className="message-body">
                                    <NavLink to={'/main/profile/account'} className="d-flex align-items-center gap-2 dropdown-item">
                                        <i className="ti ti-user fs-6" />
                                        <p className="mb-0 fs-3">My Profile</p>
                                    </NavLink>
                                    <div className="w-100">
                                        <button type='button' onClick={() => {
                                            Toaster.justToast('info', "   Logging You Out ......", () => {
                                                Authenticate.logoutUser();
                                                navigate('/')
                                            })
                                        }} className="btn btn-outline-primary w-75 mx-auto mt-2 d-block">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <ToastContainer />
        </header>

    )
}
