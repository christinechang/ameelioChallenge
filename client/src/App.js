import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewBook from './pages/NewBook';
import Error from './pages/Error';

import './App.css';

function App() {
  // const [newTitle, setNewTitle] = useState('');
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
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>our navbar</nav>     {/* adds nav bar to ALL pages     */}
        <Routes>
          <Route path='/' element={<Home books={books}/>} />
          <Route path='/newBook' element={<NewBook />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>our footer</footer>     {/* adds footer to ALL pages     */}

      </BrowserRouter>
      {/* <BookForm />
      <FormSingle handleSubmit={setNewTitle} handleChange={setNewTitle} />
      {newTitle && <div>{`{Title: ${newTitle}}`} </div>}

      <BookInfoDisplay bookInfo={books[0]} />

      <BookList allBooks={books} /> */}
    </div>
  );
}

export default App;
