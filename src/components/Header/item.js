import React from 'react';
import Button from '../Button/presenter';
import classNames from 'classnames';

const HeaderItem = ({onSort, sortKey, style, activeSort}) => {
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSort}
  );
  return (
  <span style={style}>
      <Button className={sortClass} onClick={() => onSort(sortKey)}>{sortKey}</Button>
  </span>)
};

export default HeaderItem;