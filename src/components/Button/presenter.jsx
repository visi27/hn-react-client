import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ className, children, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: 'button-inline',
  onClick: () => {},
};

export default Button;
