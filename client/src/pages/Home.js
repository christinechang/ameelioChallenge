import React from 'react';
import BookList from '../BookList';

const Home = (props) => {
  return (
    <div className="mainPage">
      <h2>All Books</h2>
      <BookList books={props.books}/>
    </div>
  );
}

export default Home;