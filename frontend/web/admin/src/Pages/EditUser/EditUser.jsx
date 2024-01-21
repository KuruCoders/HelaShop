import React, { useEffect, useState } from 'react'
import UserJoined from './UserJoined/UserJoined'
import UserProPic from './UserProPic/UserProPic'
import UserForm from './UserForm/UserForm'
import UserActDelete from './UserActDelete/UserActDelete'
import { useParams } from 'react-router-dom'
import ResponseHandler from '../../Utils/Constants/ResponseHandler'
import UserService from '../../Services/User/UserService'
import PreLoader from '../../Components/PreLoader/PreLoader'

export default function EditUser() {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const { email } = useParams()
    useEffect(() => {
        if (email) fetchData()
    }, [])
    const fetchData = async () => {
        setLoading(true)
        try {
            const result = await UserService.getUserById(email)
            if (result) setUser(result.data.data.user)
        } catch (error) {
            ResponseHandler.handleResponse(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                {!loading ? (
                    <div className="row">
                        <div className="col-lg-5">
                            <UserProPic user={user} />
                            <UserJoined data={user} />
                        </div>
                        <div className="col-lg-7">
                            <UserForm onFormSubmit={fetchData} data={user} />
                            <UserActDelete data={user} />
                        </div>
                    </div>
                ) : (
                    <PreLoader />
                )}
            </div>
        </div>
    )
}
