import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import v4 from 'uuid';
import Brand from './Brand';
import Dropdown from './Dropdown';
import Link from './Link';
import MenuIcon from './MenuIcon';
import { transitionToAuto, transitionFromAuto, wasClicked } from '../utils/dom';
import SearchForm from './SearchForm/';

const Container = styled.div`
  width: 100%;
  z-index: 10000;

  @media (max-width: 768px) {
    ${''} overflow: hidden;
    position: initial;
    ${''} height: 50px;
    transition: height 0.3s ease;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${props => (props.theme.primary ? props.theme.primary : '#15317e')};
  color: ${props => (props.theme.text ? props.theme.text : 'white')};
  min-height: ${props => (props.theme.height ? `${props.theme.height}px` : '50px')};

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
  }
`;
const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    width: 100%;
  }
`;
const Header = styled.li`
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${''} z-index: 10;
    width: 100%;
  }
`;

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: -1,
      open: false,
    };

    this.handleTransitionend = this.handleTransitionend.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.changeDropdown = this.changeDropdown.bind(this);
    this.renderBrand = this.renderBrand.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
    // Necessary to allow container to expand to accommodate open dropdowns
    this.container.addEventListener('transitionend', this.handleTransitionend);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    this.container.removeEventListener('transitionend', this.handleTransitionend);
  }
  handleTransitionend(e) {
    const { open } = this.state;
    if (open && e.propertyName === 'height') {
      this.container.style.height = 'auto';
    }
  }
  handleDocumentClick(e) {
    const { open } = this.state;
    if (!wasClicked(e, this.nav) && open) {
      this.close();
    }
  }

  toggle(e) {
    const { open } = this.state;
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    if (open) {
      this.close();
    } else {
      this.open();
    }
  }
  close() {
    this.setState({
      open: false,
      activeIndex: -1,
    });
    transitionFromAuto(this.container, 50);
  }
  open() {
    this.setState({
      open: true,
    });
    transitionToAuto(this.container);
  }
  changeDropdown(i) {
    this.setState({
      activeIndex: i,
    });
  }
  renderBrand() {
    const { title, href } = this.props.brand;
    return <Brand title={title} href={href} />;
  }
  renderItems() {
    const searchForm = (
      <li className="text-truncate w-100">
        <SearchForm />
      </li>
    );
    const { activeIndex, open } = this.state;
    let { items } = this.props;
    items = items.map((item, i) => {
      if (item.element) {
        return React.cloneElement(item.element, { ...item.element.props, key: v4() });
      } else if (item.dropdown) {
        return (
          <Dropdown
            className="w-100"
            key={v4()}
            index={i}
            open={activeIndex === i}
            items={item.items}
            title={item.title}
            changeDropdown={this.changeDropdown}
            controlled
          />
        );
      }
      return <Link key={v4()} href={item.href} title={item.title} />;
    });
    items.push(searchForm);
    return (
      <Items className="w-100" open={open}>
        {items}
      </Items>
    );
  }

  render() {
    const { theme, brand, items } = this.props;
    const { open } = this.state;
    return (
      <ThemeProvider theme={theme || {}}>
        <Container
          open={open}
          items={items}
          brand={brand}
          innerRef={(el) => {
            this.container = el;
          }}
        >
          <Nav
            open={open}
            innerRef={(el) => {
              this.nav = el;
            }}
          >
            <Header open={open}>
              <MenuIcon
                ref={(el) => {
                  this.icon = el;
                }}
                onClick={this.toggle}
                open={open}
              />
              {brand && this.renderBrand()}
            </Header>
            {items && this.renderItems()}
            {/* <SearchForm /> */}
          </Nav>
        </Container>
      </ThemeProvider>
    );
  }
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  brand: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    text: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  brand: {
    title: 'Hello',
    href: 'http://www.google.com',
  },
  theme: PropTypes.shape({
    primary: '#3AAED8',
    secondary: '#2BD9FE',
    text: 'white',
  }),
};
