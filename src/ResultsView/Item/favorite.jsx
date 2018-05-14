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

    const { itemId, isFavorite } = props;

    this.state = {
      isLoading: false,
      isFavorite: isFavorite(itemId),
    };
  }

  addToFavorites() {
    this.setState({ isLoading: true });
  }

  render() {
    const { itemId, onAddFavorite, onRemoveFavorite } = this.props;
    const { isLoading, isFavorite } = this.state;
    const FavIcon = isFavorite ? (
      <IconHeart
        style={{ color: '#F4A261' }}
        onClick={() => {
          this.setState({ isLoading: true });
          onRemoveFavorite(itemId);
          setTimeout(() => this.setState({ isLoading: false, isFavorite: false }), 1000);
          // this.forceUpdate();
        }}
      />
    ) : (
      <IconHeart
        onClick={() => {
          this.setState({ isLoading: true });
          onAddFavorite(itemId);
          setTimeout(() => this.setState({ isLoading: false, isFavorite: true }), 1000);
          // this.forceUpdate();
        }}
      />
    );

    return isLoading ? Loading : FavIcon;
  }
}

Favorite.propTypes = {
  itemId: PropTypes.string.isRequired,
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
