import React from 'react';
import Header from '../Header';
import Item from '../Item';

const Table = ({ result }) => {
  console.log(result);
  return (
    <div className="table">
      <Header />
      {result.hits.map((item, key) => {
        return <Item key={key} item={item} />;
      })}
    </div>
  );
};

export default Table;
