import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../Button/presenter';
import * as style from './style';

const Item = ({ item, onDismiss }) => (
  <div key={item.objectID} className="container-fluid">
    <span style={style.largeColumn}>
      <a href={item.url}>{item.title}</a>
    </span>
    <div className="list-inline">
      <span className="list-inline-item">Author: {item.author}</span>
      <span className="list-inline-item">Comments: {item.num_comments}</span>
      <span className="list-inline-item">Points: {item.points}</span>
      <span className="list-inline-item">
        <Button className="btn btn-outline-danger btn-sm" onClick={() => onDismiss(item.objectID)}>
          Dismiss
        </Button>
      </span>
    </div>
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
  onDismiss: PropTypes.func,
};

Item.defaultProps = {
  onDismiss: () => {},
};

export default Item;
