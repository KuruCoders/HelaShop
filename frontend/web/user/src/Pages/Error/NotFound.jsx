import React from 'react'
import errorimg from '../../logos/errorimg.svg'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="position-relative overflow-hidden min-vh-100 w-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-4">
                        <div className="text-center">
                            <img src={errorimg} className="img-fluid" width={500} alt="not found"/>
                            <h1 className="fw-semibold mb-7 fs-9">Opps!!!</h1>
                            <h4 className="fw-semibold mb-7">This page you are looking for could not be found.</h4>
                            <button onClick={handleBack} className="btn btn-primary" type='button'>Go Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
