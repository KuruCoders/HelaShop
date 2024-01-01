import React from 'react'

export default function Notification() {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body p-4">
                        <h4 className="fw-semibold mb-3">Notification Preferences</h4>
                        <p>
                            Select the notificaitons ou would like to receive via email. Please note that you cannot opt
                            out of receving service
                            messages, such as payment, security or legal notifications.
                        </p>
                        <form className="mb-7">
                            <label htmlFor="exampleInputtext5" className="form-label fw-semibold">Email Address*</label>
                            <input type="text" className="form-control" id="exampleInputtext5" placeholder required />
                            <p className="mb-0">Required for notificaitons.</p>
                        </form>
                        <div className>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-article text-dark d-block fs-7" width={22} height={22} />
                                    </div>
                                    <div>
                                        <h5 className="fs-4 fw-semibold">Our newsletter</h5>
                                        <p className="mb-0">We'll always let you know about important changes</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-checkbox text-dark d-block fs-7" width={22} height={22} />
                                    </div>
                                    <div>
                                        <h5 className="fs-4 fw-semibold">Order Confirmation</h5>
                                        <p className="mb-0">You will be notified when customer order any product</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" defaultChecked />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-clock-hour-4 text-dark d-block fs-7" width={22} height={22} />
                                    </div>
                                    <div>
                                        <h5 className="fs-4 fw-semibold">Order Status Changed</h5>
                                        <p className="mb-0">You will be notified when customer make changes to the order</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" defaultChecked />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-truck-delivery text-dark d-block fs-7" width={22} height={22} />
                                    </div>
                                    <div>
                                        <h5 className="fs-4 fw-semibold">Order Delivered</h5>
                                        <p className="mb-0">You will be notified once the order is delivered</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked3" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-mail text-dark d-block fs-7" width={22} height={22} />
                                    </div>
                                    <div>
                                        <h5 className="fs-4 fw-semibold">Email Notification</h5>
                                        <p className="mb-0">Turn on email notificaiton to get updates through email</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked4" defaultChecked />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="col-12">
                <div className="d-flex align-items-center justify-content-end gap-3">
                    <button className="btn btn-primary">Save</button>
                    <button className="btn bg-danger-subtle text-danger">Cancel</button>
                </div>
            </div> */}
        </div>
    )
}
