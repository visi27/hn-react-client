import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'
import './App.css'
import Button from './Button'

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list,
      searchTerm: '',
    }
    this.onDismiss = this.onDismiss.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  render () {
    const {searchTerm, list} = this.state
    return (
      <div className="page">
        <div className="interactions">
          <Search
            searchTerm={searchTerm}
            onSearchChange={this.onSearchChange}
            onReset={this.onReset}
          >
            Search
          </Search>
        </div>
        <Table
          list={list}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
        />
        <Button onClick={this.onAdd}>ADD</Button>
      </div>
    )
  }

  onDismiss (itemId) {
    this.setState({
      list: this.state.list.filter(item => {
        return item.objectID !== itemId
      }),
    })
  }

  onAdd () {
    const newItem = {
      title: 'Random',
      url: 'https://github.com/random/random',
      author: 'Random, Unknown',
      num_comments: Math.floor(Math.random() * 20),
      points: Math.floor(Math.random() * 10),
      objectID: Math.floor(Math.random() * 1000),
    }

    this.setState({
      list: [...this.state.list, newItem],
    })
  }

  onSearchChange (event) {
    this.setState({searchTerm: event.target.value})
  }

  onReset () {
    this.setState({
      list,
      searchTerm: '',
    })
  }
}

export default App
