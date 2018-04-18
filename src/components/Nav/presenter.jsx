import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/presenter';
import Link from '../Link/presenter';
import NavbarToggle from './components/NavbarToggle/presenter';
import NavbarLink from './components/NavbarLink/presenter';
import NavbarDropdownLink from './components/NavbarDropdownLink/presenter';
import * as menuTypes from '../../constants/constants';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Home',
    };

    this.changeActiveLink = this.changeActiveLink.bind(this);
  }

  changeActiveLink(newActiveLink) {
    this.setState({ activeLink: newActiveLink });
  }

  render() {
    const { activeLink } = this.state;
    const { elements } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
                      key={element.title}
                      href={element.href}
                      itemKey={element.title}
                      activeKey={activeLink}
                      onClick={this.changeActiveLink}
                    >
                      {element.title}
                    </NavbarLink>
                  );
                case menuTypes.DROPDOWN_MENU_TYPE:
                  return <NavbarDropdownLink dropdown={element} />;
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
  elements: PropTypes.arrayOf(PropTypes.oneOf([
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
};

Nav.defaultProps = {
  elements: [],
};

export default Nav;
