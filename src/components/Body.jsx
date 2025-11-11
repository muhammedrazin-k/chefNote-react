import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Body= () => {
  return (
    <div className='bg-gray-50'>
        <Header/>
         <Outlet/>
        <Footer/>
    </div>
  )
}
