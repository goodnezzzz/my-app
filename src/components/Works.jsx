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
      <h3>Search Jobs</h3>
      <p>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
      <h3>Create a Profile and Get Noticed</h3>
      <p>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
      <h3>Apply for jobs</h3>
      <p>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
      </div>
    </div>
  )
}








export default Works