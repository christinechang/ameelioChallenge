import React from 'react';
import { useParams } from 'react-router-dom';
import BookInfoDisplay from '../BookInfoDisplay';

const BookInfo = (props) => {
  const { isbn } = useParams();
  const title = props.title || '';
  const book = props.books.find((book) => book.isbn === isbn);
  return (
    <BookInfoDisplay book={book} title={title}/>
  );
}
export default BookInfo;