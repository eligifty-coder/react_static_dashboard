import React from 'react'
import './Datatable.scss'
import { userColumns, userRows } from '../../datatablesource'
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';

const Datatable = () => {
   const actionColumn = [
      {
         field: 'action',
         headerName:'Action',
         width:200,
         renderCell: () => {
            return (
               <div className="cellAction">
                  <Link to="/users/test" ><div className="viewButton">View</div></Link>
                  <div className="deleteButton">Delete</div>
               </div>
            )
         }
      }
   ]
   return (
      <div className='datatable' >
         <div className="datableTitle">
            Add new user
            <Link to='/users/new' className="link"  style={{ textdecoration: 'none' }} >
               Add New
            </Link>
         </div>

         <DataGrid
            className="datagrid"
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
         />
      </div>
   )
}

export default Datatable