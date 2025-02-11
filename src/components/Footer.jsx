import React from 'react'
import Logo from '../assets/getjob logo.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Linkedin from '../assets/LinkedIn.png'
const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
          <div className='footerIcon'>
              <div className='footerImage'><img src={Logo} alt="" /></div>
              <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>
          </div>
          <div className='footerSection'>
            <p className='footerHeader'>Information</p>
            <p className="footerItem">About Us</p>
            <p className="footerItem">Contact Us</p>
            <p className="footerItem">Terms & Conditions</p>
          </div>
          <div className='footerSection'>
            <p className='footerHeader'>Job Seekers</p>
            <p className="footerItem">Create Account</p>
            <p className="footerItem">Job List</p>
            <p className="footerItem">FAQ</p>
          </div>
          <div className='footerSection'>
            <p className='footerHeader'>Employers</p>
            <p className="footerItem">Create Account</p>
            <p className="footerItem">Post A Job</p>
            <p className="footerItem">FAQ</p>
          </div>
          <div className='footerSection'>
            <p className='footerHeader'>Social Media:</p>
            <div className="iconContainer">
              <div className='iconItem'><img src={Instagram} alt="" /></div>
              <div className='iconItem'><img src={Twitter} alt="" /></div>
              <div className='iconItem'><img src={Facebook} alt="" /></div>
              <div className='iconItem'><img src={Linkedin} alt="" /></div>
            </div>
          </div>
      </div>
      <p className="copyright">© Copyright Get-A-Job RMS 2019, All right reserved</p>
    </>
  )
}

export default Footer