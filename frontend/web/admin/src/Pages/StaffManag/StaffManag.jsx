import React, { useState,useEffect } from 'react'
import AddStaffModal from './AddStaffModal'
import StaffTable from './StaffTable'
import StaffService from '../../Services/Staff/StaffService';
import Toaster from '../../Utils/Constants/Toaster';
import { ToastContainer } from 'react-toastify';
import LocalStore from '../../Store/LocalStore';
import { useNavigate } from 'react-router-dom';
export default function StaffManag() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [staffs, setStaffs] = useState([]);
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await StaffService.getAllStaff()
            setStaffs(response.data.data.staffs)
            // if (response.data.code === 200) {
            //     Toaster.justToast('success', response.data.data.message, () => {})
            // }
        } catch (error) {
            if (error.response.data.code === 404) {
                Toaster.justToast('error', error.response.data.data.message, () => {})
            }
            if (error.response.data.code === 401) {
                Toaster.justToast('error', error.response.data.data.message, () => {
                    LocalStore.removeToken()
                    navigate('/login' , {replace:true})
                    // Force a full-page refresh
                    window.location.reload(true);
                })
            }
            if (error.response.data.code === 500) {
                Toaster.justToast('error', error.response.data.data.message, () => {})
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex align-items-stretch">
                        <div className="card w-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className='d-flex justify-content-end align-items-center mb-4'>
                                    <button className='btn btn-outline-dark mx-2'>Export</button>
                                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#addStaffModal">Add New</button>
                                </div>
                                <AddStaffModal onModalSubmit={fetchData}/>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="card-title fw-semibold">List Of Staffs</h5>
                                    <form className="position-relative">
                                        <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search" />
                                        <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                                    </form>
                                </div>
                                <div className="table-responsive">
                                    <StaffTable staffs={staffs} loading={ loading} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <ToastContainer/>
        </div>
    )
}
