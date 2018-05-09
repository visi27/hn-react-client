import { connect } from 'react-redux';
import Login from './presenter';

function mapStateToProps(state) {
  const { loggingIn } = state.auth;
  return {
    loggingIn,
  };
}

export default connect(mapStateToProps)(Login);
