import { connect } from 'react-redux';
import Nav from './presenter';

const mapStateToProps = (state) => {
  const { elements } = state.menu;
  return {
    elements,
  };
};

export default connect(mapStateToProps, null)(Nav);
