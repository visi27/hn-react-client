import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  display: none;
  position: relative;
  padding: 5px;
  margin: 5px 0px;
  flex-direction: column;
  justify-content: center;
  ${''} top: 0;
  ${''} height: 30px;
  width: 30px;
  cursor: pointer;
  ${''} z-index: 10;
  ${''} @media (max-width: 768px) {
    display: flex;
  }
`;
const IconBarTop = styled.div`
  height: 5px;
  background: ${props => (props.theme.text ? props.theme.text : 'white')};
  margin: 3px 0px;
  transition: all 0.2s ease;
  transform: ${props =>
    (props.open ? 'rotate(-45deg) translate(-25%, 7px)' : 'rotate(0deg) translate(0px, 0px)')};
`;
const IconBarMiddle = styled.div`
  height: 5px;
  background: ${props => (props.theme.text ? props.theme.text : 'white')};
  margin: 3px 0px;
  transition: all 0.1s ease;
  width: ${props => (props.open ? '0%' : '100%')};
`;
const IconBarBottom = styled.div`
  height: 5px;
  background: ${props => (props.theme.text ? props.theme.text : 'white')};
  margin: 3px 0px;
  transition: all 0.2s ease;
  transform: ${props =>
    (props.open ? 'rotate(45deg) translate(-25%, -6px)' : 'rotate(0deg) translate(0px, 0px)')};
`;

const MenuIcon = ({ open, onClick }) => (
  <Toggle role="button" onClick={onClick} open={open}>
    <IconBarTop open={open} />
    <IconBarMiddle open={open} />
    <IconBarBottom open={open} />
  </Toggle>
);

MenuIcon.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

MenuIcon.defaultProps = {
  onClick: () => {},
  open: false,
};

export default MenuIcon;
