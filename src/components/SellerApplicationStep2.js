import React, { useState } from 'react';
import Input from './Input';

const SellerApplicationStep2 = ({ 
  perspectiveOnQuality, setPerspectiveOnQuality,
  sellerExperienceLevel, setSellerExperienceLevel,
  businessMarketingUnderstanding, setBusinessMarketingUnderstanding,
  setStep
}) => {

  const StopCategoryOptions = ['Photos', 'Graphics', 'Themes', 'Fonts', 'Add-Ons', '3D']

  return (
    <div>
      <div className="form-header">
        <div className="title">
          <div>Seller Application</div>
          <div>Tell us a little about yourself</div>
        </div>
        <div className="step">
          Step 2 of 2
        </div>
      </div>

      <div className="info">Your answers will help us provide you with a more personalized experience as a seller!</div>
    
      <Input 
        label='When creating products to sell, which best describes your perspectives on quality?' 
        options={StopCategoryOptions} />
      
      <Input 
        label='How would you describe your experience level as an online seller?' 
        options={StopCategoryOptions} />

      <Input 
        label='How would you understand your understanding of business and marketing?' 
        options={StopCategoryOptions} />

      <div onClick={() => setStep(1)}>Back</div>
      <button onClick={() => setStep(2)}>Next</button>

    </div>
  )
}

export default SellerApplicationStep2;