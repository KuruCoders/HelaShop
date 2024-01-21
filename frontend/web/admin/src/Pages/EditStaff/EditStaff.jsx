import React, { useEffect, useState } from 'react'
import StaffJoined from './StaffJoined/StaffJoined'
import StaffProPic from './StaffProPic/StaffProPic'
import StaffForm from './StaffForm/StaffForm'
import StaffActDelete from './StaffActDelete/StaffActDelete'
import { useParams } from 'react-router-dom'
import Toaster from '../../Utils/Constants/Toaster'
import ResponseHandler from '../../Utils/Constants/ResponseHandler'
import StaffService from '../../Services/Staff/StaffService'
import PreLoader from '../../Components/PreLoader/PreLoader'

export default function EditStaff() {
    const [loading, setLoading] = useState(false)
    const [staff, setStaff] = useState({})
    const { email } = useParams()
    useEffect(() => {
        if (email) fetchData()
    }, [])
    const fetchData = async () => {
        setLoading(true)
        try {
            const result = await StaffService.getStaffById(email)
            if (result) setStaff(result.data.data.staff)
        } catch (error) {
            ResponseHandler.handleResponse(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                {loading ? <PreLoader /> : (
                    <div className="row">
                        <div className="col-lg-5">
                            <StaffJoined data={staff} />
                            <StaffProPic staff={staff} />
                        </div>
                        <div className="col-lg-7">
                            <StaffForm onFormSubmit={fetchData} data={staff} />
                            <StaffActDelete data={staff} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
