import React from 'react';
import './styled-button.style.scss';

const StyleButton = ({
  children, color, inverted, ...props
}) => (
// 这个地方的children是html tag 之间的东西

  // TO DO 这个color,我记得可以把它pass到style里面去,
  <button className={`${inverted && 'inverted'} ${color && 'color'} custom-button`} {...props}>
    {children}
  </button>
);
export default StyleButton;
