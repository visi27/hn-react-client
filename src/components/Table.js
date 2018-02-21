import React from 'react'
import Item from './Item/index'

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

const Table = ({list, searchTerm, onDismiss}) =>
  <div className="table">
    {
      list.filter(isSearched(searchTerm)).map(item =>
        <Item
          key = {item.objectID}
          item = {item}
          onDismiss = {onDismiss}
        />
      )
    }
  </div>

export default Table