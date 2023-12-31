import React from 'react'
import Bread from '../../Components/BreadCrumb/Bread'

export default function Checkout() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid pt-3">
                <Bread/>
                <div className="checkout">
                    <div className="card shadow-none border">
                        <div className="card-body p-4">
                            <div className="wizard-content">
                                <form action="#" className="tab-wizard wizard-circle">
                                    <section>
                                        <div className="row">
                                            <div className="billing-address-content col-lg-4">
                                                <div className="card shadow-none border">
                                                    <div className="card-body p-4">
                                                        <h6 className="mb-3 fs-4 fw-semibold">Guddu Bhaiya</h6>
                                                        <p className="mb-1 fs-2">Mumbai khao gali, Behind
                                                            shukan,
                                                            godrej garden city - 382481</p>
                                                        <h6 className="d-flex align-items-center gap-2 my-4 fw-semibold fs-4">
                                                            <i className="ti ti-device-mobile fs-7" />9999501050
                                                        </h6>
                                                        <a href="javascript:void(0)" className="btn btn-warning  ">Edit
                                                            Delivery address</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="payment-method-list payment-method d-block col-lg-8">
                                                <div className="delivery-option col-lg-12 btn-group-active card shadow-none border">
                                                    <div className="card-body col-lg-12 p-4">
                                                        <h6 className="mb-1 fw-semibold fs-4">Delivery Option</h6>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="btn-group row" role="group" aria-label="Basic radio toggle button group">
                                                                    <div className="position-relative col-lg-12">
                                                                        <input type="radio" className="btn-check z-1 top-50 start-0 ms-4 round-16 position-relative" name="deliveryOpt1" id="btnradio1" autoComplete="off" defaultChecked />
                                                                        <label className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100" htmlFor="btnradio1">
                                                                            <div className="text-start ps-2">
                                                                                <h6 className="fs-4 fw-semibold mb-0">
                                                                                    Free
                                                                                    delivery
                                                                                </h6>
                                                                                <p className="mb-0 text-muted">Delivered
                                                                                    on
                                                                                    Firday,
                                                                                    May 10</p>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="btn-group row" role="group" aria-label="Basic radio toggle button group">
                                                                    <div className="position-relative col-lg-12">
                                                                        <input type="radio" className="btn-check z-1 top-50 start-0 ms-4 round-16 position-relative" name="paymentType1" id="btnradio5" autoComplete="off" defaultChecked />
                                                                        <label className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100" htmlFor="btnradio5">
                                                                            <div className="text-start ps-2">
                                                                                <h6 className="fs-4 fw-semibold mb-0">
                                                                                    Cash
                                                                                    on Delivery</h6>
                                                                                <p className="mb-0 text-muted">Pay
                                                                                    cash
                                                                                    when your order is delivered.
                                                                                </p>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="table-responsive">
                                            <table className="table align-middle text-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="border-bottom-0">
                                                            <div className="d-flex align-items-center gap-3 overflow-hidden">
                                                                <img src="../assets/images/products/s11.jpg" alt className="img-fluid rounded" width={80} />
                                                                <div>
                                                                    <h6 className="fw-semibold fs-4 mb-0">Cute Soft
                                                                        Teddybear</h6>
                                                                    <p className="mb-0">toys</p>
                                                                    <a href="javascript:void(0)" className="text-danger fs-4"><i className="ti ti-trash" /></a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end border-bottom-0">
                                                            <h6 className="fs-4 fw-semibold mb-0">$285</h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="order-summary border rounded p-4 my-4">
                                            <div className="p-3">
                                                <h5 className="fs-5 fw-semibold mb-4">Order Summary</h5>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-0 fs-4">Sub Total</p>
                                                    <h6 className="mb-0 fs-4 fw-semibold">$285</h6>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-0 fs-4">Discount 5%</p>
                                                    <h6 className="mb-0 fs-4 fw-semibold text-danger">-$14</h6>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-0 fs-4">Shipping</p>
                                                    <h6 className="mb-0 fs-4 fw-semibold">Free</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 fs-4 fw-semibold">Total</h6>
                                                    <h6 className="mb-0 fs-5 fw-semibold">$271</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-danger mx-3 fs-4 fw-bolder">Cancel</button>
                                        <button type="button" className="btn btn-success fs-4 fw-bolder">Approve Payment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
