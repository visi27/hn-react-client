import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const A = styled.a`
  display: block;
  color: ${props => (props.theme.text ? props.theme.text : 'white')};
  text-decoration: none;
  margin: auto;
  padding: 10px;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Link = ({ title, href }) => (
  <ListItem>
    <A href={href}>{title}</A>
  </ListItem>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
