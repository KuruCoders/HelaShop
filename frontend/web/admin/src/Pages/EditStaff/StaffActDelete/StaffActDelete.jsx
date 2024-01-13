import React from 'react'
import StaffService from '../../../Services/Staff/StaffService'
import Toaster from '../../../Utils/Constants/Toaster'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler'
import CusSwal from '../../../Utils/CustomSwal/CusSwal'
import { useNavigate } from 'react-router-dom'

export default function StaffActDelete({ data }) {
    const email = data.email
    const navigate = useNavigate()
    const onClickDelete = () => {

        CusSwal.deleteConfiramation(async () => {
            try {
                const result = await StaffService.deleteStaff(email)
                if (result) {
                    Toaster.justToast('success', "Staff Deleted", () => {
                        navigate('/main/staff')
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
            }
        })

    }
    return (
        <div className="col-lg-12 d-flex align-items-stretch mt-0 mt-md-4">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title fw-bolder fs-6 text-danger">DANGER AREA</h5>
                        <i className="ti ti-trash fs-6 text-danger" />
                        {/* <h5 className="card-title fw-bolder fs-6 text-danger"></h5> */}
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-8 text-justify">
                            <h6 className="mb-0 text-danger">This action is irreversible, and the account, along with all associated data, will be permanently deleted. This process cannot be undone. Proceed with caution.</h6>
                        </div>
                        <div className="col-md-4 text-end mt-3 mb-0 my-auto">
                            <button type='button' onClick={onClickDelete} className='btn btn-danger'>Delete Account</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
