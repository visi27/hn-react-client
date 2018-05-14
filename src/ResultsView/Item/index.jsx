import moment from 'moment';
import { PropTypes } from 'prop-types';
import React from 'react';

import Favorite from './favorite';

const Item = ({
  item, isFavorite, onAddFavorite, onRemoveFavorite,
}) => (
  <div key={item.objectID} className="container-fluid item">
    <div className="list-inline">
      <span className="list-inline-item">
        <a className="h5 text-muted" href={item.url}>
          {item.title}
        </a>
      </span>
      <span className="list-inline-item">
        <Favorite
          item={item}
          isFavorite={isFavorite}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      </span>
    </div>
    <div className="list-inline">
      <span className="list-inline-item">Author: {item.author}</span>
      <span className="list-inline-item">Created: {moment(item.created_at).fromNow()}</span>
      <span className="list-inline-item">Comments: {item.num_comments}</span>
      <span className="list-inline-item">Points: {item.points}</span>
      <span className="list-inline-item">
        <a className="text-muted" href={item.url}>
          ({item.url})
        </a>
      </span>
    </div>
    <hr />
  </div>
);

Item.propTypes = {
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

Item.defaultProps = {
  isFavorite: () => {},
  onAddFavorite: () => {},
  onRemoveFavorite: () => {},
};

export default Item;
