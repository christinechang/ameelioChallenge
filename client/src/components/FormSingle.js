import React, { useState } from "react";

// Simple test case
// NOT USED FOR NOW.  Single Forms
const FormSingle = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('value: ', value);
        props.handleSubmit(value);
        setValue(''); // resets input to blank
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log('value: ', value);
        props.handleChange(value);
    }

    return (
        <div className="section">
            <div className="title">Single Form</div>
            <form onSubmit={handleSubmit} onChange={handleChange} className="listLine">
                <div className="listLineItem boldTitle">{props.label || 'Value'}</div>
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
                    className="listLineItem"
                />
                <button className="listLineItem">Submit</button>
            </form>
        </div>
    );
}

export default FormSingle;