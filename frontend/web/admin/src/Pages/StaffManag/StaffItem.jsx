import React from 'react'
import pic from '../../logos/user-1.jpg'
import DateFormatter from '../../Utils/Constants/DateFormatter'
import { NavLink } from 'react-router-dom'

export default function StaffItem({ staffs,handleStaffDelete }) {
    return (
        <>
            {
                staffs.map((staff) => (
                    <tr key={staff.email}>
                        <td className="border-bottom-0" >
                            <img src={staff.url} alt="prologo" width={30} height={30} className="rounded-circle" style={{ cursor: "pointer" }} />
                        </td>
                        <td className="border-bottom-0" >
                            <p className="fw-normal mb-1">{staff.email }</p>
                        </td>
                        <td className="border-bottom-0" >
                            <p className="fw-normal mb-1">{staff.name }</p>
                        </td>
                        <td className="border-bottom-0" >
                            <p className="mb-0 fw-normal">+94 {staff.telephone }</p>
                        </td>
                        <td className="border-bottom-0" >
                            <p className="mb-0 fw-normal">{staff.role }</p>
                        </td>
                        <td className="border-bottom-0" >
                            <p className="fw-normal mb-0">Rs {staff.salary }</p>
                        </td>
                        <td className="border-bottom-0" >
                            <p className="fw-normal mb-0">{staff.gender }</p>
                        </td>
                        {/* <td className="border-bottom-0" >
                            <p className="fw-normal mb-0">{DateFormatter.formatDate(staff.created_at) }</p>
                        </td> */}
                        <td className="border-bottom-0">
                            <div data-bs-toggle="dropdown" className='bg-warning rounded-2 p-1 d-flex justify-content-center align-items-center' style={{ fontSize: "1.5rem", cursor: "pointer" }}>
                                <i className="ti ti-eye text-white" />
                            </div>
                            <ul className="dropdown-menu bg-white" style={{ minWidth: "auto" }}>
                                <li><NavLink to={`edit/${staff.email}`} className="dropdown-item" >Edit</NavLink></li>
                                <li><button type='button' onClick={() => {
                                    handleStaffDelete(staff.email)
                                }} className="dropdown-item" >Delete</button></li>
                            </ul>
                        </td>
                    </tr>
                ))
            }

        </>

    )
}
