import React from 'react'
import UserService from '../../../Services/User/UserService'
import Toaster from '../../../Utils/Constants/Toaster'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler'
import CusSwal from '../../../Utils/CustomSwal/CusSwal'
import { useNavigate } from 'react-router-dom'

export default function UserChangePassword({ data }) {
    const email = data.email
    const navigate = useNavigate()

    return (
        <div className="col-lg-12 d-flex align-items-stretch mt-0">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4 py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title fw-bolder fs-6">Change Password</h5>
                        <i className="ti ti-lock fs-6" />
                        {/* <h5 className="card-title fw-bolder fs-6 text-danger"></h5> */}
                    </div>
                    <form className='needs-validation' noValidate>
                        <div className="row my-2">
                            <div className="col-12 col-md-6 mb-3 m-md-0">
                                <input
                                    type="text"
                                    placeholder='Enter New Password'
                                    // onChange={handleChange}
                                    className={`form-control`}
                                    name='name'
                                    id="InputName"
                                    aria-describedby="emailHelp"
                                />
                                <div className="invalid-feedback">
                                    {/* {errors.name} */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-group">
                                    <input
                                        placeholder='Enter Confirm Passsword'
                                        // value={values.created_at?DateFormatter.formatDate(values.created_at):'N/A'}
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
                        <div className="d-flex justify-content-end mb-0">
                            <button type="submit" className="btn btn-warning">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
