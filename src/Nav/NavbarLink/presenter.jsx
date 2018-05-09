import React from 'react';
import { PropTypes } from 'prop-types';

const NavbarLink = ({
  currentLocation, href, disabled, children, history,
}) => {
  let className = 'nav-item';
  className += href === currentLocation && !disabled ? ' active' : '';
  const disabledClass = disabled ? ' disabled' : '';

  return (
    <li className={className}>
      <a
        className={`nav-link ${disabledClass}`}
        href={href}
        onClick={(e) => {
          e.preventDefault();
          history.push(href);
        }}
      >
        {children}
      </a>
    </li>
  );
};

NavbarLink.propTypes = {
  currentLocation: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  history: PropTypes.shape({}).isRequired,
};

NavbarLink.defaultProps = {
  currentLocation: '/',
  href: '#',
  disabled: false,
  children: 'Menu',
};

export default NavbarLink;
