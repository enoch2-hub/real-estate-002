import React from 'react'

import apt1 from '../../assets/apt1.jpeg'
import apt2 from '../../assets/apt2.jpeg'
import apt3 from '../../assets/apt3.jpeg'

import './best.css'

const Best = () => {
  return (
    <div className="best">

      <h2>Another Sample Text Feature</h2>

      <div className="best_fields">
          <ul>
            <li>All</li>
            <li>Commercial</li>
            <li>Residential</li>
            <li>Agricultural</li>
          </ul>        
      </div>
        
      <div className='container'>
        <img src={apt1} alt="" />
        <img src={apt2} alt="" />
        <img src={apt3} alt="" />
      </div>

    <button className='btn'>View All</button>
    </div>
  )
}

export default Best