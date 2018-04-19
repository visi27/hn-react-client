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
  constructor (props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReversed: false,
    };

    this.onSort = this.onSort.bind(this);
  }

  render () {
    const {list, onDismiss} = this.props;
    const {sortKey, isSortReversed} = this.state;

    const sortedList = isSortReversed && (sortKey !== 'NONE') ? SORTS[sortKey](list) : SORTS[sortKey](list).reverse();
    return (
      <div className="table">
        <Header onSort={this.onSort} activeSort={sortKey}/>
        {sortedList.map(item => (
          <Item key={item.objectID} item={item} onDismiss={onDismiss}/>
        ))}
      </div>
    );
  }

  onSort (newSortKey: string) {
    const {sortKey, isSortReversed} = this.state;

    // If new sort key is the same as old sort key treat the click as reversing sort direction.
    const shouldSortRevers = (sortKey === newSortKey) ? !isSortReversed : isSortReversed;
    this.setState({sortKey: newSortKey, isSortReversed: shouldSortRevers});
  }
}

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
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
