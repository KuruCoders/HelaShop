import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import StaffYup from '../../../Validation/Staff/StaffYup.js'
import StaffService from '../../../Services/Staff/StaffService.js'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler.js'
import Toaster from '../../../Utils/Constants/Toaster.js'

export default function StaffForm({ data, onFormSubmit }) {
    const initValues = {
        name: '',
        email: '',
        telephone: '',
        salary: '',
        age: '',
        role: '',
        gender: '',
    }
    const { values, handleChange, handleSubmit, errors, touched, setValues } = useFormik({
        initialValues: initValues,
        validationSchema: StaffYup.addStaff,
        onSubmit: async (values) => {
            //edit form logic
            Toaster.loadingToast('Upadting Details...........')
            try {
                const result = await StaffService.updateStaff(values)
                if (result) {
                    Toaster.justToast('success', result.data.data.message, () => {
                        // when uncommented below re renders the whole page , if needed only uncomment
                        // onFormSubmit()
                    })
                }
            } catch (error) {
                // Toaster.justToast('error', error.response.data.message, () => {})
                ResponseHandler.handleResponse(error)
            } finally {
                Toaster.dismissLoadingToast()
            }
        }
    })
    useEffect(() => {
        if (data) {
            setValues({
                name: data.name || '',
                email: data.email || '',
                telephone: data.telephone || '',
                salary: data.salary || '',
                age: data.age || '',
                role: data.role || '',
                gender: data.gender || ''
            })
        }
    }, [data, setValues])
    return (
        <div className="card w-100 position-relative overflow-hidden mb-3 mb-md-0">
            <div className="card-body p-4">
                <h5 className="card-title fw-semibold">Personal Details</h5>
                <p className="card-subtitle mb-3">To change your personal detail , edit and save from here</p>
                <form className='needs-validation' onSubmit={handleSubmit} noValidate>
                    <div className="row mb-2">
                        <div className="col-9 col-md-9">
                            <label htmlFor="InputEmail" className="form-label">Email address</label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                type="email"
                                name='email'
                                disabled="true"
                                className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                id="InputEmail"
                                aria-describedby="emailHelp"
                            />
                            <div className="invalid-feedback">
                                {errors.email}
                            </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="InputAge" className="form-label">Age</label>
                            <div className="input-group">
                                <input
                                    value={values.age}
                                    onChange={handleChange}
                                    type="text"
                                    maxLength="2"
                                    className={`form-control ${(errors.age && touched.age) ? 'is-invalid' : ''}`}
                                    id="InputAge"
                                    name='age'
                                />
                                <div className="invalid-feedback">
                                    {errors.age}
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
                                    onChange={handleChange}
                                    name='salary'
                                    maxLength="12"
                                    className={`form-control ${(errors.salary && touched.salary) ? 'is-invalid' : ''}`}
                                    id="InputSalary"

                                />
                                <span className="input-group-text">.00</span>
                            </div>
                            <div className="invalid-feedback">
                                {errors.salary}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="InputName" className="form-label">Name</label>
                            <input
                                value={values.name}
                                type="text"
                                onChange={handleChange}
                                className={`form-control ${(errors.name && touched.name) ? 'is-invalid' : ''}`}
                                name='name'
                                id="InputName"
                                aria-describedby="emailHelp"
                            />
                            <div className="invalid-feedback">
                                {errors.name}
                            </div>
                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-6 col-md-3">
                            <label htmlFor="InputSalary" className="form-label">Gender</label>
                            <select
                                value={values.gender}
                                onChange={handleChange}
                                className={`form-control ${(errors.gender && touched.gender) ? 'is-invalid' : ''}`}
                                id="InputSalary"
                                name='gender'
                            >
                                <option >choose</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <div className="invalid-feedback">
                                {errors.gender}
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <label htmlFor="InputRole" className="form-label">Staff Role</label>
                            <select
                                value={values.role}
                                className={`form-control ${(errors.role && touched.role) ? 'is-invalid' : ''}`}
                                onChange={handleChange}
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
                                {errors.role}
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <label htmlFor="InputTel" className="form-label">Telephone</label>
                            <div className="input-group">
                                <span className="input-group-text">+94</span>
                                <input
                                    value={values.telephone}
                                    type="text"
                                    name='telephone'
                                    onChange={handleChange}
                                    className={`form-control ${(errors.telephone && touched.telephone) ? 'is-invalid' : ''}`}
                                    pattern="[0-9]*"
                                    maxLength="9"
                                    id="InputTel"
                                    aria-label="Amount (to the nearest rupee)"
                                />
                                <div className="invalid-feedback">
                                    {errors.telephone}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mb-0">
                        <button type="submit" className="btn btn-warning">Edit Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
