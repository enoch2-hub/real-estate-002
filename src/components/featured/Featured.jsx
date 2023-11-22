import React from 'react'

import './Featured.css'

import house1 from '../../assets/house1.jpg'
import bed1 from '../../assets/bed1.jpg'
import bed2 from '../../assets/bed2.jpg'
import kitchen from '../../assets/kitchen.jpg'
import bath1 from '../../assets/bath1.jpg'

import house2 from '../../assets/house2.jpg'
import bed3 from '../../assets/bed3.jpg'
import bed4 from '../../assets/bed4.jpg'
import bath2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'


const Featured = () => {
  return (
    <div className="featured">

      <h1 className="featured-heading">
          Top Featured Listings
      </h1>
      <p className="featured-text">
          Selected listings by City, State, & Zip based on views
      </p>

      <div className="container">
          <img className='span-3 image-grid-row-2' src={house1} alt="" />
          <img src={bed1} alt="" />
          <img src={bed2} alt="" />
          <img src={kitchen} alt="" />
          <img src={bath1} alt="" />
          
        <div className="span-3 left-img-details">
          <div className="top">
            <p>123 Acme St. Dallas, TX</p>
            <p>House for sale</p>
            <p className='price'>$2,677,000</p>
          </div>
          
          <div className="info-grid">
            <div>
              <div className="info">
                <p>Bedrooms:</p> <p>5</p>
              </div>
              <div className="info">
                <p>Bathrooms:</p> <p>3</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p>Square Feet</p> <p>8,138</p>
              </div>
              <div className="info">
                <p>Est Payment</p> <p>$14,797/mo</p>
              </div>
            </div>
          </div>

        </div>
      
        <div className="span-2 right-img-details">
          <p>
          A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.
          </p>
          <button className='btn'>View listing</button>
        </div>
      
      </div>








      <div className="container">
          <img className='span-3 image-grid-row-2' src={house2} alt="" />
          <img src={bed3} alt="" />
          <img src={bed4} alt="" />
          <img src={bath2} alt="" />
          <img src={LivingRoom} alt="" />
          
        <div className="span-3 left-img-details">
          <div className="top">
            <p>123 Acme St. Dallas, TX</p>
            <p>House for sale</p>
            <p className='price'>$2,677,000</p>
          </div>
          
          <div className="info-grid">
            <div>
              <div className="info">
                <p>Bedrooms:</p> <p>5</p>
              </div>
              <div className="info">
                <p>Bathrooms:</p> <p>3</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p>Square Feet</p> <p>8,138</p>
              </div>
              <div className="info">
                <p>Est Payment</p> <p>$14,797/mo</p>
              </div>
            </div>
          </div>

        </div>
      
        <div className="span-2 right-img-details">
          <p>
          A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.
          </p>
          <button className='btn'>View listing</button>
        </div>
      
      </div>



<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Featured




