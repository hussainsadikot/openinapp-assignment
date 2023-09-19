import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'


const Layout = () => {

    return (
        <div className='flex flex-row  h-screen w-screen overflow-hidden bg-bghome'>
           <Sidebar/>
            <div className='flex flex-col flex-1  w-auto'>

                
               < Header/>
          
            <div className="flex-1 p-4 min-h-0 overflow-auto">{<Outlet />}</div>
            </div>
        </div>
    )
}



export default Layout
