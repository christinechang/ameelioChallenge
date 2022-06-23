import React, { useState } from "react";
// Title, ISBN, Page count, Published date, THumbnail URL, ShortDescription, LongDescription, AUthors, Status, Categories
// add to list of books and reset the form
// Simple test case
const FormSingle = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('value: ', value);
        props.handleSubmit(value);
        setValue('');
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log('value: ', value);
        props.handleChange(value);
    }

    return (
        <form onSubmit={handleSubmit} onChange={handleChange} className="list">
            <div className="listLineItem">{props.label || 'Value'}</div>
            <input
                type="text"
                placeholder={props.label || 'value'}
                value={value}
                onChange={
                    event => {
                        setValue(event.target.value);
                    }
                }
                required
            />
            <button>Submit</button>
        </form>
    );
}

export default FormSingle;