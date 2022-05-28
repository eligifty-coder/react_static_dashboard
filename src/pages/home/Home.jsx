import React from 'react'
import { Outlet } from 'react-router-dom'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
   return (
      <div className='home' >
         <Sidebar />
         <div className="homeContainer">
            <Navbar />
            <div className="widgets"></div>
         </div>
         <Outlet/>
      </div>
   )
}

export default Home