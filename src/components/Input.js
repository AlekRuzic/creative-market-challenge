import React, { useState } from 'react';

const Input = ({ label, type, options, value, setInput }) => {

  const [selectedOption, setSelectedOption] = useState(null)

  function handleChange(e, data) {
    setInput(data.value);
  };

  return (
    <>
      <label>{label}</label>
      { options ?
      <select onChange={e => setInput(e.target.value)}>
        { value === null ? <option value="" selected disabled hidden>Select A Category</option> : null }
        {
          options.map(option => {
            return <option value={option.value} selected={value === option.value ? true : false}>{option.label}</option>
          })
        }
      </select>
      : type === 'textarea' ?
        <textarea value={value} onChange={e => setInput(e.target.value)}></textarea>
        : <input type={type} value={value} onChange={e => setInput(e.target.value)}/>
      }
    </>
  )
}

export default Input;