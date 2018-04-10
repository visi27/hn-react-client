import React from 'react';

const Button = ({ className = 'button-inline', children, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
