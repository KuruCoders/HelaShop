import React from 'react'
import DateFormatter from '../../../Utils/Constants/DateFormatter'

export default function StaffJoined({ data}) {
    return (
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title fw-bolder fs-6">Joined </h5>
                        <h5 className="card-title fw-bolder fs-4 text-danger">{ (data.created_at)? DateFormatter.formatDate(data.created_at) : ("N/A")}</h5>
                    </div>
                    <div className="text-center my-4">
                        <h1 className="mb-0 fw-bolder text-success">{ (data.created_at)? DateFormatter.getDayz(data.created_at) : ("N/A")}</h1>
                        <h3 className="mb-0 fw-bolder">Days Ago</h3>
                    </div>
                    <p className="mb-0 fw-bold text-center fs-4">Active Staff Member Since Above Date</p>
                </div>
            </div>
        </div>
    )
}
