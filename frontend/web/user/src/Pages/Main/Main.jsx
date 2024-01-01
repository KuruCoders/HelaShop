import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}
