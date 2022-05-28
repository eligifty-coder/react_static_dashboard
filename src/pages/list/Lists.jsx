import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Lists.scss"
const List = () => {
   return (
      <div>
         hello
         <Outlet hello='hello'/>
      </div>
   )
}

export default List