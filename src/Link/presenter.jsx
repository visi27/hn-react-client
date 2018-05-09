import React from 'react';
import { PropTypes } from 'prop-types';

const Link = ({ className, href, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Link.defaultProps = {
  className: '',
  href: '#',
  children: 'Link',
};

export default Link;
