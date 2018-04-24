import { connect } from 'react-redux';
import { setSearch, submitSearch } from '../../actions/search';
import Search from './presenter';

function mapStateToProps(state) {
  const { searchTerm } = state.search;
  return {
    searchTerm,
  };
}

const mapDispatchToProps = dispatch => ({
  onSearchChange(event) {
    dispatch(setSearch(event.target.value));
  },
  onSearchSubmit() {
    dispatch(submitSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
