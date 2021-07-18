import React, { useState } from 'react';

const Input = ({ label, type, options, value, setInput, placeholder, error }) => {

  return (
    <>
      <label>{label}</label>
      { options 
        ? <select onChange={e => setInput(e.target.value)}>
            { value === null ? 
              <option value="" selected disabled hidden>{placeholder}</option> : null 
            }
            {
              options.map(option => {
                return <option value={option.value} selected={value === option.value ? true : false}>{option.label}</option>
              })
            }
          </select>

        : type === 'textarea' ? 
        <textarea 
          value={value} 
          onChange={e => setInput(e.target.value)}
          placeHolder={placeholder ? placeholder : ''}
        />

        : <input 
            type={type} 
            value={value} 
            onChange={e => setInput(e.target.value)}
            placeHolder={placeholder ? placeholder : ''}
          />
      }
      { error !== '' ? <small className="error">{error}</small> : null }
    </>
  )
}

export default Input;