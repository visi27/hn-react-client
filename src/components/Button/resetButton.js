import { connect } from 'react-redux';
import { resetSearch } from '../../actions/search';
import Button from './presenter';

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(resetSearch())
  };
}

export default connect(null, mapDispatchToProps)(Button);
