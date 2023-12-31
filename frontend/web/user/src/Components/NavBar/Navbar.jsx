import React from 'react'

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow-sm mw-100" >
      <div className="container d-lg-flex justify-content-lg-center">
        <a className="navbar-brand" href="#">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
          <span className='fw-bolder text-uppercase ms-2'>helashop</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline mx-auto mb-2 mt-3 mt-lg-0 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item d-lg-none">
              <a className="nav-link" href="#">Logout</a>
            </li>
            <li className="nav-item d-lg-none">
              <a className="btn btn-outline-dark" href="javascript:void(0)">
                <img src="../assets/images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                <span className='ms-3'>My Profile</span>
              </a>
            </li>
          </ul>
          <div className="justify-content-end d-none d-lg-block" >
            <div className="d-flex align-items-center justify-content-between">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item mx-2">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" >
                    <img src="../assets/images/svgs/icon-flag-en.svg" width="20px" height="20px" className="rounded-circle object-fit-cover round-20" />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" >
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </a>
                </li>

                <li className="nav-item ms-2">
                  <a className="nav-link pe-0" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <div className="user-profile-img">
                        <img src="../assets/images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                    <div className="profile-dropdown position-relative" >
                      <div className="message-body">
                        <a href="../horizontal/page-user-profile.html" className="py-8 px-7 mt-8 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                            <img src="../assets/images/svgs/icon-account.svg"  width={24} height={24} />
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
                            <img src="../assets/images/svgs/icon-dd-mobile.svg"  width={24} height={24} />
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
        </div>
      </div>
    </nav>

  )
}

export default Navbar