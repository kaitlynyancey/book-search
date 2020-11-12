import React, { Component } from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {

  render() {

    return (
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" name="title" id="title" placeholder="Shakespeare" 
          onChange={e => this.props.handleSearchChange(e.target.value)}/>
      </div>
    )
  }
}

export default SearchBar;