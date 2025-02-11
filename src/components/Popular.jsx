import React from 'react'
import GasImage from '../assets/gasIcon.png'
import HealthImage from '../assets/healthcare.png'
import EducationImage from '../assets/education.png'
import AccountImage from '../assets/Accounting (1).png'
import DesignImage from '../assets/art-design.png'
import TechImage from '../assets/laptop.png'
import Security from '../assets/security.png'
import DataImage from '../assets/data.png'


const Popular = () => {
  return (
    <>
        <h3 className='popularHeader'>Popular Jobs</h3>
        <div className='popularContainer'>
            <div className='popularCard'>
                <div>
                    <img src={GasImage} alt="" />
                </div>
                <p className='popularName'>Oil and Gas</p>
                <p className='popularInfo'>(20 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={HealthImage} alt="" />
                </div>
                <p className='popularName'>Health Care</p>
                <p className='popularInfo'>(10 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={EducationImage} alt="" />
                </div>
                <p className='popularName'>Eduaction</p>
                <p className='popularInfo'>(10 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={AccountImage} alt="" />
                </div>
                <p className='popularName'>Accounting</p>
                <p className='popularInfo'>(20 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={DesignImage} alt="" />
                </div>
                <p className='popularName'>Design, Art and Multimedia</p>
                <p className='popularInfo'>(12 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={TechImage} alt="" />
                </div>
                <p className='popularName'>Technology</p>
                <p className='popularInfo'>(15 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={Security} alt="" />
                </div>
                <p className='popularName'>Security</p>
                <p className='popularInfo'>(10 new jobs)</p>
            </div>
            <div className='popularCard'>
                <div>
                    <img src={DataImage} alt="" />
                </div>
                <p className='popularName'>Data Analyst</p>
                <p className='popularInfo'>(10 new jobs)</p>
            </div>
        </div>
    </>
  )
}

export default Popular