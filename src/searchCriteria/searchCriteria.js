import React, { Component } from 'react';
import PrintType from '../printType/printType';
import SearchBar from '../searchBar/searchBar';
import BookType from '../bookType/bookType'
import './searchCriteria.css';

class SearchCriteria extends Component {

  render() {

    return (
      <div className="search-criteria">
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <SearchBar
            handleSearchChange={this.props.handleSearchChange} />
          <div className="group-search">
            <PrintType
              handleTypeChange={this.props.handleTypeChange} />
            <BookType
              handleFilterChange={this.props.handleFilterChange} />
          </div>
          <div className="booksearch__button">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchCriteria;