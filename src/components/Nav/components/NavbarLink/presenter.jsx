import React from 'react';
import { PropTypes } from 'prop-types';

const NavbarLink = ({
  itemKey, activeKey, href, disabled, children, onClick,
}) => {
  let className = 'nav-item';
  className += itemKey === activeKey ? ' active' : '';
  className += disabled ? ' disabled' : '';

  return (
    <li className={className}>
      <a className="nav-link" href={href} onClick={() => onClick(itemKey)}>
        {children}
      </a>
    </li>
  );
};

NavbarLink.propTypes = {
  itemKey: PropTypes.string,
  activeKey: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
};

NavbarLink.defaultProps = {
  itemKey: '',
  activeKey: '',
  href: '#',
  disabled: false,
  children: 'Menu',
  onClick: () => {},
};

export default NavbarLink;
