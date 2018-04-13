import React from 'react';
import { PropTypes } from 'prop-types';
import * as style from '../Item/style';
import HeaderItem from './item';

const Header = ({ onSort, activeSort }) => (
  <div className="table-header">
    <HeaderItem style={style.largeColumn} onSort={onSort} sortKey="TITLE" activeSort={activeSort} />
    <HeaderItem style={style.midColumn} onSort={onSort} sortKey="AUTHOR" activeSort={activeSort} />
    <HeaderItem
      style={style.smallColumn}
      onSort={onSort}
      sortKey="COMMENTS"
      activeSort={activeSort}
    />
    <HeaderItem
      style={style.smallColumn}
      onSort={onSort}
      sortKey="POINTS"
      activeSort={activeSort}
    />
    <span style={style.smallColumn}>DISMISS</span>
  </div>
);

Header.propTypes = {
  onSort: PropTypes.func,
  activeSort: PropTypes.string,
};

Header.defaultProps = {
  onSort: () => {},
  activeSort: '',
};
export default Header;
