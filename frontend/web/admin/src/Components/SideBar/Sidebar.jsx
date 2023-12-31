import React from 'react'

export default function Sidebar() {
    return (
        <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <a href="./index.html" className="text-nowrap logo-img">
                        <img src="../assets/images/logos/dark-logo.svg" width={180}  />
                    </a>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8" />
                    </div>
                </div>
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                    <ul id="sidebarnav" className="h-100 my-0 overflow-hidden">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-layout-dashboard" />
                                </span>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">AUTH</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./authentication-login.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-login" />
                                </span>
                                <span className="hide-menu">Login</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./authentication-register.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user-plus" />
                                </span>
                                <span className="hide-menu">Register</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>

    )
}
