import React from 'react';
import Item from '../Item/index';
import PropTypes from 'prop-types';

const Table = ({ list, searchTerm, onDismiss }) => (
  <div className="table">
    {list.map(item => (
      <Item key={item.objectID} item={item} onDismiss={onDismiss} />
    ))}
  </div>
);

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    }).isRequired
  ),
  searchTerm: PropTypes.string,
  onDismiss: PropTypes.func.isRequired
};

export default Table;
