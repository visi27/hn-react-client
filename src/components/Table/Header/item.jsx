import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import Button from '../../Button/presenter';

const HeaderItem = ({
  onSort, sortKey, style, activeSort,
}) => {
  const sortClass = classNames('button-inline', {
    'button-active': sortKey === activeSort,
  });
  return (
    <span style={style}>
      <Button className={sortClass} onClick={() => onSort(sortKey)}>
        {sortKey}
      </Button>
    </span>
  );
};

HeaderItem.propTypes = {
  onSort: PropTypes.func,
  sortKey: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string,
  }),
  activeSort: PropTypes.string,
};

HeaderItem.defaultProps = {
  onSort: () => {},
  sortKey: '',
  style: {
    width: '30%',
  },
  activeSort: PropTypes.string,
};

export default HeaderItem;
