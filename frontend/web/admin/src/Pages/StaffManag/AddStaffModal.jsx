import React from 'react'

export default function AddStaffModal() {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="addStaffModal" tabIndex={-1} aria-labelledby="addStaffModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="addStaffModal">Add Staffs</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body">
                            <form className='needs-validation'>
                                <div className="row mb-2">
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="InputEmail" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                                        <div class="invalid-feedback">
                                            Looks Bad!
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="InputTel" className="form-label">Telephone</label>
                                        <div className="input-group">
                                            <span className="input-group-text">94</span>
                                            <input type="text" className="form-control" pattern="[0-9]*" maxLength="9" id="InputTel" aria-label="Amount (to the nearest rupee)" />
                                            <div id="emailHelp" class="form-text">Please Ignore "0" In Input</div>
                                            <div class="invalid-feedback">
                                                Looks Bad!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="InputSalary" className="form-label">Basic Salary</label>
                                        <div className="input-group">
                                            <span className="input-group-text">Rs</span>
                                            <input type="text" className="form-control" id="InputSalary" aria-label="Amount (to the nearest dollar)" />
                                            <span className="input-group-text">.00</span>
                                        </div>
                                        <div class="invalid-feedback">
                                            Looks Bad!
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="InputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" />
                                        <div class="invalid-feedback">
                                            Looks Bad!
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="InputSalary" className="form-label">Gender</label>
                                        <select className="form-select" id="InputSalary">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-5">
                                        <label htmlFor="InputRole" className="form-label">Staff Role</label>
                                        <select className="form-select" id="InputRole">
                                            <option value="trainee">Trainee</option>
                                            <option value="sales">Sales</option>
                                            <option value="security">Security</option>
                                            <option value="cleaner">Cleaner</option>
                                        </select>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="InputAge" className="form-label">Age</label>
                                        <div className="input-group">
                                            <input type="text" maxLength="3" className="form-control is-invalid" id="InputAge" aria-label="Amount (to the nearest dollar)" />
                                            <div class="invalid-feedback">
                                                Looks Bad!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-cancelBtn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-okBtn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
