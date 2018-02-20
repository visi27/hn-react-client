import React, { Component } from 'react'
import './App.css'

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

const isSearched = searchTerm => item =>
     item.title.toLowerCase().includes(searchTerm.toLowerCase())


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
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange}/>
          <button type="button" onClick={this.onReset}>RESET</button>
        </form>
        {
          this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
            <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <button
                type="button"
                onClick={() => this.onDismiss(item.objectID)}
              >
                Dismiss
              </button>
            </div>,
          )
        }
        <button type="button" onClick={this.onAdd}>ADD</button>
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
