import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import ProHeader from '../../Components/ProfileHeader/ProHeader'

export default function Profile() {
  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <ProHeader />
        {/* renders dynamic component according to the path */}
        <Outlet />
      </div>
    </div>
  )
}
