import React from 'react'
import "./index.scss";
import GroupImage from '../assets/Mask Group.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='findJob'>
            <h1>Find a job easily</h1>
            <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
            <input type="search" name="searchJob" id="" placeholder='Enter keywords'/>
        </div>
        <div className='heroImage'>
            <img src={GroupImage} alt="" />
        </div>
    </div>
  )
};
export default Hero;