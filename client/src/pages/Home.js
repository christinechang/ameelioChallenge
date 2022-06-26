import React from 'react';
import BookList from '../BookList';

const Home = (props) => {
  return (
    <div className="mainPage">
      <BookList books={props.books}/>
    </div>
  );
}

export default Home;