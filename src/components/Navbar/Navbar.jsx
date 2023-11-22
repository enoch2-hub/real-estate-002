import React, { useState } from 'react'

import {FiGitPullRequest} from 'react-icons/fi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const toggleMenu = () => setClick(!click)



  return (
    <div className='navbar'>
        <div className="container">
            <h1><span><FiGitPullRequest/>Text</span>TExt</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="btn-container">
                <button className='btn sn-in'>Sign In</button>
                <button className='btn sn-up'>Sign Up</button>
            </div>

            <div className='hamburger' onClick={()=>toggleMenu()}>
                { click ? (<FaRegTimesCircle/>) : (<HiOutlineMenuAlt4/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar