import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Lists.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
const List = () => {
   return (
      <div  className='list'>
         <Sidebar />
         <div className="listContainer">
            <Navbar />
            <Datatable/>
         </div>
         <Outlet/>
      </div>
   )
}

export default List