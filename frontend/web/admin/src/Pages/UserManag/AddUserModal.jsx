import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import UserYup from '../../Validation/User/UserYup'
import ResponseHandler from '../../Utils/Constants/ResponseHandler'
import UserService from '../../Services/User/UserService'
import Toaster from '../../Utils/Constants/Toaster'

export default function AddUserModal() {
    const [showEye, setShowEye] = useState(false)
    const handleShowPassword = () => {
        if (showEye) setShowEye(false)
        if (!showEye) setShowEye(true)
    }
    const closeModal = useRef()
    const initValues = {
        name: '',
        email: '',
        telephone: '',
        password: '',
        age: '',
        role: '',
        gender: ''
    }
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initValues,
        validationSchema: UserYup.createUser,
        onSubmit: async (values) => {
            Toaster.loadingToast("creating user .......")
            try {
                const result = await UserService.addUser(values)
                if (result.data.code === 201) {
                    //refesh the tablecomponent 
                    
                    Toaster.justToast('success', result.data.data.message, () => {
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
            } finally {
                closeModal.current.click()
                Toaster.dismissLoadingToast()
            }
         }
    })
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
                            <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="UserEmail" className="form-label">Email address</label>
                                        <input
                                            value={values.email}
                                            onChange={handleChange}
                                            type="email"
                                            name='email'
                                            className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                            id="UserEmail"
                                            aria-describedby="emailHelp"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label htmlFor="UserTel" className="form-label">Telephone</label>
                                        <div className="input-group">
                                            <span className="input-group-text">94</span>
                                            <input
                                                value={values.telephone}
                                                onChange={handleChange}
                                                type="text"
                                                name='telephone'
                                                className={`form-control ${(errors.telephone && touched.telephone) ? 'is-invalid' : ''}`}
                                                pattern="[0-9]*"
                                                maxLength="9"
                                                id="UserTel"
                                                aria-label="Amount (to the nearest rupee)"
                                            />
                                            <div className="invalid-feedback">
                                                {errors.telephone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="UserPassword" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input
                                                value={values.password}
                                                onChange={handleChange}
                                                type={showEye ? 'text' : 'password'}
                                                name='password'
                                                maxLength="12"
                                                className={`form-control ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                                id="UserPassword"
                                            />
                                            <span className="input-group-text" style={{ cursor: "pointer" }} onClick={handleShowPassword}>
                                                <i className='ti ti-eye' />
                                            </span>
                                            <div className="invalid-feedback">
                                                {errors.password}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="InputUserName" className="form-label">Name</label>
                                        <input
                                            value={values.name}
                                            onChange={handleChange}
                                            type="text"
                                            className={`form-control ${(errors.name && touched.name) ? 'is-invalid' : ''}`}
                                            name='name'
                                            id="InputUserName"
                                            aria-describedby="emailHelp"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <label htmlFor="UserGender" className="form-label">Gender</label>
                                        <select
                                            className={`form-control ${(errors.gender && touched.gender) ? 'is-invalid' : ''}`}
                                            id="UserGender"
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
                                        <label htmlFor="UserRole" className="form-label">User Role</label>
                                        <select
                                            className={`form-control ${(errors.role && touched.role) ? 'is-invalid' : ''}`}
                                            id="UserRole"
                                            name='role'
                                            onChange={handleChange}
                                        >
                                            <option >choose</option>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            {errors.role}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="UserAge" className="form-label">Age</label>
                                        <div className="input-group">
                                            <input
                                                value={values.age}
                                                onChange={handleChange}
                                                type="text"
                                                maxLength="2"
                                                className={`form-control ${(errors.age && touched.age) ? 'is-invalid' : ''}`}
                                                id="UserAge"
                                                name='age'
                                            />
                                            <div className="invalid-feedback">
                                                {errors.age}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(
                                    <div className="d-flex justify-content-end mb-2">
                                        <button type="button" ref={closeModal} className="btn btn-cancelBtn mx-2" data-bs-dismiss="modal">Close</button>
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
