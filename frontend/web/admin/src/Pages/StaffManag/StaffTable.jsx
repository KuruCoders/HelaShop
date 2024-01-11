import React from 'react'

export default function StaffTable() {
    return (
        <table className="table mb-0 align-middle">
            <thead className="text-dark fs-4" >
                <tr>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Id</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Assigned</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Name</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Priority</h6>
                    </th>
                    <th className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0">Budget</h6>
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td className="border-bottom-0" ><h6 className="fw-semibold mb-0">2</h6></td>
                    <td className="border-bottom-0" >
                        <h6 className="fw-semibold mb-1">Andrew McDownland</h6>

                    </td>
                    <td className="border-bottom-0" >
                        <p className="mb-0 fw-normal">Real Homes WP Theme</p>
                    </td>
                    <td className="border-bottom-0" >
                        <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-secondary rounded-3 fw-semibold">Medium</span>
                        </div>
                    </td>
                    <td className="border-bottom-0" >
                        <h6 className="fw-semibold mb-0 fs-4">$24.5k</h6>
                    </td>
                    <td className="border-bottom-0 d-flex flex-column  d-md-flex flex-md-row justify-content-evenly align-items-center">
                        <button className='btn btn-warning'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
