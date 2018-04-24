import React from 'react';
import { PropTypes } from 'prop-types';
import Item from './Item';
import conf from '../../config';
import Paginator from '../Paginator/presenter';

const Table = ({ result }) => (
  <div className="container-fluid">
    {result.hits.map(item => <Item key={item.objectID} item={item} />)}
    <Paginator page={result.page} nbPages={result.nbPages} />
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
