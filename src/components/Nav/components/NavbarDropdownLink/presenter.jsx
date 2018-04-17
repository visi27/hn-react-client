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
    const { items } = this.props;
    return (
      <li className={`nav-item dropdown ${show}`}>
        <a
          className="nav-link dropdown-toggle"
          href="http://example.com"
          id="dropdown01"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toggleDropdown}
        >
          Dropdown
        </a>
        <div className={`dropdown-menu ${show}`} aria-labelledby="dropdown01">
          {items.map(item => (
            <a className="dropdown-item" href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
      </li>
    );
  }
}

NavbarDropdownLink.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, link: PropTypes.string })),
};

NavbarDropdownLink.defaultProps = {
  items: [],
};

export default NavbarDropdownLink;
