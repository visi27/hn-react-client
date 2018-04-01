import React from 'react';

const Button = ({className = 'button-inline', children }) => (
  <button className={className} type="button">
    {children}
  </button>
);

export default Button;
