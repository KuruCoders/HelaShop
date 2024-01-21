import React from 'react'

export default function AddUserModal() {
    return (
        <>
            <div className="modal fade" id="addUserModal" tabIndex={-1} aria-labelledby="addUserModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="addUserModal">Add Users</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form className='needs-validation' noValidate >
                                <div className="row mb-2">
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="UserEmail" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            name='email'
                                            className="form-control"
                                            id="UserEmail"
                                            aria-describedby="emailHelp"
                                        />
                                        <div className="invalid-feedback">
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="UserTel" className="form-label">Telephone</label>
                                        <div className="input-group">
                                            <span className="input-group-text">94</span>
                                            <input
                                                type="text"
                                                name='telephone'
                                                className="form-control"
                                                pattern="[0-9]*"
                                                maxLength="9"
                                                id="UserTel"
                                                aria-label="Amount (to the nearest rupee)"
                                            />
                                            <div className="invalid-feedback">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="UserSalary" className="form-label">Basic Salary</label>
                                        <div className="input-group">
                                            <span className="input-group-text">Rs</span>
                                            <input
                                                type="text"
                                                name='salary'
                                                maxLength="12"
                                                className="form-control"
                                                id="UserSalary"
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
                                    <div className="col-4">
                                        <label htmlFor="UserGender" className="form-label">Gender</label>
                                        <select
                                            className="form-control"
                                            id="UserGender"
                                            name='gender'
                                        >
                                            <option >choose</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <div className="invalid-feedback">
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <label htmlFor="UserRole" className="form-label">Staff Role</label>
                                        <select
                                            className="form-control"
                                            id="UserRole"
                                            name='role'
                                        >
                                            <option >choose</option>
                                            <option value="trainee">Trainee</option>
                                            <option value="sales">Sales</option>
                                            <option value="security">Security</option>
                                            <option value="cleaner">Cleaner</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            {/* {errors.role} */}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="InputAge" className="form-label">Age</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                maxLength="3"
                                                className="form-control"
                                                id="InputAge"
                                                name='age'
                                            />
                                            <div className="invalid-feedback">
                                                {/* {errors.age} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(
                                    <div className="d-flex justify-content-end mb-2">
                                        <button type="button" className="btn btn-cancelBtn mx-2" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-okBtn">Save changes</button>
                                    </div>
                                )}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
