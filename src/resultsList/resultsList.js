import React, { Component } from 'react';
import './resultsList.css';

class ResultsList extends Component {

  render() {
    const title = this.props.item.title;
    const authors = this.props.item.authors;
    const description = this.props.item.description;
    const image = this.props.item.imageLinks.thumbnail;
    const link = this.props.item.infoLink;
    const pages = this.props.item.pageCount;

    return (
      <div className="results-list">
        <h2>{title}</h2>
        <div className="group">
          <div className="item">
            <img src={image}/>
          </div>
          <div className="item">
            <p><b>Author:</b> {authors}</p>
            <p><b>Page Count:</b> {pages}</p>
            <p>{description}</p>
            <p><a href={link} target="_blank">Click Here for More Info</a></p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default ResultsList;