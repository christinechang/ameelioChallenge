import React, { useState } from "react";

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
        <div className="aSection">
            <div className="title">Single Form</div>
            <form onSubmit={handleSubmit} onChange={handleChange} className="listLine">
                <div className="listLineItem colLabel">{props.label || 'Value'}</div>
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