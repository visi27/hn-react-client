import { connect } from 'react-redux';
import { setSearch, submitSearch } from '../_actions/search';
import Nav from './presenter';

const mapStateToProps = (state) => {
  const { elements } = state.menu;
  return {
    elements,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearchChange(event) {
    dispatch(setSearch(event.target.value));
  },
  onSearchSubmit() {
    dispatch(submitSearch());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
