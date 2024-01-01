import React from 'react'

export default function StaffManag() {
  return (
    <div className="body-wrapper">
            <div className="container-fluid">
                {/*  Row 1 */}
                <div className="row">
                    <div className="col-12 d-flex align-items-stretch">
                        <div className="card w-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className='d-flex justify-content-end align-items-center mb-4'>
                                    <button className='btn btn-outline-dark mx-2'>Export</button>
                                    <button className='btn btn-success'>Add New</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="card-title fw-semibold">List Of Staffs</h5>
                                    <form className="position-relative">
                                        <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search" />
                                        <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                                    </form>
                                </div>
                                <div className="table-responsive">
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
                                                <td  className="border-bottom-0 d-flex flex-column  d-md-flex flex-md-row justify-content-evenly align-items-center">
                                                    <button className='btn btn-warning'>Edit</button>
                                                    <button className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
