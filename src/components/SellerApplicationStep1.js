import React, { useState } from 'react';

import Input from './Input';

const SellerApplicationStep1 = ({ 
  firstName, setFirstName,
  lastName, setLastName,
  shopCategory, setShopCategory,
  portfolioLink, setPortfolioLink,
  hasOnlineStore, setHasOnlineStore,
  onlineStores, setOnlineStores,
  authoredConfirmation, setAuthoredConfirmaton,
  setStep }) => {

  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [shopCategoryError, setShopCategoryError] = useState(false)

  const StopCategoryOptions = [
    { value: 'photos', label: 'Photos' },
    { value: 'graphics', label: 'Graphics' },
    { value: 'themes', label: 'Themes' },
    { value: 'fonts', label: 'Fonts' },
    { value: 'addons', label: 'Add-Ons' },
    { value: '3d', label: '3D' }
  ]


  function setError(field) {

  }

  function nextStep() {
    firstName === '' ? setFirstNameError(true) : setFirstNameError(false)
    lastName === '' ? setLastNameError(true) : setFirstNameError(false)
    shopCategory === null ? setShopCategoryError(true) : setShopCategoryError(false)
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
          <Input label='First Name' type='text' value={firstName} setInput={setFirstName} />
          { firstNameError ? <small className="error">Please enter your first name </small> : null } 

          <Input label='Last Name' type='text' value={lastName} setInput={setLastName} />
          { lastNameError ? <small className="error">Please enter your first name </small> : null } 
        </div>

        <Input label='Shop Category' value={shopCategory} setInput={setShopCategory} options={StopCategoryOptions} />
        { shopCategoryError ? <small className="error">Please enter a shop category</small> : null } 

        <Input label='Portfolio Link' type='text' />
        <input type="checkbox" 
          value={authoredConfirmation} 
          onChange={() => setAuthoredConfirmaton(authoredConfirmation ? false : true)} />

        <div><input type="radio" value={true} checked={hasOnlineStore} onChange={e => setHasOnlineStore(e.target.checked)} /> Yes</div>
        <div><input type="radio" value={false} checked={!hasOnlineStore} onChange={e => setHasOnlineStore(!e.target.checked)} /> No</div>

        { hasOnlineStore ? 
            <Input label='Online stores I sell on today' value={onlineStores} setInput={setOnlineStores} />
         : null }
         
        <button onClick={() => nextStep()}>Next</button>

      </div>
    </div>
  )
}

export default SellerApplicationStep1;