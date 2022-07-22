import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createId } from "../utilities";

const isDateValid = (dateToTest) => {
    const date = new Date(dateToTest);
    return (date instanceof Date && !isNaN(date));
}

const InputSingle = (props) => (
    <div className="infoLine">
        <div className="listLineItem boldTitle ">{props.label || 'Value'}</div>
        <input
            id={props.itemName}
            name={props.itemName}
            className="listLineItem"
            type="text"
            placeholder={props.label}
            value={props.itemName === 'publishedDate' ? props.newBook[props.itemName]['$date'] : props.newBook[props.itemName]}
            onChange={props.onChange}
        />
    </div>
);


const BookForm = (props) => {
    const { addBook, idx } = props;
    const [newBook, setNewBook] = useState({
        id: '',
        title: '',
        isbn: '',
        pageCount: '',
        publishedDate: { $date: '' },
        thumbnailUrl: '',
        shortDescription: '',
        longDescription: '',
        authors: [],
        status: '',
        categories: [],
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleInputChange = (event, itemName) => {
        event.persist();
        setNewBook((prevState) => ({
            ...prevState,
            [itemName]: itemName === 'publishedDate' ? { '$date': event.target.value } : event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        // console.log('valid date?:', newBook.publishedDate.$date,isDateValid(newBook.publishedDate.$date));
        e.preventDefault();
        if (newBook.title
            && newBook.shortDescription
            && newBook.authors
            && isDateValid(newBook.publishedDate.$date)
        ) {
            setValid(true);
        }
        setSubmitted(true);
        newBook.id = createId(newBook.isbn, newBook.title)
        addBook(newBook);
        // initForm();
    };

    // const initForm = () => {
    //     setNewBook({
    //         title: '',
    //         isbn: '',
    //         pageCount: '',
    //         publishedDate: { "$date": '' },
    //         thumbnailUrl: '',
    //         shortDescription: '',
    //         longDescription: '',
    //         authors: '',
    //         status: '',
    //         categories: ''
    //     });
    // };

    const newBookForm = (
        <div className="section lineList">
            <div className="pageTitle">New Book Entry</div>
            <form onSubmit={handleSubmit} >
                <InputSingle itemName="title" label="Title*" onChange={(event) => handleInputChange(event, 'title')} newBook={newBook} />
                {submitted && !newBook.title ? <span className="requiredMsg listLineItem" required={true}>Title is required</span> : null}
                <InputSingle itemName="isbn" label="ISBN" onChange={(event) => handleInputChange(event, 'isbn')} newBook={newBook} />
                <InputSingle itemName="pageCount" label="Page Count" onChange={(event) => handleInputChange(event, 'pageCount')} newBook={newBook} />
                <InputSingle itemName="publishedDate" label="Publish Date" onChange={(event) => handleInputChange(event, 'publishedDate')} newBook={newBook} />
                {submitted && !isDateValid(newBook.publishedDate.$date) ? <span className="requiredMsg listLineItem">Date is invalid</span> : null}
                <InputSingle itemName="thumbnailUrl" label="Thumbnail Url" onChange={(event) => handleInputChange(event, 'thumbnailUrl')} newBook={newBook} />
                <InputSingle itemName="shortDescription" label="Short Description*" onChange={(event) => handleInputChange(event, 'shortDescription')} newBook={newBook} />
                {submitted && !newBook.shortDescription ? <span className="requiredMsg listLineItem">Short Description is required</span> : null}
                <InputSingle itemName="longDescription" label="Long Description" onChange={(event) => handleInputChange(event, 'longDescription')} newBook={newBook} />
                <InputSingle itemName="authors" label="Authors*" onChange={(event) => handleInputChange(event, 'authors')} newBook={newBook} />
                {submitted && !newBook.authors ? <span className="requiredMsg listLineItem">Authors are required</span> : null}
                <InputSingle itemName="status" label="Status" onChange={(event) => handleInputChange(event, 'status')} newBook={newBook} />
                <InputSingle itemName="categories" label="Categories" onChange={(event) => handleInputChange(event, 'categories')} newBook={newBook} />

                <button className="submitButton">Submit</button>
            </form>
        </div>
    );

    return (
        (submitted && valid)
            ? (<div className="section lineList">
                <div className="pageTitle"> SUCCESSFULLY SUBMITTED </div>
                <NavLink
                    to={`/booklist/${newBook.id}`}
                    className="linkBtn">
                    Click here to see new book info.
                </NavLink>
            </div>)
            : newBookForm
    )
}

export default BookForm;