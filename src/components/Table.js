import React from 'react'
import Item from './Item/index'

const Table = ({list, searchTerm, onDismiss}) =>
  <div className="table">
    {
      list.map(item =>
        <Item
          key = {item.objectID}
          item = {item}
          onDismiss = {onDismiss}
        />
      )
    }
  </div>

export default Table