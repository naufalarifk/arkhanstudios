import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
function Sidebar() {     
    const {pathname} = useLocation();
    const splitLocation = pathname.split("/");

  return (
    <ul className="space-y-2 mt-12 lg:mt-0">
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'about' ? '' : 'invisible'}`} /><Link to='/about'>Who Is Arkhan Studio</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'career' ? '' : 'invisible'}`}/><Link to='/career'>Why Arkhan Studio</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'clients' ? '' : 'invisible'}`}/><Link to='/clients'>Career</Link></li>
  </ul>
  )
}

export default Sidebar  