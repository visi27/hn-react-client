import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button/presenter';
import * as style from './style';

const Item = ({ item, onDismiss }) => (
  <div key={item.objectID} className="table-row">
    <span style={style.largeColumn}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={style.midColumn}>{item.author}</span>
    <span style={style.smallColumn}>{item.num_comments}</span>
    <span style={style.smallColumn}>{item.points}</span>
    <span style={style.smallColumn}>
      <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
    </span>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    title_highlighted: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    story_text: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    objectID: PropTypes.string.isRequired,
  }).isRequired,
  onDismiss: PropTypes.func,
};

Item.defaultProps = {
  onDismiss: () => {},
};

export default Item;