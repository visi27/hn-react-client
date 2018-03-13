import React from 'react';
import Item from '../Item/index';
import Header from '../Header/index';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
};

const Table = ({list, searchTerm, onDismiss, sortKey, onSort, isSortReversed}) => {
  const sortedList = isSortReversed ? SORTS[sortKey](list) : SORTS[sortKey](list).reverse();
  return (
    <div className="table">
      <Header onSort={onSort} activeSort={sortKey}/>
      {sortedList.map(item => (
        <Item key={item.objectID} item={item} onDismiss={onDismiss}/>
      ))}
    </div>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    }).isRequired,
  ),
  searchTerm: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
