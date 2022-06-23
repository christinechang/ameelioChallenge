import React from "react";

const formatArray = arrayIn => arrayIn.filter((item) => item.length > 0 ).join(', ');

const Book1Line = (props) => {
    const book = props.book;
    console.log('authors: ', book.authors);
    return (
        <li key={`${book.isbn || book.title}.${book.title.slice(0, 4)}`} className="listLine">
            <div className=" listLineLabel listLineItem">{book.isbn}</div>
            <div className=" listLineItem title">{book.title}</div>
            <div className=" listLineItem">{`by ${formatArray(book.authors)}`}</div>
        </li>
    )
}

const BookList = (props) => {
    const { allBooks } = props;

    return (
        <>
            <h2>BOOKLIST</h2>
            <ul>
                {allBooks.map((book, idx) =>
                    <Book1Line book={book} />
                )}
            </ul>
        </>);
}
export default BookList;
