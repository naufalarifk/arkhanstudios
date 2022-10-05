import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
function Sidebar() {     
    const {pathname} = useLocation();
    const splitLocation = pathname.split("/");

  return (
    <ul className="space-y-2">
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'about' ? '' : 'invisible'}`} /><Link to='/about'>Why Arkhan Studio</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'career' ? '' : 'invisible'}`}/><Link to='/career'>My Freelance Career</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'clients' ? '' : 'invisible'}`}/><Link to='/clients'>Happy Clients</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'services' ? '' : 'invisible'}`}/><Link to='/services'>Services We Provide</Link></li>
    <li className='flex flex-row items-center'><BsDot className={`${splitLocation[1] === 'faq' ? '' : 'invisible'}`}/><Link to='/faq'>FAQ</Link></li>
  </ul>
  )
}

export default Sidebar