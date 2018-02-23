import React, { Component } from 'react'
import Search from './Search'
import Table from './Table'
import './App.css'

const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: DEFAULT_QUERY,
    }
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  componentDidMount () {
    const {searchTerm} = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  render () {
    const {searchTerm, result} = this.state

    return (
      <div className="page">
        <div className="interactions">
          <Search
            searchTerm={searchTerm}
            onSearchChange={this.onSearchChange}
            onSearchSubmit={this.onSearchSubmit}
            onReset={this.onReset}
          >
            Search
          </Search>
        </div>
        {
          result &&
          <Table
            list={result.hits}
            searchTerm={searchTerm}
            onDismiss={this.onDismiss}
          />
        }
      </div>
    )
  }

  setSearchTopStories (result) {
    this.setState({result})
  }

  fetchSearchTopStories (searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  onDismiss (itemId) {
    const updatedHits = this.state.result.hits.filter(item => {
      return item.objectID !== itemId
    })

    this.setState({
      result: {...this.state.result, hits: updatedHits},
    })
  }

  onSearchChange (event) {
    this.setState({searchTerm: event.target.value})
  }

  onSearchSubmit (event) {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
    event.preventDefault()
  }

  onReset () {
    this.setState({
      result: [],
      searchTerm: '',
    })
  }
}

export default App
