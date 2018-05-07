import { PropTypes } from 'prop-types';
import React from 'react';
import conf from '../../config';
import { favoritesFactory } from '../../services/Favorites/Favorites';
import Paginator from '../Paginator/index';
import Item from './Item';

const favorites = favoritesFactory();
const Table = ({ result }) => (
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

Table.propTypes = {
  result: PropTypes.shape({
    hits: PropTypes.array,
    page: PropTypes.number,
    nbPages: PropTypes.number,
    searchTerm: PropTypes.string,
  }),
};

Table.defaultProps = {
  result: {
    hits: [],
    page: 0,
    nbPages: 0,
    searchTerm: conf.DEFAULT_QUERY,
  },
};

export default Table;
