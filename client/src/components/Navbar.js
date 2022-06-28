import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="navBtn">BookList </Link>
            <Link to='/addBook'className="navBtn">Add Book </Link>
        </nav>
    );
}

export default Navbar;