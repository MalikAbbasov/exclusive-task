import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Topheader from '../../components/Topheader'

function Mainlayout() {
  return (
    <div>
        <Topheader/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainlayout