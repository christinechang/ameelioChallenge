import React from "react";
import { NavLink } from 'react-router-dom';

const formatArray = (arr2Check) => (
    // check if is array and if all elements are not empty or all blank
    Array.isArray(arr2Check)
        ? arr2Check.filter((item) => item.trim().length > 0).join(', ')
        : []
);


const Book1Line = (props) => {
    const book = props.book;
    return (
        <li key={`${book.isbn || book.title}`} className="listLine">
            <NavLink
                to={`/${book.isbn}`}
                key={`${book.id}.info`}
                className=" listLineItem listLink colLabel">
                {book.isbn}
            </NavLink>
            <div key={`${book.id}.title`} className=" listLineItem colBookTitle">{book.title}</div>
            <div key={`${book.id}.auth`} className=" listLineItem colAuthors">{`by ${formatArray(book.authors)}`}</div>

        </li>
    )
}

const BookList = (props) => {
    const { books } = props;
    return (
        <div className="aSection lineList">
            <div className="pageTitle">Book List</div>
            <ul>
                {books.map((book, idx) =>
                    <Book1Line book={book} key={`${book.id || book.title}.${book.title.slice(0, 4)}`} />
                )}
            </ul>
        </div>);
}
export default BookList;
