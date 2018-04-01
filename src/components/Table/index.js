import React, { Component } from 'react';
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

class Table extends Component {

  render () {
    return (
      <div className="table">
        <Header />

          {/*<Item key={item.objectID} item={item} onDismiss={onDismiss}/>*/}

      </div>
    );
  }
}

export default Table;
