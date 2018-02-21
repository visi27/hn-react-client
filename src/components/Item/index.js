import React from 'react'
import Button from '../Button'
import * as style from './style'

const Item = ({ item, onDismiss }) =>
      <div key={item.objectID} className="table-row">
        <span style={style.largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={style.midColumn}>{item.author}</span>
        <span style={style.smallColumn}>{item.num_comments}</span>
        <span style={style.smallColumn}>{item.points}</span>
        <span style={style.smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
          >
            Dismiss
          </Button>
        </span>
      </div>

export default Item