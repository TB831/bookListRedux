// Renders a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className='list-group-item'>
        {book.title
        }</li>
    })
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => { // Takes are application state as an argument and returns props for BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
const mapDispactToProps = (dispatch) => { // Whenever select book is called, the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispactToProps)(BookList);  // Returns a smart component(BookList)/ Container
