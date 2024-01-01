import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
import {Outlet} from 'react-router-dom'

export default function Main() {
  return (
      <>
          <Header />
          <Sidebar />
          <Outlet/>
    </>
  )
}
