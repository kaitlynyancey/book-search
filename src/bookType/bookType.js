import React, { Component } from 'react';
import './bookType.css';

class BookType extends Component {

  render() {

    return (
      <div className="book-type">
        <label htmlFor="bookType">Book Type: </label>
        <select
          id="bookType"
          name="bookType"
          onChange={e => this.props.handleFilterChange(e.target.value)}>
          <option value="ebooks">All eBooks</option>
          <option value="partial">Partial Text Available</option>
          <option value="full">Full Text Available</option>
          <option value="free-ebooks">Free eBook</option>
          <option value="paid-ebooks">Paid eBook</option>
        </select>

      </div>
    )
  }
}

export default BookType;