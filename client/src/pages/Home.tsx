import React from 'react';

const Home = () => {
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
        <li>Handle input arrays for categories, authors</li>
        <li>Create id for each book - combine ISBN and part title (some books missing ISBN)</li>
      </ul>
      <p>Still To do: </p>
      <ul>
        <li>Typescript</li>
        <li>Testing</li>
        <li>Post changes </li>
        <li>Edit existing book</li>
        <li>Read/Write from file</li>

      </ul>

      <h3>note - to get this running:</h3>
      <ul>
        <li> (open terminal in vsCode in ameelioChallenge dir) cd server; npm start</li>
        <li> (open another terminal) cd client; npm start</li>
      </ul>
    </div>
  );
}

export default Home;