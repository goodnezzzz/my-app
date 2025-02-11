import React from 'react'
import CustomerImage from '../assets/Rectangle 9.1.png'
import PromoImage from '../assets/Group 10.png'

const Customers = () => {
  return (
    <div  className='customerContainer'>
        <h3>What are our customers <br />saying?</h3>
        <div className='customerDetails'>
            <div><img src={CustomerImage} alt="" /></div>
            <div>
                <p className='infoText'>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me.</p>
                <p className='nameText'>Irma Black</p>
                <p className='titleText'>HR Manager at Mastercard</p>
            </div>
        </div>
        <div className='promoImage'><img src={PromoImage} alt="" /></div>
        <hr />
    </div>
  )
}

export default Customers
