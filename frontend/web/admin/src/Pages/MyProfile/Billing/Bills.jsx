import React from 'react'

export default function Bills() {
    return (
        // if needed to hard codely see the content add show active to he parnt class
        // after adding nested routes no need abov todo
        <div className="row">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body p-4">
                        <h4 className="fw-semibold mb-3">Billing Information</h4>
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputtext6" className="form-label fw-semibold">Business
                                            Name*</label>
                                        <input type="text" className="form-control" id="exampleInputtext6" placeholder="Visitor Analytics" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputtext7" className="form-label fw-semibold">Business
                                            Address*</label>
                                        <input type="text" className="form-control" id="exampleInputtext7" placeholder />
                                    </div>
                                    <div className>
                                        <label htmlFor="exampleInputtext8" className="form-label fw-semibold">First Name*</label>
                                        <input type="text" className="form-control" id="exampleInputtext8" placeholder />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputtext9" className="form-label fw-semibold">Business
                                            Sector*</label>
                                        <input type="text" className="form-control" id="exampleInputtext9" placeholder="Arts, Media & Entertainment" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputtext10" className="form-label fw-semibold">Country*</label>
                                        <input type="text" className="form-control" id="exampleInputtext10" placeholder="Romania" />
                                    </div>
                                    <div className>
                                        <label htmlFor="exampleInputtext11" className="form-label fw-semibold">Last Name*</label>
                                        <input type="text" className="form-control" id="exampleInputtext11" placeholder />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="col-12 mt-3">
                            <div className="d-flex align-items-center justify-content-end gap-3">
                                <button className="btn btn-primary">Save</button>
                                <button className="btn bg-danger-subtle text-danger">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body p-4">
                                <h4 className="fw-semibold mb-3">Current Plan : <span className="text-success">Executive</span></h4>
                                <p>Thanks for being a premium member and supporting our development.</p>
                                <div className="d-flex align-items-center justify-content-between mt-7 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-package text-dark d-block fs-7" width={22} height={22} />
                                        </div>
                                        <div>
                                            <p className="mb-0">Current Plan</p>
                                            <h5 className="fs-4 fw-semibold">750.000 Monthly Visits</h5>
                                        </div>
                                    </div>
                                    <a className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add">
                                        <i className="ti ti-circle-plus" />
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <button className="btn btn-primary">Change Plan</button>
                                    <button className="btn btn-outline-danger">Reset Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body p-4">
                                <h4 className="fw-semibold mb-3">Payment Method</h4>
                                <p>On 26 December, 2023</p>
                                <div className="d-flex align-items-center justify-content-between mt-7">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-credit-card text-dark d-block fs-7" width={22} height={22} />
                                        </div>
                                        <div>
                                            <h5 className="fs-4 fw-semibold">Visa</h5>
                                            <p className="mb-0 text-dark">*****2102</p>
                                        </div>
                                    </div>
                                    <a className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit">
                                        <i className="ti ti-pencil-minus" />
                                    </a>
                                </div>
                                <p className="my-2">If you updated your payment method, it will only be dislpayed here after your
                                    next billing cycle.</p>
                                <div className="d-flex align-items-center gap-3">
                                    <button className="btn btn-outline-danger">Cancel Subscription</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
