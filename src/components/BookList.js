import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions'
import Book from '../containers/bookContainer';


const BookList = (props) => {
  console.dir(props);
  console.log(props);
  console.dir(props.book);
  console.dir(props.books);
  <div className={style.bookList}>
    <ul>
      props.books.map(({ props.book }) =>
      <li>{title}-{author}-{year}-{genere}</li>)
      </ul>
    </div>
};

// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

// export default BookList;
export default (BookList);
