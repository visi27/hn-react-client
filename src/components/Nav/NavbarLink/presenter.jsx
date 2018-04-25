import React from 'react';
import { PropTypes } from 'prop-types';

const NavbarLink = ({
  itemKey, currentLocation, href, disabled, children, onClick,
}) => {
  let className = 'nav-item';
  className += href === currentLocation && !disabled ? ' active' : '';
  const disabledClass = disabled ? ' disabled' : '';

  return (
    <li className={className}>
      <a className={`nav-link ${disabledClass}`} href={href} onClick={() => onClick(itemKey)}>
        {children}
      </a>
    </li>
  );
};

NavbarLink.propTypes = {
  itemKey: PropTypes.string,
  currentLocation: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
};

NavbarLink.defaultProps = {
  itemKey: '',
  currentLocation: '/',
  href: '#',
  disabled: false,
  children: 'Menu',
  onClick: () => {},
};

export default NavbarLink;
