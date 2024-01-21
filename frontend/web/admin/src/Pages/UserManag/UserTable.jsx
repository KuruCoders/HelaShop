import React from 'react'
import UserItem from './UserItem'

export default function UserTable({ loading,users,handleUserDelete }) {

    return (
        <>
            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden m-auto"></span>
                        </div>
                    </div>
                ) : (
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
                                    <h6 className="fw-semibold mb-0">Telephone</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Role</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Gender</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Added</h6>
                                </th>
                                
                                {/* <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Added</h6>
                                </th> */}
                            </tr>
                        </thead>
                            <tbody>
                                <UserItem handleUserDelete={handleUserDelete} users={ users } />
                        </tbody>
                    </table>
                )
            }
        </>
    )
}
