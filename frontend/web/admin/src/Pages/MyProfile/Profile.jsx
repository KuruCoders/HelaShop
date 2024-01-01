import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Profile() {
  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <div className="card">
          <ul className="nav nav-pills mt-3">
            <li className="nav-item" >
              <button className="nav-link position-relative rounded-0  d-flex align-items-center justify-content-center rounded-2 fs-3">
                <i className="ti ti-user-circle mx-2 mx-md-0 me-md-2 fs-6" />
                <span className="d-none d-md-block">Account</span>
              </button>
            </li>
            <li className="nav-item" >
              <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center rounded-2 fs-3">
                <i className="ti ti-bell mx-2 mx-md-0 me-md-2 fs-6" />
                <span className="d-none d-md-block">Notifications</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center rounded-2 fs-3">
                <i className="ti ti-article mx-2 mx-md-0 me-md-2 fs-6" />
                <span className="d-none d-md-block">Bills</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-primary rounded-2 fs-3 active">
                <i className="ti ti-lock mx-2 mx-md-0 me-md-2 fs-6" />
                <span className="d-none d-md-block">Security</span>
              </button>
            </li>
          </ul>
          <div className="card-body p-2">
            {/* below starts the nested routes */}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
