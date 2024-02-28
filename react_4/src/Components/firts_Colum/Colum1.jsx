import React from 'react'
import { Profile } from '../../layouts/Profile/Profile'
import { Navbar } from '../../layouts/Navbar/Navbar'
import './Colum1.css'
import { Logo } from '../../layouts/LogoSena/Logo'
import { Lineicon } from '../../layouts/Lineicon/icons'


export const Colum1 = () => {
  return (
    <div className='colum1'>
       <Profile/>
       <h1 className='name'>JERONIMO ARIAS MOSQUERA</h1>
       <hr className='line'/>
       <Navbar/>
       <Logo/>
       <Lineicon/>
    </div>
  )
}
