import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookForm from './pages/BookForm';
import BookInfo from './pages/BookInfo';
import BookList from './pages/BookList';
import Error from './pages/Error';
import { createId } from './utilities';
import { BookInfoObject } from './interfaces/BookInfoInterfaces';

import './App.css';

function App() {
  const [books, setBooks] = useState<BookInfoObject[]>([]);

  const addBook = (newBook: BookInfoObject) => {
    const newBookWId = { ...newBook, id: createId(newBook.isbn, newBook.title) };
    setBooks((prevState: BookInfoObject[]) => ([...prevState, newBookWId]));
  };

  useEffect(function effectFunction() { // onEntry read data
    const url = "http://localhost:5000/api";
    fetch(url) // FETCH BOOKS in App.js
      .then(response => response.json())
      .then(({ data: books }) => {
        const booksWId = books.map((book: BookInfoObject) => {
          return ({ ...book, id: createId(book.isbn, book.title) });
        });
        setBooks(booksWId);
      })
      .catch((err) => {
        console.log('Fetch ERROR.......', err);
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />     {/* adds nav bar to ALL pages     */}
        <Routes>
          <Route path='/' element={<Home books={books} />} />
          <Route path='/bookList' element={<BookList books={books} />} />
          <Route path='/bookList/:id' element={<BookInfo books={books} />} />
          <Route path='/addBook' element={<BookForm addBook={addBook} idx={books.length} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
