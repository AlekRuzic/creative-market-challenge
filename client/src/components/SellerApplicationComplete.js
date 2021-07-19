import React, { useState } from 'react';
import IconSent from '../assets/icon-sent.png';

const SellerApplicationComplete = () => {
  return (
    <div className="seller-application-form">
      <div className="completed-screen">
        <img src={IconSent} className="icon-sent" />
        <div className="thankyou-message">
          Thank you for applying to become a seller with Creative Market!
        </div>
        <div className="review-message">
          Our curators are reviewing your application. We’ll get back to you within <span style={{fontWeight:'bold'}}>5-7 business days.</span> Meanwhile, you already have access to your Shop Studio, so let’s start setting up your shop!
        </div>
      </div>
    </div>
  )
}

export default SellerApplicationComplete;