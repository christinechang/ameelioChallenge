import { request } from 'express';
import React, {useState} from 'react';
import './App.css';
import Books from './Books'

const [books, setBooks] = useState([]);

function getAllBooks(setData) {
  const url = "http://localhost:5000/api";
  
  const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  };

  const parseJson = response => {
    return response.json()
  };

  fetch(url)
    .then(checkStatus)
    .then(parseJson)
    .then(function(data) {
      console.log('Request succeeded with JSON response', data[0]);
      setBooks(data);
    }).catch(function(err) {
      console.log('Request failed', err);
    });

  /////////////////////////
  // let req = new XMLHttpRequest(); // get XHR
  
  // req.onreadystatechange = function () {
  //   if (this.readyState === XMLHttpRequest.DONE &&
  //     this.status === 200) {
  //     let response = JSON.parse(this.response);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.data[0]);
  //     setData(response.data);
  //   }
  // };

  // req.open("GET", url);
  // req.send();
  ////////////////////////////
}

function App() {
  const [books, setBooks] = useState([]);
  
  console.log('BOOKS-----', books[0]);
  return (
    <div className="App">
      <button onClick={getAllBooks}> Get Books</button>
    <ul>
        {books.forEach((book) => (
          <li>{book.title}</li>
        ))}
    </ul>
      <Books books={books}/>
    </div>
  );
}

export default App;
