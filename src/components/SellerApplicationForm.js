import React, { useState } from 'react';
import '../App.css';

import SellerApplicationStep1 from './SellerApplicationStep1';
import SellerApplicationStep2 from './SellerApplicationStep2';
import SellerApplicationComplete from './SellerApplicationComplete';

const SellerApplicationForm = () => {

  const [step, setStep] = useState(1);

  // Step 1 State
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [shopCategory, setShopCategory] = useState(null)
  const [portfolioLink, setPortfolioLink] = useState('')
  const [authoredConfirmation, setAuthoredConfirmation] = useState(false)
  const [hasOnlineStore, setHasOnlineStore] = useState(false)
  const [onlineStores, setOnlineStores] = useState([])

  // Step 2 State
  const [perspectiveOnQuality, setPerspectiveOnQuality] = useState(null)
  const [sellerExperienceLevel, setSellerExperienceLevel] = useState(null)
  const [businessMarketingUnderstanding, setBusinessMarketingUnderstanding] = useState(null)

  // Errors
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [shopCategoryError, setShopCategoryError] = useState('')
  const [perspectiveOnQualityError, setPerspectiveOnQualityError] = useState('')
  const [sellerExperienceLevelError, setSellerExperienceLevelError] = useState('')
  const [businessMarketingUnderstandingError, setBusinessMarketingUnderstandingError] = useState('')

  // Go to next step, or submit form
  function nextStep(number) {
    if(number === 2) {
      firstName === '' ? setFirstNameError('Please enter your first name') : setFirstNameError('')
      lastName === '' ? setLastNameError('Please enter your last name') : setFirstNameError('')
      shopCategory === null ? setShopCategoryError('Please enter a shop category') : setShopCategoryError('')
      if(firstName !== '' && lastName !== '' && shopCategory !== null) {
        setStep(2)
      }
    } else if (number === 3) {
      console.log(firstName)
      console.log(lastName)
      console.log('category: ' + shopCategory)
      console.log(portfolioLink)
      console.log('authored Conf: ' + authoredConfirmation)
      console.log('has store: ' + hasOnlineStore)
      console.log('stores: ' + onlineStores)

      console.log(perspectiveOnQuality)
      console.log(sellerExperienceLevel)
      console.log(businessMarketingUnderstanding)

      perspectiveOnQuality === null ? setPerspectiveOnQualityError('Please select an option') : setPerspectiveOnQualityError('')
      sellerExperienceLevel === null ? setSellerExperienceLevelError('Please select an option') : setSellerExperienceLevelError('')
      businessMarketingUnderstanding === null ? setBusinessMarketingUnderstandingError('Please select an option') : setBusinessMarketingUnderstandingError('')
      if(perspectiveOnQuality !== null && sellerExperienceLevel !== null && businessMarketingUnderstanding !== null) {
        setStep(3)
      }
    }
  } 

  return (
    <div className="seller-application-form">
    {
      step === 1 ?
        <SellerApplicationStep1 {...{
            firstName, setFirstName, firstNameError, setFirstNameError,
            lastName, setLastName, lastNameError, setLastNameError,
            shopCategory, setShopCategory, shopCategoryError, setShopCategoryError,
            portfolioLink, setPortfolioLink,
            authoredConfirmation, setAuthoredConfirmation,
            hasOnlineStore, setHasOnlineStore,
            onlineStores, setOnlineStores,
            setStep, nextStep
          }} 
        />

      : step === 2 ?
        <SellerApplicationStep2 {...{
            perspectiveOnQuality, setPerspectiveOnQuality, 
            perspectiveOnQualityError, setPerspectiveOnQualityError,
            sellerExperienceLevel, setSellerExperienceLevel, 
            sellerExperienceLevelError, setSellerExperienceLevelError,
            businessMarketingUnderstanding, setBusinessMarketingUnderstanding,
            businessMarketingUnderstandingError, setBusinessMarketingUnderstandingError,
            setStep, nextStep
          }}
        />

      : step === 3 ?
        <SellerApplicationComplete />
      : null
    }
    </div>
  )
  
}

export default SellerApplicationForm;