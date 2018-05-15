import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/fa/';
import ReactLoading from 'react-loading';

const IconHeart = props => <Icon icon={heart} {...props} />;
const Loading = <ReactLoading type="spin" color="#F4A261" height={18} width={18} />;

class Favorite extends Component {
  constructor(props) {
    super(props);

    const { item, isFavorite } = props;

    this.state = {
      isLoading: false,
      isFavorite: isFavorite(item.objectID),
      isError: false,
      error: '',
    };
  }

  addToFavorites() {
    this.setState({ isLoading: true });
  }

  render() {
    const { item, onAddFavorite, onRemoveFavorite } = this.props;
    const {
      isLoading, isFavorite, isError, error,
    } = this.state;

    const FavIcon = isFavorite ? (
      <IconHeart
        style={{ color: '#F4A261' }}
        onClick={() => {
          this.setState({ isLoading: true });
          onRemoveFavorite(item)
            .then(() => {
              this.setState({ isLoading: false, isFavorite: false });
            })
            .catch((err) => {
              this.setState({ isError: true, error: err });
            });
        }}
      />
    ) : (
      <IconHeart
        onClick={() => {
          this.setState({ isLoading: true });
          onAddFavorite(item)
            .then(() => {
              this.setState({ isLoading: false, isFavorite: true });
            })
            .catch((err) => {
              this.setState({ isError: true, error: err });
            });
        }}
      />
    );

    const returnComponent = isLoading ? Loading : FavIcon;
    return isError ? <span>{error.toString()}</span> : returnComponent;
  }
}

Favorite.propTypes = {
  item: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    title_highlighted: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    story_text: PropTypes.string,
    num_comments: PropTypes.number.isRequired,
    objectID: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.func,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
};

Favorite.defaultProps = {
  isFavorite: () => {},
  onAddFavorite: () => {},
  onRemoveFavorite: () => {},
};

export default Favorite;
