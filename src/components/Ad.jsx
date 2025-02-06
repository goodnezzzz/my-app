import React from 'react'
import AdImage from '../assets/Logos.png'
const Ad = () => {
  return (
    <div className='adContainer'>
        <div className='adText'>
            <h3>Over  1000+  jobs from top companies in our network</h3>
            <p>Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.</p>
            <p>Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.</p>
            <p className='learnMore'>Learn More</p>
        </div>
        <div className='adImage'>
            <img src={AdImage} alt="" />
        </div>
    </div>
  )
}

export default Ad