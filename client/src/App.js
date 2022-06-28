import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookForm from './pages/BookForm';
import BookInfo from './pages/BookInfo';
import Success from './pages/Success';
import Error from './pages/Error';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    const newBookWId = {...newBook, id: books.length + 1}
    setBooks((prevState) => ([...prevState, newBookWId]));
  };

  useEffect(function effectFunction() { // onEntry read data
    const url = "http://localhost:5000/api";
    fetch(url)
      .then(response => response.json())
      .then(({ data: books }) => {
        // add id here
        const booksWId = books.map((book, key) => (
          {...book, id: key + 1}
        ));
        setBooks(booksWId);
        console.log('FETCH BOOKS in App.js');
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
          <Route path='/:isbn' element={<BookInfo books={books} />} />
          <Route path='/addBook' element={<BookForm addBook={addBook} idx={books.length + 1} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
