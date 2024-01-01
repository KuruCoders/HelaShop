import React from 'react'
import errorimg from '../../logos/errorimg.svg'
export default function NotFound() {
    return (
        <div className="position-relative overflow-hidden min-vh-100 w-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-4">
                        <div className="text-center">
                            <img src={errorimg} alt="notfound" className="img-fluid" width={500} />
                            <h1 className="fw-semibold mb-7 fs-9">Opps!!!</h1>
                            <h4 className="fw-semibold mb-7">This page you are looking for could not be found.</h4>
                            <a className="btn btn-primary" href="../main/index.html" role="button">Go Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
