import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => (
  <div className="mainPage">
    <h2>404</h2>
    <p>Page not found!</p>
    <Link to ='/' className='btn'>
      Back to Home
    </Link>
  </div>
);

export default Error;