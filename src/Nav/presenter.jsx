import PropTypes from 'prop-types';
import React, { Component } from 'react';
import v4 from 'uuid';
import Link from '../Link/presenter';
import * as menuTypes from '../_constants/menu';
import NavbarDropdownLink from './NavbarDropdownLink/presenter';
import NavbarLink from './NavbarLink/presenter';
import NavbarToggle from './NavbarToggle/presenter';
import SearchForm from './SearchForm/';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: this.props.location.pathname,
    };
  }

  render() {
    const { currentLocation } = this.state;
    const { elements, history } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" href="/dummy">
          Hacker News
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
          <SearchForm />
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
};

Nav.defaultProps = {
  location: {
    hash: '',
    pathname: '/',
    search: '',
  },
  elements: [],
};

export default Nav;
