import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="navbtn">BookList </Link>
            <Link to='/addBook'className="navbtn">Add Book </Link>
        </nav>
    );
}

export default Navbar;