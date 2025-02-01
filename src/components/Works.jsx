import React from 'react'
import workImage from '../assets/work.png'
import workImage1 from '../assets/work1.png'
import workImage2 from '../assets/work2.png'

const Works = () => {
  return (
    <div className='workContainer'>
      <div className='verticalImages'>
        <img src={workImage} alt="" />
        <img src={workImage1} alt="" />
      </div>
      <div className='centerImage'><img src={workImage2} alt="" /></div>
      <div className='workTexts'>
      <h1>How It Works</h1>
      <p>Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.</p>
      </div>
    </div>
  )
}








export default Works