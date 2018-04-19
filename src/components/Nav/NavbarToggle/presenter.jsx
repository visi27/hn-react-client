import React from 'react';
import { PropTypes } from 'prop-types';

const NavbarToggle = ({ target }) => (
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target={`#${target}`}
    aria-controls={target}
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
);

NavbarToggle.propTypes = {
  target: PropTypes.string,
};

NavbarToggle.defaultProps = {
  target: 'mainNavbar',
};

export default NavbarToggle;
