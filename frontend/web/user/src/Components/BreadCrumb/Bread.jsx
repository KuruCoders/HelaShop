import React from 'react'

export default function Bread() {
    return (
        <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
            <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h4 className="fw-semibold mb-8">checkout</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a className="text-muted text-decoration-none" href="../horizontal/index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">checkout</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-3">
                        <div className="text-center mb-n5">
                            <img src="../assets/images/breadcrumb/ChatBc.png" alt className="img-fluid mb-n4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
