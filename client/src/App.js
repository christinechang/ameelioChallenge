// import { request } from 'express';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import './App.css';

const BookInfoItem = (props) => {
  return (
    <div className="bookItem">
      <div className="itemLabel">{props.label}:</div>
      <div>{props.value || ''}</div>
    </div>
  )
}
const BookInfo = (props) => {
  const bookInfo = props.bookInfo;
  const listing = (
    <div className="bookSingle">
      <BookInfoItem label = 'Title' value = {bookInfo && bookInfo.title}/>
      <BookInfoItem label = 'Authors' value = {bookInfo && bookInfo.authors}/>
      <BookInfoItem label = 'ISBN' value = {bookInfo && bookInfo.isbn}/>
      <BookInfoItem label = 'Category' value = {bookInfo && bookInfo.category}/>
      <BookInfoItem label = 'Short Description' value = {bookInfo && bookInfo.shortDescription}/>
    </div>
);
  return listing
}

const Book1Line = (props) => {
  const book = props.book;
  return (
    <li key={`${book.isbn}.${book.title.slice(0,4)}`}>{book.title}- {book.authors.join(', ')}</li>
  )
}
function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(function effectFunction() {
    const url = "http://localhost:5000/api";
    fetch(url)
      .then(response => response.json())
      .then(({ data: books }) => {
        setBooks(books);
    });
  },[]); // only happens on load
  return (
    <>
    <BookInfo bookInfo={books[0]}/>
    <h2>BOOKLIST</h2>
    <ul>
      {books.map((book, idx)  => 
        <Book1Line book={book} />
      )}
    </ul>
    </>
  );
}


function App() {
  const [newTitle, setNewTitle] = useState('');

  return (
    <div className="App">
      {/* <button onClick={getAllBooks}> Get Books</button> */}
      <Form handleSubmit={setNewTitle}/>
      <div>new Title: {newTitle}</div>
      <BookList/>
    </div>
  );
}

export default App;
