import React, { useState } from 'react';
import Input from './Input';

const SellerApplicationStep2 = ({ 
  perspectiveOnQuality, setPerspectiveOnQuality,
  sellerExperienceLevel, setSellerExperienceLevel,
  businessMarketingUnderstanding, setBusinessMarketingUnderstanding,
  perspectiveOnQualityError, setPerspectiveOnQualityError,
  sellerExperienceLevelError, setSellerExperienceLevelError,
  businessMarketingUnderstandingError, setBusinessMarketingUnderstandingError,
  setStep, nextStep
}) => {

  const perspectiveOnQualityOptions = [
    { value: 'quality5', label: "I don't care what it takes, my products are the highest quality possible" },
    { value: 'quality4', label: 'I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere' },
    { value: 'quality3', label: 'I try to get quality products out quickly, even if I need to take a shortcut now and then' },
    { value: 'quality2', label: 'I spend the minimum amount of time & effort it takes to create products that are acceptable quality' },
    { value: 'quality1', label: 'Quantity is more important to me than quality' },
  ]
  const sellerExperienceLevelOptions = [
    { value: 'experience5', label: 'I sell on multiple marketplaces and through my own website' },
    { value: 'experience5', label: 'I have experience selling through only my own website' },
    { value: 'experience5', label: 'I have experience selling through multiple marketplaces' },
    { value: 'experience5', label: 'I have experience selling through one online marketplace' },
    { value: 'experience5', label: "I'm new to selling creative products online" }
  ]
  const businessMarketingUnderstandingOptions = [
    { value: 'understanding4', label: "I have an extensive background in business and/or marketing" },
    { value: 'understanding4', label: "I'm familiar with some skills & techniques, but I'm not sure how to apply them when selling my creative work" },
    { value: 'understanding4', label: "I'm vaguely aware of basic business & marketing concepts" },
    { value: 'understanding4', label: "I'm not interested in understanding business & marketing" },
  ]

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

      <div className="form">
        <Input 
          label='When creating products to sell, which best describes your perspectives on quality?' 
          options={perspectiveOnQualityOptions} 
          value={perspectiveOnQuality} 
          setInput={setPerspectiveOnQuality} 
          error={perspectiveOnQualityError}
        />
        
        <Input 
          label='How would you describe your experience level as an online seller?' 
          options={sellerExperienceLevelOptions}
          value={sellerExperienceLevel} 
          setInput={setSellerExperienceLevel} 
          error={sellerExperienceLevelError}
        />

        <Input 
          label='How would you understand your understanding of business and marketing?' 
          options={businessMarketingUnderstandingOptions} 
          value={businessMarketingUnderstanding} 
          setInput={setBusinessMarketingUnderstanding} 
          error={businessMarketingUnderstandingError}
        />

        <div onClick={() => setStep(1)}>Back</div>
        <button onClick={() => nextStep(3)}>Next</button>
      </div>
    </div>
  )
}

export default SellerApplicationStep2;