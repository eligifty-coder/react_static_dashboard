import React from 'react'
import { Outlet } from 'react-router-dom'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
const Home = () => {
   return (
      <div className='home' >
         <h1 className="title">
            Home page
         </h1>
         <Outlet/>
      </div>
   )
}

export default Home