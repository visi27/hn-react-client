import { PropTypes } from 'prop-types';
import React from 'react';
import Paginator from '../Paginator/index';
import algolia from '../_config/algolia';
import { favoritesFactory } from '../_services/Favorites/Favorites';
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
    searchTerm: algolia.DEFAULT_QUERY,
  },
};

export default Table;
