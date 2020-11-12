import React, { Component } from 'react';
import './printType.css';

class PrintType extends Component {

  render() {

    return (
      <div className="print-type item-search">
        <label htmlFor="printType">Print Type: </label>
        <select
          id="printType"
          name="printType"
          onChange={e => this.props.handleTypeChange(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    )
  }
}

export default PrintType;