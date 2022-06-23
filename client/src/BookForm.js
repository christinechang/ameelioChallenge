import React, { useState } from "react";
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
        firstName: '',
        lastName: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((prevState) => ({
            ...prevState,
            firstName: event.target.value,
        }));
    };
    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((prevState) => ({
            ...prevState,
            lastName: event.target.value,
        }));
    };
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        resetForm();
    };

    const resetForm = () => {
        setValues({
            firstName: '',
            lastName: '',
            email: ''
        });
    };

    return (
        <div className="aSection">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                <InputSingle
                    itemName="firstName"
                    label="First Name"
                    onChange={handleFirstNameInputChange}
                    values={values}
                />
                {submitted && !values.firstName ? <span>Please enter First Name</span> : null}
                <InputSingle
                    itemName="lastName"
                    label="Last Name"
                    onChange={handleLastNameInputChange}
                    values={values}
                />
                {submitted && !values.lastName ? <span>Please enter Last Name</span> : null}

                <InputSingle
                    itemName="email"
                    label="Email"
                    onChange={handleEmailInputChange}
                    values={values}
                />
                {submitted && !values.email ? <span>Please enter email</span> : null}

                <button>Submit</button>
                <div> {values.firstName}, {values.lastName}, {values.email}</div>
                {submitted && valid ? <div>Success!</div> : null}

            </form>
        </div>
    )
}

export default BookForm;