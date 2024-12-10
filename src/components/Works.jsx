import React from 'react'
import workImage from '../assets/work.png'
import workImage1 from '../assets/work1.png'
import workImage2 from '../assets/work2.png'

const Works = () => {
  return (
    <div className='workContainer'>
        <div className='workImages'>
            <div className='verticalImages'>
                <div><img src={workImage} alt="" /></div>
                <div><img src={workImage1} alt="" /></div>
            </div>
            <div className='centerImage'><img src={workImage2} alt="" /></div>
        </div>
        <div className='workTexts'>

        </div>
    </div>
  )
}

export default Works