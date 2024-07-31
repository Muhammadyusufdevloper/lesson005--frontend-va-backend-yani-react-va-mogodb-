import React from 'react'
import Sitebar from '../../components/sitebar'
import { Outlet } from 'react-router-dom'
import "../../components/sitebar/Admin.scss"


const Admin = ({menu}) => {
  return (
    <>
      <div className={`admin ${menu ? "admin__show" : ""}`}>
        <Sitebar menu={menu}/>
        <Outlet/>
      </div>
    </>
  )
}

export default Admin