import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import UserYup from '../../../Validation/User/UserYup.js'
import UserService from '../../../Services/User/UserService.js'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler.js'
import Toaster from '../../../Utils/Constants/Toaster.js'
import DateFormatter from '../../../Utils/Constants/DateFormatter.js'
import { useNavigate } from 'react-router-dom'
import CusSwal from '../../../Utils/CustomSwal/CusSwal.js'

export default function UserForm({ data, onFormSubmit }) {
    const navigate = useNavigate()
    
    const initValues = {
        name: '',
        email: '',
        telephone: '',
        password: '',
        age: '',
        role: '',
        gender: '',
        photoUrl: '',
    }

    const { values, handleChange, handleSubmit, errors, touched, setValues } = useFormik({
        initialValues: initValues,
        validationSchema: UserYup.addUser,
        onSubmit: async (values) => {
            Toaster.loadingToast("updating user Details .........")
            try {
                const mongoResult = await UserService.updateUser(values)
                console.log(mongoResult)
                if (mongoResult.data.code === 200) {
                    Toaster.justToast('success', mongoResult.data.data.message, () => {
                        // when uncommented below re renders the whole page , if needed only uncomment
                        // onFormSubmit()
                    })
                }
            } catch (error) {
                // Toaster.justToast('error', error.response.data.data.message, () => { })
                ResponseHandler.handleResponse(error)
            } finally {
                Toaster.dismissLoadingToast()
            }
        }
    })
    const onClickDelete = () => {
        CusSwal.deleteConfiramation(async () => {
            try {
                const result = await UserService.deleteUser(values.email)
                if (result) {
                    Toaster.justToast('success', "User Deleted", () => {
                        navigate('/main/user')
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
            }
        })

    }
    useEffect(() => {
        if (data) {
            setValues({
                name: data.name || '',
                email: data.email || '',
                telephone: data.telephone || '',
                password: data.password || '',
                age: data.age || '',
                role: data.role || '',
                created_at: data.created_at || '',
                gender: data.gender || '',
            })
        }
    }, [data, setValues])
    return (
        <div className="card w-100 position-relative overflow-hidden mb-3 mb-md-0">
            <div className="card-body p-4">
                <h5 className="card-title fw-semibold">Personal Details</h5>
                <p className="card-subtitle mb-3">To change your personal detail , edit and save from here</p>
                <form className='needs-validation' onSubmit={handleSubmit} noValidate>
                    <div className="row mb-3">
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
                        <div className="col-12 col-md-6">
                            <label htmlFor="InputSalary" className="form-label">Joined Date</label>
                            <div className="input-group">
                                <input
                                    disabled
                                    value={values.created_at?DateFormatter.formatDate(values.created_at):'N/A'}
                                    type={'text'}
                                    name='updated_at'
                                    className={`form-control`}
                                    id="InputUpdatedAt"
                                />
                            </div>
                            <div className="invalid-feedback">
                                {/*  */}
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
                            <label htmlFor="InputRole" className="form-label">User Role</label>
                            <select
                                value={values.role}
                                className={`form-control ${(errors.role && touched.role) ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                                id="InputRole"
                                name='role'
                            >
                                <option >choose</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
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
                        <button type="button" onClick={onClickDelete} className="btn btn-danger mx-2">Delete Account</button>
                        <button type="submit" className="btn btn-warning">Edit Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
