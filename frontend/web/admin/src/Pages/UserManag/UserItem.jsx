import React from 'react'
import { NavLink } from 'react-router-dom'
import DateFormatter from '../../Utils/Constants/DateFormatter'

export default function UserItem({ users,handleUserDelete }) {
  return (
    <>
      {
        users.map((user) => {
          return (
            <tr key={user.email}>
              <td className="border-bottom-0" >
                <img src={user.photoUrl} alt="prologo" width={30} height={30} className="rounded-circle" style={{ cursor: "pointer" }} />
              </td>
              <td className="border-bottom-0" >
                <p className="fw-normal mb-1">{user.email}</p>
              </td>
              <td className="border-bottom-0" >
                <p className="fw-normal mb-1">{user.name}</p>
              </td>
              <td className="border-bottom-0" >
                <p className="mb-0 fw-normal">+94 {user.telephone}</p>
              </td>
              <td className="border-bottom-0" >
                <p className="mb-0 fw-normal">{user.role}</p>
              </td>
              {/* <td className="border-bottom-0" >
                            <p className="fw-normal mb-0">{user.salary }</p>
                        </td> */}
              <td className="border-bottom-0" >
                <p className="fw-normal mb-0">{user.gender}</p>
              </td>
              <td className="border-bottom-0" >
                <p className="fw-normal mb-0">{(user.created_at) ? DateFormatter.formatDate(user.created_at) : 'N/A'}</p>
              </td>
              <td className="border-bottom-0">
                <div data-bs-toggle="dropdown" className='bg-warning rounded-2 p-1 d-flex justify-content-center align-items-center' style={{ fontSize: "1.5rem", cursor: "pointer" }}>
                  <i className="ti ti-eye text-white" />
                </div>
                <ul className="dropdown-menu bg-white" style={{ minWidth: "auto" }}>
                  <li><NavLink to={`edit/${user.email}`} className="dropdown-item" >Edit</NavLink></li>
                  <li><button type='button' onClick={() => {
                    handleUserDelete(user.email)
                  }} className="dropdown-item" >Delete</button></li>
                </ul>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
