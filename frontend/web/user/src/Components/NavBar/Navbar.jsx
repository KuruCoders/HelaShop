import React from 'react'
import iconOnly from '../../logos/iconOnly.svg'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow-sm mw-100" >
      <div className="container d-lg-flex justify-content-lg-center">
        <NavLink to={'/main'} className="navbar-brand d-flex justify-content-center align-items-center" >
          <img src={iconOnly} alt="Logo" width={50} height={30} className="d-inline-block align-text-top" />
          <span className='fw-bolder text-primary text-uppercase fs-6'>| helashop</span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills mx-auto mb-2 mt-3 mt-lg-0 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <NavLink to={'/main'} className="nav-link"  end={true}>Home</NavLink>
            </li>
            <li className="nav-item mx-lg-3">
              <NavLink to={'/main/products'} className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item mx-lg-3">
              <NavLink to={'/about'} className="nav-link" >About Us</NavLink>
            </li>
            <li className="nav-item d-lg-none">
              <button className="nav-link" >Logout</button>
            </li>
            <li className="nav-item d-lg-none">
              <NavLink to={'/profile/account'} className="btn btn-outline-dark" >
                <img src="../assets/images/profile/user-1.jpg" alt="logo" className="rounded-circle" width={35} height={35}  />
                <span className='ms-3'>My Profile</span>
              </NavLink>
            </li>
          </ul>
          <div className="justify-content-end d-none d-lg-block" >
            <div className="d-flex align-items-center justify-content-between">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link nav-icon-hover"  >
                    <img src="../assets/images/svgs/icon-flag-en.svg" alt='logo' width="20px" height="20px" className="rounded-circle object-fit-cover round-20" />
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link nav-icon-hover"  >
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </NavLink>
                </li>

                <li className="nav-item ms-2">
                  <NavLink className="nav-link pe-0"  id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <div className="user-profile-img">
                        <img src="../assets/images/profile/user-1.jpg" alt="logo" className="rounded-circle" width={35} height={35}  />
                      </div>
                    </div>
                  </NavLink>
                  <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                    <div className="profile-dropdown position-relative" >
                      <div className="message-body">
                        <NavLink to={'/profile/account'} className="py-8 px-7 mt-8 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                            <img src="../assets/images/svgs/icon-account.svg" alt='logo' width={24} height={24} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 fs-3 fw-semibold lh-base">My Profile</h6>
                            <span className="fs-2 d-block text-body-secondary">Account
                              Settings</span>
                          </div>
                        </NavLink>
                      </div>
                      <div className="message-body">
                        <button  className="py-8 px-7 mt-8 d-flex align-items-center bg-white border-0">
                          <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                            <img src="../assets/images/svgs/icon-dd-mobile.svg" alt="logo" width={24} height={24} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 fs-3 fw-semibold lh-base">Logout Now</h6>
                            <span className="fs-2 d-block text-body-secondary">Account</span>
                          </div>
                        </button>
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