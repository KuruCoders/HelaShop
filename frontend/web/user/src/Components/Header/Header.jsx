import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="app-header w-100 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light mw-100 px-4 flex-nowrap">
                <ul className="navbar-nav d-inline d-xl-none">
                    <li className="nav-item">
                        <NavLink className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" >
                            <i className="ti ti-menu-2 fs-6" />
                        </NavLink>
                    </li>
                </ul>
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link nav-icon-hover" >
                                <i className="ti ti-bell-ringing fs-7" />
                                {/* <div className="notification bg-primary rounded-circle" /> */}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-icon-hover">
                                <img src="../assets/images/profile/user-1.jpg" alt='prologo' width={40} height={40} className="rounded-circle" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
