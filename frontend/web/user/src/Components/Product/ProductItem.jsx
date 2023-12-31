import React from 'react'

export default function ProductItem() {
    return (
        <div className="col-sm-4 col-md-3">
            <div className="card hover-img overflow-hidden rounded-2">
                <div className="position-relative">
                    <a href="../main/eco-shop-detail.html"><img src="../assets/images/products/s6.jpg" className="card-img-top rounded-0" alt="..." /></a>
                    <a href="javascript:void(0)" className="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i className="ti ti-eye fs-4" /></a>
                </div>
                <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Gaming Console</h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <h6 className="fw-semibold fs-4 mb-0">$25 <span className="ms-2 fw-normal text-muted fs-3"><del>$31</del></span>
                        </h6>
                        <ul className="list-unstyled d-flex align-items-center mb-0">
                            <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a>
                            </li>
                            <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a>
                            </li>
                            <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a>
                            </li>
                            <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a>
                            </li>
                            <li><a className href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
