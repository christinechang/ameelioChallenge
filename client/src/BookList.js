import React from "react";
import { NavLink } from 'react-router-dom';

const formatArray = (arr2Check) => (
    // check if is array and if all elements are not empty or all blank
    Array.isArray(arr2Check)
        ? arr2Check.filter((item) => item.trim().length > 0).join(', ')
        : []
);

const gridHeader = (
    <>
        <li key="header" className="listLine gridHeader">
            <div key="headerId" className="listLineItem">ID</div>
            <div key="headerIsbn" className="listLineItem colLabel">ISBN</div>
            <div key="headerTitle" className="listLineItem">Title</div>
            <div key="headerAuthors" className="listLineItem">Author(s)</div>
        </li>
        <li>
            <div className="finePrint">(info)</div>
        </li>
    </>
);

const Book1Line = (props) => {
    const book = props.book;
    return (
        <li key={book.id} className="listLine">
            <NavLink
                to={`/${book.id}`}
                key={`${book.id}.id`}
                className=" listLineItem gridId">
                {book.id}
            </NavLink>
            <div key={`${book.id}.isbn`} className=" listLineItem">{book.isbn} </div>
            <div key={`${book.id}.title`} className=" listLineItem gridBookTitle">{book.title}</div>
            <div key={`${book.id}.auth`} className=" listLineItem">{formatArray(book.authors)}</div>
        </li>
    )
}

const BookList = (props) => {
    const { books } = props;
    return (
        <div className="aSection lineList">
            <div className="pageTitle">BOOK LIST </div>
            <ul>
                {gridHeader}
                {books.map((book, idx) =>
                    <Book1Line book={book} key={book.id} />
                )}
            </ul>
        </div>);
}
export default BookList;
