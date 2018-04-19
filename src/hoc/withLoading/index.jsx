import React from 'react';
import { PropTypes } from 'prop-types';
import Loading from '../../components/Loading/';

const withLoading = (Component) => {
  const wrapped = ({ isLoading, ...rest }) => (isLoading ? <Loading /> : <Component {...rest} />);
  wrapped.propTypes = {
    isLoading: PropTypes.bool,
  };
  wrapped.defaultProps = {
    isLoading: false,
  };
  return wrapped;
};

withLoading.propTypes = {
  Component: PropTypes.element,
};

export default withLoading;
