import React, { useState } from "react";
import BookInfoDisplay from "./BookInfoDisplay"

const InputSingle = (props) => {
    return (
        <div className="listLine">
            <div className=" listLineLabel listLineItem">{props.label || 'Value'}</div>
            <input
                id={props.itemName}
                name={props.itemName}
                className="listLineItem"
                type="text"
                placeholder={props.label}
                value={props.values[props.itemName]}
                onChange={props.onChange}
            />
        </div>
    );
}
const BookForm = () => {
    const [values, setValues] = useState({
        title: '',
        isbn: '',
        pageCount: '',
        publishDate: '',
        thumbnailUrl: '',
        shortDescription: '',
        longDescription: '',
        authors: '',
        status: '',
        categories: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleInputChange = (event, itemName) => {
        event.persist();
        setValues((prevState) => ({
            ...prevState,
            [itemName]: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.title && values.shortDescription && values.authors) {
            setValid(true);
        }
        setSubmitted(true);
        console.log('values on submit: ', values);
        // add new book to list. (put) and then reset
        // resetForm();
    };

    const resetForm = () => {
        setValues({
            title: '',
            isbn: '',
            pageCount: '',
            publishDate: '',
            thumbnailUrl: '',
            shortDescription: '',
            longDescription: '',
            authors: '',
            status: '',
            categories: ''
        });
    };

    return (
        <div className="aSection lineList">
            <div className="pageTitle">New Book Entry</div>
            <form onSubmit={handleSubmit} >
                <InputSingle itemName="title" label="Title*" onChange={(event) => handleInputChange(event, 'title')} values={values} />
                {submitted && !values.title ? <span className="requiredMsg listLineItem" required={true}>Title is required</span> : null}
                <InputSingle itemName="isbn" label="ISBN" onChange={(event) => handleInputChange(event, 'isbn')} values={values} />
                <InputSingle itemName="pageCount" label="Page Count" onChange={(event) => handleInputChange(event, 'pageCount')} values={values} />
                <InputSingle itemName="publishDate" label="Publish Date" onChange={(event) => handleInputChange(event, 'publishDate')} values={values} />
                <InputSingle itemName="thumbnailUrl" label="Thumbnail Url" onChange={(event) => handleInputChange(event, 'thumbnailUrl')} values={values} />
                <InputSingle itemName="shortDescription" label="Short Description*" onChange={(event) => handleInputChange(event, 'shortDescription')} values={values} />
                {submitted && !values.shortDescription ? <span className="requiredMsg listLineItem">Short Description is required</span> : null}
                <InputSingle itemName="longDescription" label="Long Description" onChange={(event) => handleInputChange(event, 'longDescription')} values={values} />
                <InputSingle itemName="authors" label="Authors*" onChange={(event) => handleInputChange(event, 'authors')} values={values} />
                {submitted && !values.authors ? <span className="requiredMsg listLineItem">Authors are required</span> : null}
                <InputSingle itemName="status" label="Status" onChange={(event) => handleInputChange(event, 'status')} values={values} />
                <InputSingle itemName="categories" label="Categories" onChange={(event) => handleInputChange(event, 'categories')} values={values} />

                <button className="submitButton">Submit</button>
                {submitted && valid
                    ? (<div className="aSection lineList">
                        <div className="title"> SUCCESSFULLY SUBMITTED NEW BOOK: </div>
                        <BookInfoDisplay bookInfo={values} />
                    </div>)
                    : null}

            </form>
        </div>
    )
}

export default BookForm;