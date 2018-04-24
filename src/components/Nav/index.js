import { connect } from 'react-redux';
import Nav from './presenter';
import { setSearch, submitSearch } from '../../actions/search';

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
