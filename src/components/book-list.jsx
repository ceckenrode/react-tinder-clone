import React, {Component} from 'react';

export default class BookList exends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
