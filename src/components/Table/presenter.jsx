import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../Header';
import Item from '../Item';
import conf from '../../config';

const Table = ({ result }) => (
  <div className="table">
    <Header />
    {result.hits.map(item => <Item key={item.objectId} item={item} />)}
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
