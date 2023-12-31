import React from 'react'

function Nav() {
    return (
        <>
            <div className="page-wrapper">
                {/*  Header Start */}
                <header className="topbar">
                    {/* for mobile */}
                    <div className="with-vertical">
                        <nav className="navbar navbar-expand-lg p-0">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link sidebartoggler nav-icon-hover ms-n3" id="headerCollapse" href="javascript:void(0)">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                            </ul>
                            <div className="justify-content-end" id="navbarNav">
                                <div className="d-flex align-items-center justify-content-between">
                                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="../assets/images/svgs/icon-flag-en.svg" alt width="20px" height="20px" className="rounded-circle object-fit-cover round-20" />
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-bell-ringing" />
                                                <div className="notification bg-primary rounded-circle" />
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link pe-0" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-profile-img">
                                                        <img src="../assets/images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* for web */}
                    <div className="app-header with-horizontal">
                        <nav className="navbar navbar-expand-xl container-fluid p-0">
                            <ul className="navbar-nav">
                                <li className="nav-item d-block d-xl-none">
                                    <a className="nav-link sidebartoggler ms-n3" id="sidebarCollapse" href="javascript:void(0)">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li className="nav-item d-none d-xl-block">
                                    <a href="../horizontal/index.html" className="text-nowrap nav-link">
                                        <img src="../assets/images/logos/dark-logo.svg" className="dark-logo" width={180} alt />
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav quick-links d-none d-xl-flex">
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <a className="nav-link" href="../horizontal/app-chat.html">Chat</a>
                                </li>
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <a className="nav-link" href="../horizontal/app-calendar.html">Calendar</a>
                                </li>
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <a className="nav-link" href="../horizontal/app-email.html">Email</a>
                                </li>
                            </ul>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="../assets/images/svgs/icon-flag-en.svg" alt width="20px" height="20px" className="rounded-circle object-fit-cover round-20" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link position-relative nav-icon-hover" href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <i className="ti ti-basket" />
                                                <span className="popup-badge rounded-pill bg-danger text-white fs-2">2</span>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-bell-ringing" />
                                                <div className="notification bg-primary rounded-circle" />
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link pe-0" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-profile-img">
                                                        <img src="../assets/images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                                                <div className="profile-dropdown position-relative" data-simplebar>
                                                    <div className="message-body">
                                                        <a href="../horizontal/page-user-profile.html" className="py-8 px-7 mt-8 d-flex align-items-center">
                                                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                                                <img src="../assets/images/svgs/icon-account.svg" alt width={24} height={24} />
                                                            </span>
                                                            <div className="w-75 d-inline-block v-middle ps-3">
                                                                <h6 className="mb-1 fs-3 fw-semibold lh-base">My Profile</h6>
                                                                <span className="fs-2 d-block text-body-secondary">Account
                                                                    Settings</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="message-body">
                                                        <a href="../horizontal/page-user-profile.html" className="py-8 px-7 mt-8 d-flex align-items-center">
                                                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                                                <img src="../assets/images/svgs/icon-dd-mobile.svg" alt width={24} height={24} />
                                                            </span>
                                                            <div className="w-75 d-inline-block v-middle ps-3">
                                                                <h6 className="mb-1 fs-3 fw-semibold lh-base">Logout Now</h6>
                                                                <span className="fs-2 d-block text-body-secondary">Account</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/*  Header End */}
            </div>

        </>
    )
}

export default Nav