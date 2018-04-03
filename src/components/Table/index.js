import React, { Component } from 'react';
import Item from '../Item/index';
import Header from '../Header/index';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import { connect } from 'react-redux'

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
};

class Table extends Component {

  render () {
    const { result } = this.props;
    console.log(result);
    return (
      <div className="table">
        <Header />
        {
          result.hits.map((item, key) => {
            return (
              <Item key={key} item={item}/>
            )
          })
        }
          {/*<Item key={item.objectID} item={item} onDismiss={onDismiss}/>*/}

      </div>
    );
  }
}

function mapStateToProps (state) {
  const { result } = state;

  return { result }
}

export default connect(mapStateToProps, null)(Table)
