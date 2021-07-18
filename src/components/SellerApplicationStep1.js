import React, { useState } from 'react';

import Input from './Input';

const SellerApplicationStep1 = ({ 
  firstName, setFirstName,
  lastName, setLastName,
  shopCategory, setShopCategory,
  portfolioLink, setPortfolioLink,
  hasOnlineStore, setHasOnlineStore,
  onlineStores, setOnlineStores,
  authoredConfirmation, setAuthoredConfirmation,
  firstNameError, setFirstNameError,
  lastNameError, setLastNameError,
  shopCategoryError, setShopCategoryError,
  setStep }) => {

  const StopCategoryOptions = [
    { value: 'photos', label: 'Photos' },
    { value: 'graphics', label: 'Graphics' },
    { value: 'themes', label: 'Themes' },
    { value: 'fonts', label: 'Fonts' },
    { value: 'addons', label: 'Add-Ons' },
    { value: '3d', label: '3D' }
  ]

  function nextStep() {
    firstName === '' ? setFirstNameError('Please enter your first name') : setFirstNameError('')
    lastName === '' ? setLastNameError('Please enter your last name') : setFirstNameError('')
    shopCategory === null ? setShopCategoryError('Please enter a shop category') : setShopCategoryError('')
    if(firstName !== '' && lastName !== '' && shopCategory !== null) {
      setStep(2)
    }
  }

  return (
    <div>
      <div className="form-header">
        <div className="title">
          <div>Seller Application</div>
          <div>Share your work with us</div>
        </div>
        <div className="step">
          Step 1 of 2
        </div>
      </div>

      <div className="info">To ensure the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you'd be a great seller.</div>
    
      <div className="form">
        <div className="name">
          <Input 
            label='First Name' 
            type='text' 
            value={firstName} 
            setInput={setFirstName}
            error={firstNameError}
          />
         
          <Input 
            label='Last Name' 
            type='text' 
            value={lastName} 
            setInput={setLastName} 
            error={lastNameError}
          />
        </div>

        <Input 
          label='Shop Category' 
          value={shopCategory} 
          setInput={setShopCategory} 
          options={StopCategoryOptions}
          error={shopCategoryError}
        />

        <Input 
          label='Portfolio Link' 
          type='text' 
          value={portfolioLink} 
          setInput={setPortfolioLink} 
          placeholder={'mysite.com'} 
        />
       
        { portfolioLink !== '' ?
          <div>
            <input type="checkbox" 
              value={authoredConfirmation} 
              onChange={() => setAuthoredConfirmation(authoredConfirmation ? false : true)} />
            <span>Yes, I confirm that the content submitted is authored by me.</span>
          </div> : null
        }

        <span>Do you already have an online store?</span>
        <div><input type="radio" value={true} checked={hasOnlineStore} onChange={e => setHasOnlineStore(e.target.checked)} /> Yes</div>
        <div><input type="radio" value={false} checked={!hasOnlineStore} onChange={e => setHasOnlineStore(!e.target.checked)} /> No</div>

        { hasOnlineStore ? 
          <Input type={'textarea'} label='Online stores I sell on today' value={onlineStores} setInput={setOnlineStores} placeholder={'Enter urls'} />
         : null 
        }

        <button onClick={() => nextStep(2)}>Next</button>

      </div>
    </div>
  )
}

export default SellerApplicationStep1;