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
            <div key="headerIsbn" className="listLineItem boldTitle">ISBN</div>
            <div key="headerTitle" className="listLineItem">Title</div>
            <div key="headerAuthors" className="listLineItem">Author(s)</div>
        </li>
        <li key="finePrint" className="listLine">
            <div></div>
            <div className="finePrint">(click for more info)</div>
        </li>
    </>
);

const Book1Line = ({book}) => { // {book} is shorter than (props) and then book = props.book
    return (
        <li key={book.id} className="listLine">
            <div key={`${book.id}.isbn`} className=" listLineItem">{book.isbn} </div>
            <NavLink
                to={`/bookList/${book.id}`}
                key={`${book.id}.id`}
                className=" listLineItem gridId">
                {book.title}
            </NavLink>
            {/* <div key={`${book.id}.title`} className=" listLineItem boldTitle">{book.title}</div> */}
            <div key={`${book.id}.auth`} className=" listLineItem">{formatArray(book.authors)}</div>
        </li>
    )
}

const BookList = (props) => {
    const { books } = props;
    return (
        <div className="section">
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
