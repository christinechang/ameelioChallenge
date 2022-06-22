import React, { useState } from "react";
// Title, ISBN, Page count, Published date, THumbnail URL, ShortDescription, LongDescription, AUthors, Status, Categories
// add to list of books and reset the form
// Simple test case
const NewBook = (props) => {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [pageCount, setPageCount] = useState('');
    const [pubDate, setPubDate] = useState('');
    const [thumbNail_url, setThumbNail_url] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [authors, setAuthors] = useState([]);
    const [status, setStatus] = useState('');
    const [categories, setCategories] = useState('');

    return (
        <div>
            <Form id="title" handleSubmit={setTitle} label="Title" key="Title"/>
            <Form id="isbn" handleSubmit={setIsbn} label="ISBN"  key="ISBN"/>
        </div>
    );
}

export default NewBook;