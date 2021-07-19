import React, { useState } from 'react';

const Input = ({ label, type, options, value, setInput, placeholder, error }) => {

  return (
    <div className="form-input">
      <label>{label}</label>
      { options 
        ? <select onChange={e => setInput(e.target.value)} style={{ color: value === null ? '#6E777D' : '#303538'}}>
            { value === null ? 
              <option value="" selected disabled hidden>{placeholder}</option> : null 
            }
            {
              options.map((option, i) => {
                return <option key={i} value={option.value} selected={value === option.value ? true : false}>{option.label}</option>
              })
            }
          </select>

        : type === 'textarea' ? 
        <textarea 
          value={value} 
          rows="4"
          onChange={e => setInput(e.target.value)}
          placeholder={placeholder ? placeholder : ''}
        />

        : <input 
            type={type} 
            value={value} 
            onChange={e => setInput(e.target.value)}
            placeholder={placeholder ? placeholder : ''}
          />
      }
      { error !== '' ? <small className="error">{error}</small> : null }
    </div>
  )
}

export default Input;