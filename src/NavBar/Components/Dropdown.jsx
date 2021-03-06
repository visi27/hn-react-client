import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import v4 from 'uuid';
import { wasClicked, transitionToAuto, transitionFromAuto } from '../utils/dom';

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  position: relative;
  background: ${props =>
    (props.open && props.theme.secondary ? props.theme.secondary : 'transparent')};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    align-items: initial;
    width: 100%;
  }
`;
const Toggle = styled.li`
  display: block;
  cursor: pointer;
  padding: 0px 20px 0px 10px;
  transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;
  color: ${props => (props.theme.text ? props.theme.text : 'white')};
  line-height: ${props => (props.theme.height ? props.theme.height : '50px')};

  @media (max-width: 768px) {
    line-height: initial;
    position: relative;
    margin: 0;
    padding: 10px 20px 10px 10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: ${props => (props.open ? '9px' : '0px')};
    bottom: 0;
    right: 5px;
    margin: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${props => (props.theme.text ? props.theme.text : 'white')};
    transform: ${props => (props.open ? 'rotateX(180deg)' : 'rotateX(0deg)')};
    transform-origin: top;
    transition: inherit;

    @media (max-width: 768px) {
      top: ${props => (props.open ? '19px' : '11px')};
      right: 25px;
      bottom: ${props => (props.open ? '11px' : '10px')};
      top: none;
    }
  }
`;
const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0px;
  height: 0px;
  min-width: calc(100% - 2px);
  width: auto;
  overflow: hidden;
  list-style-type: none;
  transition: all 0.2s ease;
  background: white;
  border-left: 1px solid ${props => (props.theme.secondary ? props.theme.secondary : '#333')};
  border-right: 1px solid ${props => (props.theme.secondary ? props.theme.secondary : '#333')};
  border-bottom: 1px solid ${props => (props.theme.secondary ? props.theme.secondary : '#333')};
  border-bottom-width: ${props => (props.open ? '1px' : '0px')};
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  white-space: nowrap;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    border: none;
    color: ${props => (props.theme.secondary ? props.theme.secondary : 'black')};
    box-shadow: none;
    background: ${props => (props.theme.primary ? props.theme.primary : '#15317e')};
  }
`;
const Item = styled.li`
  position: relative;
  color: ${props => (props.theme.primary ? props.theme.primary : 'black')};
  ${''} transition: all 0.14s ease;

  &:hover {
    color: white;
    background: ${props => (props.theme.secondary ? props.theme.secondary : '#15317e')};
  }

  @media (max-width: 768px) {
    color: white;
  }
`;
const Link = styled.a`
  text-decoration: none;
  text-align: left;
  color: inherit;
  padding: 10px 10px 10px 5px;
  display: block;

  @media (max-width: 768px) {
    padding: 10px 0px 10px 40px;
  }
`;
export default class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      width: null,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }
  componentWillMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }
  componentDidMount() {
    // eslint-disable-next-line
    this.setState({
      width: getComputedStyle(this.list).width,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { open } = nextProps;
    if (open) {
      this.open();
    } else if (!open) {
      this.close();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  close() {
    transitionFromAuto(this.list, 0);
  }
  open() {
    transitionToAuto(this.list);
  }
  handleClick() {
    const { open, changeDropdown, index } = this.props;
    if (open) {
      // If dropdown is clicked while open, set Navbar's activeIndex to -1
      // to signify that all dropdowns are currently closed
      changeDropdown(-1);
    } else {
      changeDropdown(index);
    }
  }

  handleDocumentClick(e) {
    const { changeDropdown, open } = this.props;
    if (!wasClicked(e, this.menu) && open) {
      e.stopImmediatePropagation();
      this.close();
      changeDropdown(-1);
    }
  }

  renderItems() {
    let { items } = this.props;
    items = items.map(item => (
      <Item key={v4()}>
        <Link href={item.href}>{item.name}</Link>
      </Item>
    ));
    return items;
  }

  render() {
    const { title, open } = this.props;
    const { width } = this.state;
    return (
      <Menu
        open={open}
        innerRef={(el) => {
          this.menu = el;
        }}
        width={width}
      >
        <Toggle onClick={this.handleClick} open={open} width={width}>
          {title}
        </Toggle>
        <List
          open={open}
          innerRef={(el) => {
            this.list = el;
          }}
        >
          {this.renderItems()}
        </List>
      </Menu>
    );
  }
}

Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  changeDropdown: PropTypes.func.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Dropdown.defaultProps = {
  theme: PropTypes.shape({
    primary: '#3AAED8',
    secondary: '#2BD9FE',
    text: 'white',
  }),
};
