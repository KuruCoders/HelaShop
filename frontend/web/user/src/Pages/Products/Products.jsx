import React from 'react'
import ProductItem from '../../Components/Product/ProductItem'
import Bread from '../../Components/BreadCrumb/Bread'

export default function Products() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <Bread/>
                <div className="position-relative overflow-hidden">
                    <div className="shop-part d-flex w-100">
                        <div className="card-body p-4 pb-0 pt-1">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="fs-5 fw-semibold mb-0 d-none d-lg-block">Products</h5>
                                <form className="position-relative">
                                    <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search Product" />
                                    <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                                </form>
                            </div>
                            <div className="row">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
