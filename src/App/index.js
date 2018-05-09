import { connect } from 'react-redux';
import loadMenu from '../_actions/menu';
import { fetchData } from '../_actions/result';
import App from './presenter';

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadMenu());
    dispatch(fetchData({}));
  },
  onLocationChange() {
    dispatch(fetchData({}));
  },
});

export default connect(null, mapDispatchToProps)(App);
