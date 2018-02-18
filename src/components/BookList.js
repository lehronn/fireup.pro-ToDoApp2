import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions'
import Book from '../containers/BookContainer';

const mapStateToProps = state => (
  { books: state.books }
);

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: []
  };
}

  render() {
    return (
      <div className={style.bookList}>
        <ul>
          {books.map(({ title, author, year, genere }) =>
            <li>{title}-{author}-{year}-{genere}</li>
          )}
        </ul>
      </div>
    );
  }
}

// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

// export default BookList;
export default connect (mapStateToProps) (BookList);
