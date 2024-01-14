import React, { useState } from 'react'
import propic from '../../../logos/user-1.jpg'
import StaffService from '../../../Services/Staff/StaffService'
import ResponseHandler from '../../../Utils/Constants/ResponseHandler'
import Toaster from '../../../Utils/Constants/Toaster'

export default function StaffProPic({staff}) {
    const [image, setImage] = useState(propic)
    const handleImage = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    const handleApi = async () => {
        const formData = new FormData()
        formData.append('image', image)
        Toaster.loadingToast('uploading image ......')
        try {
            const result = await StaffService.uploadProfilePicture(formData)
            console.log(result)
            if (result.data.data) {
                Toaster.justToast('success', "picture uploaded", () => {
                    setImage(result.data.data.url)
                })
            }
        } catch (error) {
            Toaster.justToast('error', "Uploading Failed", () => {})
        } finally {
            Toaster.dismissLoadingToast()
        }
    }
    return (
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Change Profile</h5>
                    <p className="card-subtitle mb-2">Change your profile picture from here</p>
                    <div className="text-center">
                        <img src={image} alt="propic" className="img-fluid rounded-circle" width={120} height={120} />
                        <div className="d-flex align-items-center justify-content-center my-4 gap-3">
                            <input onChange={handleImage} accept="image/*" className="form-control" type="file" id="formFile" />
                            <button type='button' onClick={handleApi} className="btn btn-outline-success">Add</button>
                        </div>
                        <p className="mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
