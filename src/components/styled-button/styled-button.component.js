import React from 'react';
import './styled-button.style.scss';

export const StyleButton = ({ children, ...props }) =>  // 这个地方的children是html tag 之间的东西

   (
    <button className="custom-button" {...props}>
      {children}
    </button>
  )
;

export default StyleButton;
