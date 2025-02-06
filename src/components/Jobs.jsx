import React from 'react'
import PSImage from '../assets/image 2.png'
import GoogleImage from '../assets/googleImage.png'
import HR from '../assets/HR.png'
import Acess from '../assets/Acess.png'

const Jobs = () => {
  return (

    <div>
        <h2>Recommended Jobs</h2>
        <div className='recommendedJobs'>

            <div className='jobsContainer'>
                
                <div className='jobsHeader'>
                    <div className='image'><img src={PSImage} alt="" /></div>
                    <p>QA Engineer</p>
                </div>
                <p>PayStack</p>
                <div className='location'>
                    <p>Lagos, Nigeria</p>
                    <button>Apply Now</button>
                </div>
            </div>

            <div className='jobsContainer'>
                
                    <div className='jobsHeader'>
                        <div className='googleImage'><img src={GoogleImage} alt="" /></div>
                        <p>Data Analyst</p>
                    </div>
                    <p>Google</p>
                    <div className='location'>
                        <p>Lagos, Nigeria</p>
                        <button>Apply Now</button>
                    </div>
                
            </div>

            <div className='jobsContainer'>
                
                    <div className='jobsHeader'>
                        <div className='googleImage'><img src={HR} alt="" /></div>
                        <p>QA Engineer</p>
                    </div>
                    <p>Flutterwave</p>
                    <div className='location'>
                        <p>Lagos, Nigeria</p>
                        <button>Apply Now</button>
                    </div>
            </div>

            <div className='jobsContainer'>
                
                    <div className='jobsHeader'>
                        <div className='image'><img src={Acess} alt="" /></div>
                        <p>QA Engineer</p>
                    </div>
                    <p>PayStack</p>
                    <div className='location'>
                        <p>Lagos, Nigeria</p>
                        <button>Apply Now</button>
                    </div>
                
            </div>

            
        </div>

        
    </div>
  )
}

export default Jobs