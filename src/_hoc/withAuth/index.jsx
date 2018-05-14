import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import userService from '../../_services/User/index';

const WithAuth = (props) => {
  const { component: Component, ...rest } = props;
  return userService.isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  );
};

WithAuth.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default WithAuth;
