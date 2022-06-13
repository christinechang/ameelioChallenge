import React from "react";

const Books = (props) => {
    const {books} = props;

    return (
        <div>
            BOOKS:
            <ul>
                {books.forEach((book) => (
                    <li>book.title</li>
                ))}
            </ul>
        </div>
    );
}
export default Books;
