import React, { Component } from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';
import SearchForm from './SearchForm/presenter';
import Link from '../Link/presenter';
import NavbarToggle from './NavbarToggle/presenter';
import NavbarLink from './NavbarLink/presenter';
import NavbarDropdownLink from './NavbarDropdownLink/presenter';
import * as menuTypes from '../../constants/menu';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: this.props.location.pathname,
    };
  }

  render() {
    const { currentLocation } = this.state;
    const {
      elements, searchTerm, onSearchChange, onSearchSubmit, history,
    } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" href="/dummy">
          Navbar
        </Link>
        <NavbarToggle target="mainNavbar" />

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mr-auto">
            {elements.map((element) => {
              switch (element.type) {
                case menuTypes.LINK_MENU_TYPE:
                  return (
                    <NavbarLink
                      key={v4()}
                      href={element.href}
                      currentLocation={currentLocation}
                      disabled={element.disabled}
                      history={history}
                    >
                      {element.title}
                    </NavbarLink>
                  );
                case menuTypes.DROPDOWN_MENU_TYPE:
                  return <NavbarDropdownLink dropdown={element} key={v4()} />;
                default:
                  return '';
              }
            })}
          </ul>
          <SearchForm
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onSearchSubmit={onSearchSubmit}
          />
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      type: PropTypes.string,
    }),
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.string,
      children: PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }),
    }),
  ])),
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  location: {
    hash: '',
    pathname: '/',
    search: '',
  },
  elements: [],
  searchTerm: '',
};

export default Nav;
