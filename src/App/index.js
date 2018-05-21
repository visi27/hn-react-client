import { connect } from 'react-redux';
import { fetchData } from '../_actions/result';
import App from './presenter';

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(fetchData({}));
  },
  onLocationChange() {
    dispatch(fetchData({}));
  },
});

export default connect(null, mapDispatchToProps)(App);
