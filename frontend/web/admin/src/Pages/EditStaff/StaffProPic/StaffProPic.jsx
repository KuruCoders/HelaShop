import React, { useEffect, useState } from 'react'
import propic from '../../../logos/user-1.jpg'
import StaffService from '../../../Services/Staff/StaffService'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler'
import Toaster from '../../../Utils/Constants/Toaster'

export default function StaffProPic({ staff }) {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [storageUrl, setStorageUrl] = useState('')
    const handleImage = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    const handleApi = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData()
        formData.append('image', image)
        Toaster.loadingToast('uploading image ......')
        try {
            const result = await StaffService.uploadProfilePicture(formData)
            console.log(result)
            if (result.data.data) {
                // setStorageUrl(result.data.data.url)
                setImage(result.data.data.url)
                //call upload image
                await uploadImageToMongo(result.data.data.url)
            }
        } catch (error) {
            ResponseHandler.handleResponse(error)
            console.log(error)
        } finally {
            Toaster.dismissLoadingToast()
            setLoading(false)
        }

    }
    const uploadImageToMongo = async (imgUrl) => {
        let data = {
            email: staff.email,
            url: imgUrl
        }
        try {
            const mongoResult = await StaffService.uploadProPicToMongo(data)
            console.log(mongoResult)
            if (mongoResult.data.code === 200) {
                Toaster.justToast('success', "picture uploaded", () => {
                    setImage(imgUrl)
                })
            }
        } catch (error) {
            Toaster.justToast('error', error.response.data.data.message, () => { })
            // ResponseHandler.handleResponse(error)
            // console.log(error)
        }
    }
    useEffect(() => {
        if (staff) {
            setImage(staff.url)
        }
    }, [staff])

    return (
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Change Profile</h5>
                    <p className="card-subtitle mb-2">Change your profile picture from here</p>
                    <div className="text-center">
                        {
                            loading ? (
                                <div className='d-flex justify-content-center align-items-center my-3'>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden m-auto"></span>
                                    </div>
                                </div>
                            ) : (
                                <img src={image} alt="propic" className="img-thumbnail rounded-circle" width={120} height={120} />

                            )
                        }
                        <form className="d-flex align-items-center justify-content-center my-4 gap-3" onSubmit={handleApi}>
                            <input required disabled={loading} onChange={handleImage} accept="image/*" className="form-control" type="file" id="formFile" />
                            <button type='submit' disabled={loading} className="btn btn-outline-success">Add</button>
                        </form>
                        <p className="mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
