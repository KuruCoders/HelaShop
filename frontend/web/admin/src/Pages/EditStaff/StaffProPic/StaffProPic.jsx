import React from 'react'
import propic from '../../../logos/user-1.jpg'

export default function StaffProPic() {
    return (
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Change Profile</h5>
                    <p className="card-subtitle mb-2">Change your profile picture from here</p>
                    <div className="text-center">
                        <img src={propic} alt="propic" className="img-fluid rounded-circle" width={120} height={120} />
                        <div className="d-flex align-items-center justify-content-center my-4 gap-3">
                            <button className="btn btn-primary">Upload</button>
                            <button className="btn btn-outline-danger">Reset</button>
                        </div>
                        <p className="mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
