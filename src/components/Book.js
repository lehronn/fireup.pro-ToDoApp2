import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';
import style from './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.bookList}>
        {this.props.map(item => (
          <span>
            {item.title}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </span>
        ))}
      </div>
    );
  }
}

// Book.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default Book;
