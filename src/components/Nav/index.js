import { connect } from 'react-redux';
import Nav from './presenter';

function mapStateToProps(state) {
  const { elements } = state.menu;
  return {
    elements,
  };
}

export default connect(mapStateToProps, null)(Nav);
