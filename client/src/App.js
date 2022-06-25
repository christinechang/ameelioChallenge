import React, { useState, useEffect } from 'react';
import FormSingle from './FormSingle';
import BookInfoDisplay from './BookInfoDisplay';
import BookList from './BookList';
import BookForm from './BookForm';

import './App.css';

function App() {
  const [newTitle, setNewTitle] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(function effectFunction() {
    const url = "http://localhost:5000/api";
    fetch(url)
      .then(response => response.json())
      .then(({ data: books }) => {
        setBooks(books);
        console.log('FETCH BOOKS in App.js');
      })
      .catch((err) => {
        console.log('Fetch ERROR.......', err);
      })
  },[]);

  return (
    <div className="App">
      <BookForm />

      <FormSingle handleSubmit={setNewTitle} handleChange={setNewTitle} />
      {newTitle && <div>{`{Title: ${newTitle}}`} </div>}

      <BookInfoDisplay bookInfo={books[0]} />

      <BookList allBooks={books} />
    </div>
  );
}

export default App;
