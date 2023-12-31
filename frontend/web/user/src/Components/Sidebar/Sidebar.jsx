import React from 'react'

function Sidebar() {
    return (
        <aside className="left-sidebar with-vertical">
            <div>
                <nav className="sidebar-nav scroll-sidebar mt-5">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="../horizontal/index2.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-shopping-cart" />
                                </span>
                                <span className="hide-menu">eCommerce</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="../horizontal/index3.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-currency-dollar" />
                                </span>
                                <span className="hide-menu">NFT</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="../horizontal/index5.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-activity-heartbeat" />
                                </span>
                                <span className="hide-menu">General</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="../horizontal/page-user-profile.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user-circle" />
                                </span>
                                <span className="hide-menu">User Profile</span>
                            </a>
                        </li> <li className="sidebar-item">
                            <a className="sidebar-link" href="../horizontal/page-user-profile.html" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user-circle" />
                                </span>
                                <span className="hide-menu">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar