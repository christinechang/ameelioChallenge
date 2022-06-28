import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const InputSingle = (props) => {
    return (
        <div className="infoLine">
            <div className="listLineItem colLabel ">{props.label || 'Value'}</div>
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
const BookForm = (props) => {
    const { addBook, idx } = props;
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
        addBook(values);
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

    const newBookForm = (
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
            </form>
        </div>
    );

    return (
        (submitted && valid)
            ? (<div className="aSection lineList">
                <div className="pageTitle"> SUCCESSFULLY SUBMITTED </div>

                <NavLink
                    to={`/${idx}`}
                    className="linkBtn">
                    Click here to see new book info.
                </NavLink>
            </div>)
            : newBookForm
    )
}

export default BookForm;