import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class NavbarDropdownLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(event) {
    event.preventDefault();
    this.setState({ show: !this.state.show });
  }

  render() {
    const show = this.state.show ? 'show' : '';
    const { dropdown } = this.props;
    const items = dropdown.children;
    return (
      <li className={`nav-item dropdown ${show}`}>
        <a
          className="nav-link dropdown-toggle"
          href={dropdown.href}
          id={dropdown.id}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toggleDropdown}
        >
          {dropdown.title}
        </a>
        <div className={`dropdown-menu ${show}`} aria-labelledby={dropdown.id}>
          {items.map(item => (
            <a className="dropdown-item" href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      </li>
    );
  }
}

NavbarDropdownLink.propTypes = {
  dropdown: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }),
  }),
};

NavbarDropdownLink.defaultProps = {
  dropdown: [],
};

export default NavbarDropdownLink;
