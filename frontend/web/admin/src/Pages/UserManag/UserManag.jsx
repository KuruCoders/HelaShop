import React, { useEffect, useState } from 'react'
import AddUserModal from './AddUserModal'
import UserTable from './UserTable'
import UserService from '../../Services/User/UserService'
import ResponseHandler from '../../Utils/Constants/ResponseHandler'
import Toaster from '../../Utils/Constants/Toaster'
import PdfGenerator from '../../Utils/Pdfs/PdfGenerator'
import userHeader from '../../Utils/Pdfs/UserMHeader'

export default function UserManag() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        setLoading(true)
        try {
            const result = await UserService.getUsers()
            if (result.data.code === 200) {
                setUsers(result.data.data.users)
            }
        } catch (error) {
            ResponseHandler.handleResponse(error)
        } finally {
            setLoading(false)
        }
    }
    const handleUserDelete = async (email) => {
        Toaster.loadingToast('Deleting User ........')
        const result = await UserService.deleteUser(email)
        try {
            if (result.data.code === 200) {
                Toaster.justToast('success', "Staff Deleted", () => { })
            }
        } catch (error) {
            ResponseHandler.handleResponse(error)
        } finally {
            fetchUser()
            Toaster.dismissLoadingToast()
        }
    }
    const gneratePDF = () => {
        Toaster.loadingToast('Generating Pdf')
        try {
            Toaster.updateLoadingToast('success', 'Creating The Pdf For You', () => {})
            PdfGenerator.generatePdf(users, "User List", userHeader)
        } catch (error) {
            Toaster.updateLoadingToast('error', 'genration failed', () => { })
        } finally {
            Toaster.dismissLoadingToast()
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                {/*  Row 1 */}
                <div className="row">
                    <div className="col-12 d-flex align-items-stretch">
                        <div className="card w-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className='d-flex justify-content-end align-items-center mb-4'>
                                    <button className='btn btn-outline-dark mx-2' onClick={gneratePDF}>Export</button>
                                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#addUserModal">Add New</button>
                                </div>
                                <AddUserModal />
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="card-title fw-semibold">List Of Users</h5>
                                    <form className="position-relative">
                                        <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search" />
                                        <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                                    </form>
                                </div>
                                <div className="table-responsive">
                                    <UserTable handleUserDelete={handleUserDelete} users={users} loading={loading} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
