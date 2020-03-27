/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './form-input.style.scss';

export const FormInput = ({ handleChange, label, ...props }) => {
  const { value } = props;
  return (

    <div className="input-box">
      <input className="styled-form-input" onChange={handleChange} {...props} />
      {
          label && (
          <label
            className={`${value.length ? 'shrink' : ''} form-input-label`}
          >
            {label}
          </label>
          )
      }
    </div>
  );
};

export default FormInput;
