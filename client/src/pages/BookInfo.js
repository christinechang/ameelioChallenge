import React from 'react';
import { useParams } from 'react-router-dom';
import BookInfoDisplay from '../BookInfoDisplay';

const BookInfo = (props) => {
  const { isbn } = useParams();
  const book = props.books.find((book) => book.isbn === isbn);
  return (
    <BookInfoDisplay book={book} />
  );
}
export default BookInfo;