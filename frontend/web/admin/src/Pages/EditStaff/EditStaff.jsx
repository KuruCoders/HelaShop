import React from 'react'
import propic from '../../logos/user-1.jpg'

export default function EditStaff() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="card w-100 position-relative overflow-hidden">
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-semibold">Change Profile</h5>
                                    <p className="card-subtitle mb-2">Change your profile picture from here</p>
                                    <div className="text-center">
                                        <img src={propic} alt="propic" className="img-fluid rounded-circle" width={120} height={120} />
                                        <div className="d-flex align-items-center justify-content-center my-4 gap-3">
                                            <button className="btn btn-primary">Upload</button>
                                            <button className="btn btn-outline-danger">Reset</button>
                                        </div>
                                        <p className="mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card w-100 position-relative overflow-hidden mb-3 mb-md-0">
                            <div className="card-body p-4">
                                <h5 className="card-title fw-semibold">Personal Details</h5>
                                <p className="card-subtitle mb-2">To change your personal detail , edit and save from here</p>
                                <form className='needs-validation' noValidate>
                                    <div className="row mb-2">
                                        <div className="col-9 col-md-9">
                                            <label htmlFor="InputEmail" className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                name='email'
                                                className="form-control"
                                                id="InputEmail"
                                                aria-describedby="emailHelp"
                                            />
                                            <div className="invalid-feedback">

                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="InputAge" className="form-label">Age</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    maxLength="2"
                                                    className="form-control"
                                                    id="InputAge"
                                                    name='age'
                                                />
                                                <div className="invalid-feedback">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="InputSalary" className="form-label">Basic Salary</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Rs</span>
                                                <input
                                                    type="text"
                                                    name='salary'
                                                    maxLength="12"
                                                    className="form-control"
                                                    id="InputSalary"

                                                />
                                                {/* <span className="input-group-text">.00</span> */}
                                            </div>
                                            <div className="invalid-feedback">

                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="InputName" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='name'
                                                id="InputName"
                                                aria-describedby="emailHelp"
                                            />
                                            <div className="invalid-feedback">

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-6 col-md-3">
                                            <label htmlFor="InputSalary" className="form-label">Gender</label>
                                            <select
                                                className="form-control"
                                                id="InputSalary"
                                                name='gender'
                                            >
                                                <option >choose</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            <div className="invalid-feedback">

                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <label htmlFor="InputRole" className="form-label">Staff Role</label>
                                            <select
                                                className="form-control"
                                                id="InputRole"
                                                name='role'
                                            >
                                                <option >choose</option>
                                                <option value="trainee">Trainee</option>
                                                <option value="sales">Sales</option>
                                                <option value="security">Security</option>
                                                <option value="cleaner">Cleaner</option>
                                            </select>
                                            <div className="invalid-feedback">

                                            </div>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <label htmlFor="InputTel" className="form-label">Telephone</label>
                                            <div className="input-group">
                                                <span className="input-group-text">+94</span>
                                                <input
                                                    type="text"
                                                    name='telephone'
                                                    className="form-control"
                                                    pattern="[0-9]*"
                                                    maxLength="9"
                                                    id="InputTel"
                                                    aria-label="Amount (to the nearest rupee)"
                                                />
                                                <div className="invalid-feedback">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-2">
                                        <button type="submit" className="btn btn-warning">Edit Details</button>
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
