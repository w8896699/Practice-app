import React from 'react';
import './styled-button.style.scss';

export const StyleButton = ({ children, color, ...props }) => (
// 这个地方的children是html tag 之间的东西

  // TO DO 这个color,我记得可以把它pass到style里面去,
  <button className={`${color && 'color'} custom-button`} {...props}>
    {children}
  </button>
);
export default StyleButton;
