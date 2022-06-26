import React from "react";

const formatArray = arrayIn => arrayIn.filter((item) => item.length > 0).join(', ');

const Book1Line = (props) => {
    const book = props.book;
    return (
        <li key={`${book.isbn || book.title}`} className="listLine">
            <div key={`${book.isbn}.isbn`} className=" listLineLabel listLineItem">{book.isbn}</div>
            <div key={`${book.isbn}.title`} className=" listLineItem bookTitle">{book.title}</div>
            <div key={`${book.isbn}.auth`} className=" listLineItem">{`by ${formatArray(book.authors)}`}</div>
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
                    <Book1Line book={book} key={`${book.isbn || book.title}.${book.title.slice(0, 4)}`}/>
                )}
            </ul>
        </div>);
}
export default BookList;
