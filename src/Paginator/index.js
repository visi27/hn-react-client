import { connect } from 'react-redux';
import { goToPage, nextPage, prevPage } from '../_actions/result';
import Paginator from './presenter';

function mapStateToProps(state) {
  const { page, nbPages } = state.result;
  return {
    page,
    nbPages,
  };
}

const mapDispatchToProps = dispatch => ({
  onNextPage() {
    dispatch(nextPage());
  },
  onPrevPage() {
    dispatch(prevPage());
  },
  onGoToPage(page) {
    dispatch(goToPage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
