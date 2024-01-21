import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProHeader() {
    return (
        <div className="card">
            <ul className="nav nav-pills my-2 ms-3">
                <li className="nav-item" >
                    <NavLink to={'/main/profile/account'} className="nav-link position-relative rounded-0  d-flex align-items-center justify-content-center rounded-2 fs-3" end={true}>
                        <i className="ti ti-user-circle mx-2 mx-md-0 me-md-2 fs-6" />
                        <span className="d-none d-md-block">Account</span>
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to={'/main/profile/notification'} className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center rounded-2 fs-3">
                        <i className="ti ti-bell mx-2 mx-md-0 me-md-2 fs-6" />
                        <span className="d-none d-md-block">Notifications</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/main/profile/bill'} className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center rounded-2 fs-3">
                        <i className="ti ti-article mx-2 mx-md-0 me-md-2 fs-6" />
                        <span className="d-none d-md-block">Bills</span>
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-primary rounded-2 fs-3 active">
                        <i className="ti ti-lock mx-2 mx-md-0 me-md-2 fs-6" />
                        <span className="d-none d-md-block">Security</span>
                    </NavLink>
                </li> */}
            </ul>
        </div>
    )
}
