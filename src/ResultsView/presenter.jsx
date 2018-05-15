import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Paginator from '../Paginator/index';
import algolia from '../_config/algolia';
import { favoritesFactory } from '../_services/Favorites/Favorites';
import Item from './Item';

const loaderWrapper = {
  position: 'absolute',
  width: '100px',
  height: '50px',
  top: '50%',
  left: '50%',
  'margin-left': '-50px' /* margin is -0.5 * dimension */,
  'margin-top': '-25px',
};

const Loading = (
  <div style={loaderWrapper}>
    <ReactLoading type="bars" color="#F4A261" height="5em" width="5em" />
  </div>
);

const favorites = favoritesFactory();

class ResultsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isError: false,
      error: '',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({ isLoading: true });
    favorites
      .getFavoritesFromAPI()
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        this.setState({ isError: true, error: err });
      });
  }

  render() {
    const { result } = this.props;
    const { isLoading, isError, error } = this.state;

    const returnComponent = isLoading ? (
      Loading
    ) : (
      <div className="container-fluid">
        {result.hits.map(item => (
          <Item
            key={item.objectID}
            item={item}
            isFavorite={favorites.isFavorite}
            onAddFavorite={favorites.add}
            onRemoveFavorite={favorites.remove}
          />
        ))}
        <Paginator />
      </div>
    );
    return isError ? <span>{error.toString()}</span> : returnComponent;
  }
}

ResultsView.propTypes = {
  result: PropTypes.shape({
    hits: PropTypes.array,
    page: PropTypes.number,
    nbPages: PropTypes.number,
    searchTerm: PropTypes.string,
  }),
};

ResultsView.defaultProps = {
  result: {
    hits: [],
    page: 0,
    nbPages: 0,
    searchTerm: algolia.DEFAULT_QUERY,
  },
};

export default ResultsView;
