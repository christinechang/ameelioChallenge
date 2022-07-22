import React from "react";
import { NavLink } from 'react-router-dom';
import { IBookLineProps, IBookListProps } from "../interfaces/BookInterfaces";
import { array2String } from "../utilities";

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

const BookLine = ({ book, ...props }: IBookLineProps) => (
    <li key={book.id} className="listLine">
        <div key={`${book.id}.isbn`} className=" listLineItem">{book.isbn} </div>
        <NavLink
            to={`/bookList/${book.id}`}
            key={`${book.id}.id`}
            className=" listLineItem gridId">
            {book.title}
        </NavLink>
        {/* <div key={`${book.id}.title`} className=" listLineItem boldTitle">{book.title}</div> */}
        <div key={`${book.id}.auth`} className=" listLineItem">{array2String(book.authors)}</div>
    </li>
);


const BookList = ({ books, ...props }: IBookListProps) => (
    <div className="section">
        <div className="pageTitle">BOOK LIST </div>
        <ul>
            {gridHeader}
            {books.map((book, idx) =>
                <BookLine book={book} key={book.id} />
            )}
        </ul>
    </div>
);

export default BookList;
