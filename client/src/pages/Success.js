import React from 'react';
import BookInfoDisplay from '../BookInfoDisplay';

const Success = (props) => {
    const { book } = props;
    const title = 'SUCCESSFULLY SUBMITTED NEW BOOK: ';
    return (
        <>
            <BookInfoDisplay book={book} title={title}/>
        </>
    );
}
export default Success;