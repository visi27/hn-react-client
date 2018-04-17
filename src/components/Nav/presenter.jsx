import React, { Component } from 'react';
import SearchForm from '../SearchForm/presenter';
import Link from '../Link/presenter';
import NavbarToggle from './components/NavbarToggle/presenter';
import NavbarLink from './components/NavbarLink/presenter';

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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="/dummy">
                  Action
                </a>
                <a className="dropdown-item" href="/dummy">
                  Another action
                </a>
                <a className="dropdown-item" href="/dummy">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <SearchForm />
        </div>
      </nav>
    );
  }
}

export default Nav;
