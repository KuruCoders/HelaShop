import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import StaffYup from '../../Validation/Staff/StaffYup'
import StaffService from '../../Services/Staff/StaffService'
import { useNavigate } from 'react-router-dom'
import LocalStore from '../../Store/LocalStore'
import Toaster from '../../Utils/Constants/Toaster'
import { ToastContainer } from 'react-toastify'
import ResponseHandler from '../../Utils/Constants/ResponseHandler'

export default function AddStaffModal({ onModalSubmit }) {
    const closeModel = useRef();

    const initValues = {
        name: '',
        email: '',
        telephone: '',
        salary: '',
        age: '',
        role: '',
        gender: ''
    }
    const navigate = useNavigate();
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initValues,
        validationSchema: StaffYup.addStaff,
        onSubmit: async (values) => {
            Toaster.loadingToast("Creating staff .......")
            try {
                const result = await StaffService.addStaff(values)
                if (result.data.code === 201) {
                    onModalSubmit()
                    Toaster.justToast('success', result.data.data.message, () => {
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
            } finally {
                closeModel.current.click()
                Toaster.dismissLoadingToast()
            }
        }
    })
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
                        <div className="modal-body">
                            <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="InputEmail" className="form-label">Email address</label>
                                        <input
                                            value={values.email}
                                            onChange={handleChange}
                                            type="email"
                                            name='email'
                                            className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                            id="InputEmail"
                                            aria-describedby="emailHelp"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="InputTel" className="form-label">Telephone</label>
                                        <div className="input-group">
                                            <span className="input-group-text">94</span>
                                            <input
                                                type="text"
                                                name='telephone'
                                                className={`form-control ${(errors.telephone && touched.telephone) ? 'is-invalid' : ''}`}
                                                pattern="[0-9]*"
                                                maxLength="9"
                                                id="InputTel"
                                                aria-label="Amount (to the nearest rupee)"
                                                value={values.telephone}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.telephone}
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
                                                value={values.salary}
                                                type="text"
                                                name='salary'
                                                maxLength="12"
                                                className={`form-control ${(errors.salary && touched.salary) ? 'is-invalid' : ''}`}
                                                id="InputSalary"
                                                onChange={handleChange}
                                            />
                                            {/* <span className="input-group-text">.00</span> */}
                                            <div className="invalid-feedback">
                                                {errors.salary}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="InputName" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${(errors.name && touched.name) ? 'is-invalid' : ''}`}
                                            name='name'
                                            id="InputName"
                                            aria-describedby="emailHelp"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <label htmlFor="InputSalary" className="form-label">Gender</label>
                                        <select
                                            className={`form-control ${(errors.gender && touched.gender) ? 'is-invalid' : ''}`}
                                            id="InputSalary"
                                            name='gender'
                                            onChange={handleChange}
                                        >
                                            <option >choose</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            {errors.gender}
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <label htmlFor="InputRole" className="form-label">Staff Role</label>
                                        <select
                                            className={`form-control ${(errors.role && touched.role) ? 'is-invalid' : ''}`}
                                            id="InputRole"
                                            name='role'
                                            onChange={handleChange}
                                        >
                                            <option >choose</option>
                                            <option value="trainee">Trainee</option>
                                            <option value="sales">Sales</option>
                                            <option value="security">Security</option>
                                            <option value="cleaner">Cleaner</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            {errors.role}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="InputAge" className="form-label">Age</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                maxLength="3"
                                                className={`form-control ${(errors.age && touched.age) ? 'is-invalid' : ''}`}
                                                id="InputAge"
                                                name='age'
                                                value={values.age}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.age}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-2">
                                    <button type="button" ref={closeModel} className="btn btn-cancelBtn mx-2" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-okBtn">Save changes</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
