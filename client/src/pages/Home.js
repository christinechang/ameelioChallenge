import React from 'react';

const Home = (props) => {
  return (
    <div className="mainPage">
      <h2>Big Book List Site</h2>
      <p>This was an exercise and will serve as future reference.  It includes:</p>
      <ul>
        <li>React Router</li>
        <li>Fetch data from file</li>
        <li>Some input items are required</li>
        <li>Handle bad or no URL </li>
        <li>Handle Date - correct format but, doesn't check actual valid date - ie: 2/30/96 passes</li>
      </ul>
      <p>Still To do: </p>
      <ul>
        <li>Post changes </li>
        <li>Edit existing book</li>
        <li>Read/Write from file</li>
        <li>Handle input arrays for categories, authors</li>
        <li>Typescript</li>
      </ul>
      <p> Note that initially ISBN was used for ID, but the database had several
        books without ISBN, so I create an ID on entry which is used to index into
        book array to get info to display full.
      </p>
      <h3>note - to get this running:</h3>
      <p> (open terminal in vsCode in ameelioChallenge dir) cd server; npm start</p>
      <p> (open another terminal) cd client; npm start</p>
    </div>
  );
}

export default Home;