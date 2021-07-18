import React, { useState } from 'react';
import '../App.css';

import SellerApplicationStep1 from './SellerApplicationStep1';
import SellerApplicationStep2 from './SellerApplicationStep2';
import SellerApplicationComplete from './SellerApplicationComplete';

const SellerApplicationForm = () => {

  const [step, setStep] = useState(1);

  // Step 1
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [shopCategory, setShopCategory] = useState(null)
  const [portfolioLink, setPortfolioLink] = useState('')
  const [authoredConfirmation, setAuthoredConfirmaton] = useState(false)
  const [hasOnlineStore, setHasOnlineStore] = useState(false)
  const [onlineStores, setOnlineStores] = useState([])

  // Step 2 
  const [perspectiveOnQuality, setPerspectiveOnQuality] = useState(null)
  const [sellerExperienceLevel, setSellerExperienceLevel] = useState(null)
  const [businessMarketingUnderstanding, setBusinessMarketingUnderstanding] = useState(null)


  return (
    <div className="seller-application-form">
    {
      step === 1 ?
        <SellerApplicationStep1 
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          shopCategory={shopCategory} setShopCategory={setShopCategory}
          portfolioLink={portfolioLink} setPortfolioLink={setPortfolioLink}
          authoredConfirmation={authoredConfirmation} setAuthoredConfirmaton={setAuthoredConfirmaton}
          hasOnlineStore={hasOnlineStore} setHasOnlineStore={setHasOnlineStore}
          onlineStores={onlineStores} setOnlineStores={setOnlineStores}
          setStep={setStep}
        />
      : step === 2 ?
        <SellerApplicationStep2 
          perspectiveOnQuality={perspectiveOnQuality} setPerspectiveOnQuality={setPerspectiveOnQuality}
          sellerExperienceLevel={sellerExperienceLevel} setSellerExperienceLevel={setSellerExperienceLevel}
          businessMarketingUnderstanding={businessMarketingUnderstanding} setBusinessMarketingUnderstanding={setBusinessMarketingUnderstanding}
          setStep={setStep}
        />
      : step === 3 ?
        <SellerApplicationComplete />
      : null
    }
    </div>
  )
  
}

export default SellerApplicationForm;