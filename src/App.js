import React, { Component } from 'react';
import './App.css';

import SearchCriteria from './searchCriteria/searchCriteria';
import ResultsSummary from './resultsSummary/resultsSummary';

const URL = "https://www.googleapis.com/books/v1/volumes?";
const key = "AIzaSyDYyPZ3vajz-Y5QXYQ_NA0zcy02noLTI5M";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      q: "Shakespeare",
      printType: "All",
      filter: "eBooks",
      results: [],
    }
  }

  componentDidMount() {
    const params = {
      q: this.state.q,
      printType: this.state.printType,
      key: key,
      filter: this.state.filter,
    }
    const query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    const url = URL + query;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = Object.keys(data.items)
          .map(key => data.items[key].volumeInfo)
        this.setState({
          results
        });
      });
  }

  onSearchChange(search) {
    this.setState({
      q: search
    })
  }

  onTypeChange(type) {
    this.setState({
      printType: type
    })
  }

  onFilterChange(filter) {
    this.setState({
      filter: filter
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const params = {
      q: this.state.q,
      printType: this.state.printType,
      key: key,
      filter: this.state.filter,
    }
    const query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');

    const url = URL + query;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = Object.keys(data.items)
          .map(key => data.items[key].volumeInfo)
        this.setState({
          results
        });
      });
  }

  render() {

    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <section className="search-criteria">
          <SearchCriteria
            handleSubmit={e => this.onSubmit(e)}
            handleTypeChange={type => this.onTypeChange(type)}
            handleFilterChange={filter => this.onFilterChange(filter)}
            handleSearchChange={search => this.onSearchChange(search)} />
        </section>
        <ResultsSummary
          results={this.state.results} />
      </div>
    )
  }
}

export default App;
