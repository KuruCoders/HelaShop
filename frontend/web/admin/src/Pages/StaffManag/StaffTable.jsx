import React from 'react'
import StaffItem from './StaffItem'

export default function StaffTable() {
    return (
        <table className="table mb-0 align-middle">
            <thead className="text-dark fs-4" >
                <tr>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Pic</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Email</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Name</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Role</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Salary</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Gender</h6>
                    </th>
                </tr>
            </thead>
            <tbody >
                <StaffItem/>
                <StaffItem/>
                <StaffItem/>
                <StaffItem/>
                <StaffItem/>
                <StaffItem/>
            </tbody>
        </table>
    )
}
