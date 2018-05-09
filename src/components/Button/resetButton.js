import { connect } from 'react-redux';
import { resetSearch } from '../../_actions/search';
import Button from './presenter';

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(resetSearch());
  },
});

export default connect(null, mapDispatchToProps)(Button);
