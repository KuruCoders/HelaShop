import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
export default function Profile() {
    return (
        <>
            <div class="page-wrapper">
                <Sidebar />
                <Header />
                <div className="body-wrapper py-4">
                    <div className="container-fluid">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
