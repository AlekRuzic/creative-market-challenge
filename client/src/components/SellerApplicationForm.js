import React, { useState } from 'react';
import '../App.scss';
import axios from 'axios';

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
  const [onlineStores, setOnlineStores] = useState('')

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
  const [portfolioError, setPortfolioError] = useState('')

  // Go to next step, or submit form
  function nextStep(number) {
    if(number === 2) {
      firstName === '' ? setFirstNameError('Please enter your first name') : setFirstNameError('')
      lastName === '' ? setLastNameError('Please enter your last name') : setLastNameError('')
      shopCategory === null ? setShopCategoryError('Please enter a shop category') : setShopCategoryError('')
      if(firstName !== '' && lastName !== '' && shopCategory !== null) {
        setStep(2)
      }
    } else if (number === 3) {
      perspectiveOnQuality === null ? setPerspectiveOnQualityError('Please select an option') : setPerspectiveOnQualityError('')
      sellerExperienceLevel === null ? setSellerExperienceLevelError('Please select an option') : setSellerExperienceLevelError('')
      businessMarketingUnderstanding === null ? setBusinessMarketingUnderstandingError('Please select an option') : setBusinessMarketingUnderstandingError('')
      if(perspectiveOnQuality !== null && sellerExperienceLevel !== null && businessMarketingUnderstanding !== null) {
        submitApplication();
      }
    }
  }

  function submitApplication() {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // Make an array of URLs out of whatever the user put in the textarea
    const onlineStoresArray = onlineStores.replace(/,\s+/g,",").split(/[\n,\s+]/)

    const body = JSON.stringify({
      firstName,
      lastName,
      shopCategory,
      portfolioLink,
      onlineStoresArray,
      perspectiveOnQuality,
      sellerExperienceLevel,
      businessMarketingUnderstanding
    })

    axios.post('/sellerapplication', body, config)
    .then(response => {
      console.log(response)
      setStep(3)
    })
    .catch(err => {
      console.log(err)
      alert('Something went wrong when submitting your application, please try again.')
    })
  }

  return (
    <div>
    {
      step === 1 ?
        <SellerApplicationStep1 {...{
            firstName, setFirstName, firstNameError, setFirstNameError,
            lastName, setLastName, lastNameError, setLastNameError,
            shopCategory, setShopCategory, shopCategoryError, setShopCategoryError,
            portfolioLink, setPortfolioLink,
            portfolioError, setPortfolioError,
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