import React from 'react'

import {BiSearchAlt2} from 'react-icons/bi'

import './hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="content">
            <p className='hero-heading'>Sample Text to view</p>
            <p className='hero-heading-sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur odit illum</p>

            <form action="#" className='search'>
                <div>
                    <input type="text" />
                </div>
                <div className="radio">
                    <input type="radio" />
                    <label htmlFor="">Buy</label>

                    <input type="radio" name="" id="" />
                    <label htmlFor="">Rent</label>
                </div>

                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Hero