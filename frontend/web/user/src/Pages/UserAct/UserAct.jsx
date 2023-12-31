import React from 'react'
import Bread from '../../Components/BreadCrumb/Bread'
import { Outlet } from 'react-router-dom'
import Act from './Account/Act'
import Bills from './Billing/Bills'

export default function UserAct() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <Bread/>
                <div className="card">
                    <ul className="nav nav-pills user-profile-tab">
                        <li className="nav-item" >
                            <button className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-4">
                                <i className="ti ti-user-circle me-2 fs-6" />
                                <span className="d-none d-md-block">Account</span>
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4">
                                <i className="ti ti-bell me-2 fs-6" />
                                <span className="d-none d-md-block">Notifications</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4">
                                <i className="ti ti-article me-2 fs-6" />
                                <span className="d-none d-md-block">Bills</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4">
                                <i className="ti ti-lock me-2 fs-6" />
                                <span className="d-none d-md-block">Security</span>
                            </button>
                        </li>
                    </ul>
                    <div className="card-body">
                        {/* below starts the nested routes */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}
