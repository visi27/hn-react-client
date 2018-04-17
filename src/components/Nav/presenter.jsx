import React, { Component } from 'react';
import SearchForm from '../SearchForm/presenter';
import Link from '../Link/presenter';
import NavbarToggle from './components/NavbarToggle/presenter';
import NavbarLink from './components/NavbarLink/presenter';
import NavbarDropdownLink from './components/NavbarDropdownLink/presenter';

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
    const dropdownItems = [
      { name: 'Action', link: '/dummy' },
      { name: 'Another action', link: '/dummy' },
      { name: 'Boom Boom', link: '/dummy' },
    ];
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" href="/dummy">
          Navbar
        </Link>
        <NavbarToggle target="mainNavbar" />

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mr-auto">
            <NavbarLink
              key="Home"
              href="#"
              itemKey="Home"
              activeKey={activeLink}
              onClick={this.changeActiveLink}
            >
              Home
            </NavbarLink>
            <NavbarLink
              key="Link"
              href="#"
              itemKey="Link"
              activeKey={activeLink}
              onClick={this.changeActiveLink}
            >
              Link
            </NavbarLink>
            <NavbarLink
              key="Disabled"
              href="#"
              itemKey="Disabled"
              activeKey={activeLink}
              onClick={this.changeActiveLink}
            >
              Disabled
            </NavbarLink>
            <NavbarDropdownLink items={dropdownItems} />
          </ul>
          <SearchForm />
        </div>
      </nav>
    );
  }
}

export default Nav;
