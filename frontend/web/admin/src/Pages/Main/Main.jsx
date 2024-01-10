import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
import {Outlet,Navigate} from 'react-router-dom'
import Authenticate from '../../Store/Authenticate'

export default function Main() {
  if (!Authenticate.isAuthenticated()) {
    return <Navigate to={"/"} />
  }
  return (
      <>
          <Header />
          <Sidebar />
          {/* fills the componenets based on the path */}
          <Outlet/>
    </>
  )
}
