import React from 'react'
import pic from '../../logos/user-1.jpg'

export default function StaffItem() {
    return (
        <tr>
            <td className="border-bottom-0" >
                <img src={pic} alt="prologo" width={30} height={30} className="rounded-circle" style={{ cursor: "pointer" }} />
            </td>
            <td className="border-bottom-0" >
                <p className="fw-normal mb-1">Andrew@gmail.com</p>
            </td>
            <td className="border-bottom-0" >
                <p className="fw-normal mb-1">Andrew McDownland</p>
            </td>
            <td className="border-bottom-0" >
                <p className="mb-0 fw-normal">Trainee</p>
            </td>
            <td className="border-bottom-0" >
                <p className="fw-normal mb-0">Rs 200000</p>
            </td>
            <td className="border-bottom-0" >
                <p className="fw-normal mb-0">Male</p>
            </td>
            <td className="border-bottom-0">
                <div data-bs-toggle="dropdown" className='bg-warning rounded-2 p-1 d-flex justify-content-center align-items-center' style={{ fontSize: "1.5rem", cursor: "pointer" }}>
                    <i className="ti ti-eye text-white" />
                </div>
                <ul className="dropdown-menu bg-white" style={{ minWidth: "auto"}}>
                    <li><a className="dropdown-item" >Edit</a></li>
                    <li><a className="dropdown-item" >Delete</a></li>
                </ul>
            </td>
        </tr>
    )
}
