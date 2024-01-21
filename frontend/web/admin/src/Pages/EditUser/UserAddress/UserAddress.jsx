import React, { useEffect } from 'react'
import sriLankanDistricts from '../../../Utils/Constants/Address/District'
import sriLankanProvinces from '../../../Utils/Constants/Address/Provinces'
import { useFormik } from 'formik'
import UserAddressYup from '../../../Validation/User/UserAddressYup'
import Toaster from '../../../Utils/Constants/Toaster'
import UserService from '../../../Services/User/UserService'

export default function UserAddress({ data }) {
    console.log(data)
    const initValues = {
        city: '',
        district: '',
        province: '',
        postalCode: '',
        street: ''
    }
    const { values, handleChange, handleSubmit, errors, touched, setValues } = useFormik({
        initialValues: initValues,
        validationSchema: UserAddressYup.addAddress,
        onSubmit: async (values) => {
            Toaster.loadingToast("updating user address .........")
            try {
                const mongoResult = await UserService.manipulateAddress(data.email,values)
                if (mongoResult.data.code === 201) {
                    Toaster.justToast('success', mongoResult.data.data.message, () => {
                        // when uncommented below re renders the whole page , if needed only uncomment
                        // onFormSubmit()
                    })
                }
            } catch (error) {
                Toaster.justToast('error', error.response.data.data.message, () => { })
            } finally {
                Toaster.dismissLoadingToast()
            }
        }
    })
    useEffect(() => {
        if (data.address) {
            setValues({
                city: data.address.city || '',
                district: data.address.district || '',
                province: data.address.province || '',
                postalCode: data.address.postalCode || '',
                street: data.address.street || ''
            });
        }
    }, [data.address,setValues]);
    
    

    return (
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <h5 className="card-title fw-bolder fs-6">You Address</h5>
                            <p className="card-subtitle mb-2">To change your Billing Address</p>
                        </div>
                        <i className="ti ti-lock fs-6" />
                    </div>
                    <form className='needs-validation' onSubmit={handleSubmit} noValidate>
                        <div className="row my-2">
                            <div className="col-7 mb-3 m-md-0">
                                <input
                                    type="text"
                                    placeholder='Enter City'
                                    value={values.city}
                                    onChange={handleChange}
                                    className={`form-control ${(errors.city && touched.city) ? 'is-invalid' : ''}`}
                                    name='city'
                                    id="InputCity"
                                />
                                <div className="invalid-feedback">
                                    {errors.city}
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="input-group">
                                    <input
                                        onChange={handleChange}
                                        value={values.postalCode}
                                        placeholder='Postal'
                                        type={'text'}
                                        name='postalCode'
                                        className={`form-control ${(errors.postalCode && touched.postalCode) ? 'is-invalid' : ''}`}
                                        id="InputPostal"
                                    />
                                    <div className="invalid-feedback">
                                        {errors.postalCode}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 mb-3 m-md-0">
                                <select
                                    onChange={handleChange}
                                    value={values.district}
                                    className={`form-control ${(errors.district && touched.district) ? 'is-invalid' : ''}`}
                                    id="InputDistrict"
                                    name='district'
                                >
                                    <option >Choose District</option>
                                    {
                                        sriLankanDistricts.map((district) => {
                                            return (
                                                <option value={district}>{district}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="invalid-feedback">
                                    {errors.district}
                                </div>
                            </div>
                            <div className="col-6">
                                <select
                                    onChange={handleChange}
                                    value={values.province}
                                    className={`form-control ${(errors.province && touched.province) ? 'is-invalid' : ''}`}
                                    id="InputProvince"
                                    name='province'
                                >
                                    <option >Choose Province</option>
                                    {
                                        sriLankanProvinces.map((province) => {
                                            return (
                                                <option value={province}>{province}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="invalid-feedback">
                                    {errors.province}
                                </div>
                            </div>

                        </div>
                        <div className="row my-2">
                            <div className="col-12 mb-3 m-md-0">
                                <input
                                    type="text"
                                    value={values.street}
                                    placeholder='Enter Street'
                                    onChange={handleChange}
                                    className={`form-control ${(errors.street && touched.street) ? 'is-invalid' : ''}`}
                                    name='street'
                                    id="InputStreet"
                                    aria-describedby="emailHelp"
                                />
                                <div className="invalid-feedback">
                                    {errors.street}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-0 mt-3">
                            <button type="submit" className="btn btn-warning">Change Address</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
