import React from 'react'
import Bread from '../../Components/BreadCrumb/Bread'
import ProductItem from '../../Components/Product/ProductItem'

export default function Product() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <Bread/>
                <div className="shop-detail">
                    <div className="card shadow-none border">
                        <div className="card-body p-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item rounded overflow-hidden">
                                        <img src="../assets/images/products/s1.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="shop-content">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <span className="badge text-bg-success fs-2 fw-semibold rounded-3">In Stock</span>
                                            <span className="fs-2">books</span>
                                        </div>
                                        <h4 className="fw-bolder h2">How Innovation Works</h4>
                                        <div className="mt-1" >
                                            <p className="mb-7">
                                                Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum
                                                ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis
                                                vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum
                                                ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis
                                                vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum
                                                ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis
                                                vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum
                                                ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis
                                                vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.
                                            </p>
                                        </div>
                                        <h4 className="fw-bolder h1 text-danger mb-3"><del className="fs-5 text-muted">$350</del> $275</h4>
                                        <div className="d-flex align-items-center gap-8 pb-4 border-bottom">
                                            <ul className="list-unstyled d-flex align-items-center mb-0">
                                                <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a>
                                                </li>
                                                <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a>
                                                </li>
                                                <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a>
                                                </li>
                                                <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a>
                                                </li>
                                                <li><a className href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)">(236 reviews)</a>
                                        </div>
                                        

                                        <div className="d-sm-flex align-items-center gap-3 pt-8 mb-7">
                                            <a href="javascript:void(0)" className="btn d-block btn-primary px-5 py-8 mb-2 mb-sm-0">Buy Now</a>
                                            <a href="javascript:void(0)" className="btn d-block btn-danger px-7 py-8">Add to Cart</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="related-products pt-7">
                        <h4 className="mb-5 fw-bolder h2 text-center">Related Products</h4>
                        <div className="row justify-content-center">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
