import React from 'react';
import { useParams } from 'react-router-dom';
import BookInfoDisplay from '../BookInfoDisplay';

const BookInfo = (props) => {
  // const { isbn } = useParams();
  const { id } = useParams();
  const pageTitle = props.pageTitle || '';
  // const book = props.books.find((book) => book.isbn === isbn);
  const book = props.books[id - 1];
  return (
    <BookInfoDisplay book={book} pageTitle={pageTitle}/>
  );
}
export default BookInfo;