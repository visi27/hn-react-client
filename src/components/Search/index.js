import { connect } from 'react-redux';
import { resetSearch, setSearch, submitSearch } from '../../actions/search';
import Search from './presenter';

function mapStateToProps(state) {
  const { searchTerm } = state.search;
  return {
    searchTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: event => dispatch(setSearch(event.target.value)),
    onSearchSubmit: () => dispatch(submitSearch()),
    onReset: () => dispatch(resetSearch()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
