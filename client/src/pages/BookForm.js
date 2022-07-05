import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
            value={props.itemName === 'publishedDate' ? props.values[props.itemName]['$date'] : props.values[props.itemName]}
            onChange={props.onChange}
        />
    </div>
);


const BookForm = (props) => {
    const { addBook, idx } = props;
    const [values, setValues] = useState({
        title: '',
        isbn: '',
        pageCount: '',
        publishedDate: { $date: '' },
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
            [itemName]: itemName === 'publishedDate' ? { '$date': event.target.value } : event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        console.log('valid date?:', values.publishedDate.$date,isDateValid(values.publishedDate.$date));
        e.preventDefault();
        if (values.title
            && values.shortDescription
            && values.authors
            && isDateValid(values.publishedDate.$date)
            ) {
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
            publishedDate: { "$date": '' },
            thumbnailUrl: '',
            shortDescription: '',
            longDescription: '',
            authors: '',
            status: '',
            categories: ''
        });
    };

    const newBookForm = (
        <div className="section lineList">
            <div className="pageTitle">New Book Entry</div>
            <form onSubmit={handleSubmit} >
                <InputSingle itemName="title" label="Title*" onChange={(event) => handleInputChange(event, 'title')} values={values} />
                {submitted && !values.title ? <span className="requiredMsg listLineItem" required={true}>Title is required</span> : null}
                <InputSingle itemName="isbn" label="ISBN" onChange={(event) => handleInputChange(event, 'isbn')} values={values} />
                <InputSingle itemName="pageCount" label="Page Count" onChange={(event) => handleInputChange(event, 'pageCount')} values={values} />
                <InputSingle itemName="publishedDate" label="Publish Date" onChange={(event) => handleInputChange(event, 'publishedDate')} values={values} />
                {submitted && !isDateValid(values.publishedDate.$date) ? <span className="requiredMsg listLineItem">Date is invalid</span> : null}
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
            ? (<div className="section lineList">
                <div className="pageTitle"> SUCCESSFULLY SUBMITTED </div>
                <NavLink
                    to={`/booklist/${idx}`}
                    className="linkBtn">
                    Click here to see new book info.
                </NavLink>
            </div>)
            : newBookForm
    )
}

export default BookForm;