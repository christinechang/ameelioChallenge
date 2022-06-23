import React, { useState } from "react";
import FormSingle from "./FormSingle";
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

    const submitAll = () => {
        console.log('all:', title, isbn, pageCount, pubDate, thumbNail_url, shortDescription, longDescription, authors, status, categories);
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
        console.log('event: ', event.target)
    }

    return (
        <div className="aSection lineList">
            <FormSingle id="title" onChange={handleChange} label="Title" key="Title" required={true}/>
            <FormSingle id="isbn" onChange={setIsbn} label="ISBN"  key="ISBN" required={true}/>
            <FormSingle id="pageCount" onChange={setPageCount} label="Page Count"  key="pageCount" required={true}/>
            <FormSingle id="pubDate" onChange={setPubDate} label="Publish Date"  key="pubDate" required={true}/>
            <FormSingle id="thumbNail_url" onChange={setThumbNail_url} label="Thumbnail URL"  key="thumbNail_url" required={true}/>
            <FormSingle id="shortDescription" onChange={setShortDescription} label="Short Description"  key="shortDescription" required={true}/>
            <FormSingle id="longDescription" onChange={setLongDescription} label="Long Description"  key="longDescription" required={true}/>
            <FormSingle id="authors" onChange={setAuthors} label="Authors"  key="authors" required={true}/>
            <FormSingle id="status" onChange={setStatus} label="Status"  key="status" required={true}/>
            <FormSingle id="categories" onChange={setCategories} label="Categories"  key="categories" required={true}/>
            <button onClick={submitAll}>Submit </button>
        </div>
    );
}

export default NewBook;